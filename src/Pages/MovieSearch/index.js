import React, { Component } from 'react'
import InputButton from 'components/InputButton';
import Keyword from 'components/Keyword';
import { callApi } from 'utils/callApi';
import { dateParser } from 'utils/dataParser';
import styles from './MovieSearch.module.scss'

export default class MovieSearch extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: null,
      keywords: ['블랙위도우', '캡틴아메리카', '보스베이비', '포레스트검프', '컨저링', '악마를보았다', '사도', '크루엘라', '랑종'],
      searchMovieList: null,
    }
  }

  search = async (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { location, history } = this.props;
    if (!location.search.split('=').includes(title)) {
      history.push(`?title=${title}`)
      const result = await callApi(`/searchMovieList.json?key=${process.env.REACT_APP_MOVIE_KEY}&movieNm=${title}`)
      this.setState({
        searchMovieList: result.movieListResult.movieList
      })
    }
  }

  render() {
    const { keywords, title, searchMovieList } = this.state
    return (
      <div className={styles.movie_search_wrap}>
        <form onSubmit={this.search}>
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
            keywords.map((key, i) => <Keyword keyword={key} key={i} />)
          }
        </div>
        <div className={styles.movie_list_area}>
          <ul>
            {
              searchMovieList?.map((movie, i) => {
                console.log(movie)
                return (
                  <li key={i} className={styles.movie_info}>
                    <p>제목 : {movie.movieNm}</p>
                    <p>장르 : {movie.genreAlt}</p>
                    <p>개봉일 : {dateParser(movie.openDt)}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
