import React from 'react';
import Input from 'components/Input'
import Button from 'components/Button'
import styles from './InputButton.scss';

export default function InputButton({
  propsInput,
  propsButton
}) {
  return (
    <div className={styles.input_button_wrap}>
      <Input {...propsInput} />
      <Button {...propsButton} />
    </div>
  )
}
