import React, { Component } from 'react'
import InputButton from 'components/InputButton';
import Keyword from 'components/Keyword';
import styles from './MovieSearch.module.scss'

export default class MovieSearch extends Component {
  render() {
    const keywords = ['블랙위도우', '캡틴아메리카', '보스베이비']
    return (
      <div className={styles.movie_search_wrap}>
        <InputButton
          propsInput={{
            type: 'text',
            className: styles.search_input,
            placeholder: '영화를 검색해보세요'
          }}
          propsButton={{
            btnName: '검색',
            className: styles.search_button
          }}
        />
        <div className={styles.keyword_area}>
          {
            keywords.map((key, i) => <Keyword keyword={key} key={i} />)
          }
        </div>
      </div>
    )
  }
}
