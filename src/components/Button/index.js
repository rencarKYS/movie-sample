import React from 'react'
import styles from './Button.scss';

export default function Button({
  style,
  btnName,
  className,
  onClick,
}) {
  return (
    <button
      style={style}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {btnName}
    </button>
  )
}
