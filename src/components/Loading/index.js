import React from 'react'
import loading from 'images/loading.gif';
import styles from './Loading.module.scss';

export default function Loading({ state }) {
  return (
    <div className={styles.loading_wrap}>
        <img src={loading} />
      </div>
  )
}
