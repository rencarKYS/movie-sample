import React from 'react'
import randomColor from 'utils/randomNum';
import styles from './Keyword.module.scss';

function Keyword({
  keyword,
  onClick
}) {
  return (
    <div 
      className={styles.keyword_wrap} 
      onClick={() => onClick(keyword)}
      style={{ backgroundColor: `rgb(${[randomColor(), randomColor(), randomColor()]})` }}
    >
      <span>{keyword}</span>
    </div>
  )
}

export default React.memo(Keyword)