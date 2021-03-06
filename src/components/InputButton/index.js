import React from 'react';
import Input from 'components/Input'
import Button from 'components/Button'
import styles from './InputButton.module.scss';

export default function InputButton({
  propsInput,
  propsButton,
  className
}) {
  return (
    <div className={`${styles.input_button_wrap} ${className}`}>
      <Input {...propsInput} />
      <Button {...propsButton} />
    </div>
  )
}
