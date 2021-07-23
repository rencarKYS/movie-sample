import React from 'react'
import styles from './Input.module.scss';

export default function Input({
  type,
  value,
  onChange,
  disabled,
  style,
  className,
  placeholder
}) {
  if (type !== 'text' && type !== 'number') {
    console.error('input component 는 text / number 타입만 가능합니다.')
    return
  }
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={style}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
      pattern={type === 'number' ? "\d*" : null}
    />
  )
}
