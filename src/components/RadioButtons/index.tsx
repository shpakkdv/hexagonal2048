import React, { useCallback } from 'react';

import { RadioButtonsProps } from './models';
import styles from './styles.module.scss';

export const RadioButtons: React.FC<RadioButtonsProps> = ({
  title,
  checkedId,
  options,
  onChange,
}) => {
  const onRadioButtonChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    onChange(event.target.id);
  }, [onChange]);

  return (
    <form className={styles.RadioButtons}>
      <p>{title}</p>
      {options.map(({ id, label }) => (
        <div key={id}>
          <input type="radio" id={id} checked={checkedId === id} onChange={onRadioButtonChange} />
          <label htmlFor={id}>{label}</label>
        </div>
      ))}
    </form>
  );
};
