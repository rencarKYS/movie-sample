import React from 'react'
import randomColor from 'utils/randomNum';
import styles from './Keyword.module.scss';

export default function Keyword({
  keyword,
  onClick
}) {
  return (
    <div 
      className={styles.keyword_wrap} 
      onClick={onClick}
      style={{ backgroundColor: `rgb(${[randomColor(), randomColor(), randomColor()]})` }}
    >
      <span>{keyword}</span>
    </div>
  )
}
