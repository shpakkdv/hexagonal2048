import classNames from 'classnames';
import { clamp } from 'lodash';
import React from 'react';

import { GameMode } from 'constant';
import { GameFieldProps } from './models';
import styles from './styles.module.scss';

export const GameField: React.FC<GameFieldProps> = ({ field, gameMode, cellSize }) => {
  const isPointyMode = gameMode === GameMode.Pointy;
  const hexagonSize = `${cellSize}px`;
  const commonCellStyle: React.CSSProperties = {
    width: hexagonSize,
    height: hexagonSize,
    lineHeight: hexagonSize,
    fontSize: `${cellSize / 2.5}px`,
    padding: `0 ${cellSize * 0.1}px`,
    marginRight: `${isPointyMode ? 0 : cellSize * 0.125}px`,
    marginBottom: `${isPointyMode ? cellSize * 0.125 : 0}px`,
  };
  const isDevMode = !!(window as any).DEBBUG_DEV_MODE;

  return (
    <div className={classNames(styles.GameField, { [styles.pointy]: isPointyMode })}>
      {
        field.map((row, rowIndex) => {
          return (
            <div className={styles.row} key={rowIndex}>
              {row.map((cell) => {
                if (!cell) {
                  return null;
                }

                const [q, r, value] = cell;
                const displayValue = value || '';
                const title = isDevMode ? `q: ${q}, r: ${r}, value: ${value}` : String(displayValue);
                const valueLevel = value && Math.log2(value);
                const ratio = 10;
                const gColor = valueLevel ? clamp(255 - valueLevel * ratio, 165, 255) : 255;
                const bColor = valueLevel ? clamp(255 - valueLevel * ratio * 3, 0, 255) : 255;
                const cellStyle = {
                  ...commonCellStyle,
                  backgroundColor: `rgb(255 ${gColor} ${bColor})`,
                };

                return (
                  <div className={styles.item} style={cellStyle} key={cell.join()} title={title}>
                    {displayValue}
                  </div>
                );
              })}
            </div>
          );
        })
      }
    </div>
  );
};
