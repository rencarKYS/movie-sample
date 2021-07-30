import React, { Component } from 'react'
import InputButton from 'components/InputButton';
import Button from 'components/Button';
import Loading from 'components/Loading';
import Modal from 'components/Modal';
import Keyword from 'components/Keyword';
import { callApi, callApiNaver } from 'utils/callApi';
import { dateParser } from 'utils/dataParser';
import styles from './MovieSearch.module.scss'

export default class MovieSearch extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: null,
      keywords: ['블랙위도우', '캡틴아메리카', '보스베이비', '포레스트검프', '컨저링', '악마를보았다', '사도', '크루엘라', '랑종'],
      searchMovieList: null,
      loading: null,
      modalStatus: null,
      selectMovieInfo: null,
      naverMovieInfo: null,
    }
  }

  componentDidUpdate() {
    if (this.state.modalStatus) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }
  }

  search = async (value) => {
    const { history } = this.props;
    this.setState({ loading: false })
    history.push(`?title=${value}`)
    const result = await callApi(`/searchMovieList.json?key=${process.env.REACT_APP_MOVIE_KEY}&movieNm=${value}`)
    this.setState({
      searchMovieList: result.movieListResult.movieList,
      loading: true,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { location } = this.props;
    if (!location.search.split('=').includes(title)) {
      this.search(title)
    }
  }

  searchKeyword = (value) => {
    const { location } = this.props;
    if (!location.search.split('=').includes(value)) {
      this.search(value)
    }
  }

  viewDetail = async (data) => {
    this.setState({ loading: false })
    const result = await callApiNaver(`?query=${data.movieNm}&yearfrom=${data.prdtYear}&yearto=${data.prdtYear}`)
    this.setState({
      naverMovieInfo: result.items[0],
      selecMovieInfo: data,
      loading: true,
      modalStatus: true,
    })
  }

  movieDetailModal = () => {
    const { naverMovieInfo, selecMovieInfo } = this.state
    return (
      <Modal 
        close={() => this.setState({ modalStatus: false })} 
        naverData={naverMovieInfo}
        selectData={selecMovieInfo}
      />
    )
  }

  render() {
    const { keywords, title, searchMovieList, loading, modalStatus } = this.state
    return (
      <>
        { loading === false && <Loading/> }
        { modalStatus === true && this.movieDetailModal() }
        <div className={styles.movie_search_wrap}>
          <form onSubmit={this.handleSubmit}>
            <InputButton
              propsInput={{
                type: 'text',
                className: styles.search_input,
                placeholder: '영화를 검색해보세요',
                value: title || '',
                onChange: (value) => this.setState({ title: value }),
              }}
              propsButton={{
                btnName: '검색',
                className: styles.search_button,
              }}
            />
          </form>
          <div className={styles.keyword_area}>
            {
              keywords.map((key, i) => <Keyword onClick={this.searchKeyword} keyword={key} key={i} />)
            }
          </div>
          <div className={styles.movie_list_area}>
            <ul>
              {
                searchMovieList?.map((movie, i) => {
                  return (
                    <li key={i} className={styles.movie_info}>
                      <p>제목 : {movie.movieNm || '-'}</p>
                      <p>장르 : {movie.genreAlt || '-'}</p>
                      <p>개봉일 : {dateParser(movie.openDt) || '-'}</p>
                      <Button
                        btnName="자세히보기"
                        className={styles.detail_movie}
                        onClick={() => this.viewDetail(movie)}
                      />
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </>
    )
  }
}
