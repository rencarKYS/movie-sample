import React, { Component } from 'react'
import InputButton from 'components/InputButton';
import styles from './MovieSearch.scss'

export default class MovieSearch extends Component {
  render() {
    return (
      <div className={styles.movie_search_wrap}>
        <InputButton
          propsInput={{
            type: 'text',
          }}
          propsButton={{
            btnName: '검색'
          }}
        />
      </div>
    )
  }
}
