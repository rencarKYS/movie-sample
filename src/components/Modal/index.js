import React from 'react';
import { dateParser } from '../../utils/dataParser';
import styles from './Modal.module.scss';


const onClick = (e, close) => {
  if (e.target.title === 'modal_wrap') {
    close()
  }
}

export default function Modal({
  close,
  naverData,
  selectData
}) {
  const title = naverData.title.match(/[^<b>|</b>$]+/g)[0]
  return (
    <div className={styles.modal_wrap} title="modal_wrap" onClick={(e) => onClick(e, close)}>
      <div className={styles.modal}>
        <button onClick={close} className={styles.close}>X</button>
        <div className={styles.header}>{title}</div>
        <div className={styles.content}>
          <img src={naverData.image} alt={title} />
          <div className={styles.movie_info}>
            <ul>
              <li>평점 : {naverData.userRating || '-'}</li>
              <li>배우 : {naverData.actor || '-'}</li>
              <li>장르 : {selectData.repGenreNm || '-'}</li>
              <li>개봉일 : {dateParser(selectData.openDt) || '-'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
