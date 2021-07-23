import React from 'react'
import styles from './Modal.module.scss';

export default function Modal({
  title,
  close
}) {
  return (
    <div className={styles.modal_wrap}>
      <div className={styles.modal}>
        <button onClick={close} className={styles.close}>X</button>
        <div className={styles.header}>{title}</div>
        <div className={styles.content}>
          contents
        </div>
        <div className={styles.footer}>
          footer
        </div>
      </div>
    </div>
  )
}
