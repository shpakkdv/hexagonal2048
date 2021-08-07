import clamp from 'lodash/clamp';
import React, { useCallback, useState, useEffect } from 'react';

import { NumericInputProps } from './models';
import styles from './styles.module.scss';

export const NumericInput: React.FC<NumericInputProps> = ({
  onChange,
  id,
  value,
  label,
  disabled,
  range: [min, max],
  step = 1,
  integer = true,
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const onValueChanged = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      const originalValue = event.target.value;
      if (originalValue === '') {
        setCurrentValue(originalValue);
        return;
      }

      const value = Number(originalValue);

      if (isFinite(value)) {
        setCurrentValue(value);
      }
    },
    [setCurrentValue],
  );

  const onBlur = useCallback<React.FocusEventHandler<HTMLInputElement>>(() => {
    if (currentValue === '') {
      setCurrentValue(value);

      return;
    }

    const numericValue = integer ? parseInt(String(currentValue), 10) : Number(currentValue);
    const newValue = clamp(numericValue, min, max);

    if (newValue !== value) {
      setCurrentValue(value);
      onChange(newValue);
    }
  }, [currentValue, integer, min, max, value, onChange]);

  const onKeyDown = useCallback<React.KeyboardEventHandler<HTMLInputElement>>((event) => {
    if (event.key === 'Enter') {
      onBlur(event as any);
    }
  }, [onBlur]);

  return (
    <div className={styles.NumericInput}>
      <input
        type="number"
        id={id}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        value={currentValue}
        onChange={onValueChanged}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      <label htmlFor={id}>{`${label} (${min} - ${max})`}</label>
    </div>
  );
};
