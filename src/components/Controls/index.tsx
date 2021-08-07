import classNames from 'classnames';
import React, { useCallback, useState } from 'react';

import { NumericInput } from 'components/NumericInput';
import { RadioButtons } from 'components/RadioButtons';
import { AppStatus, Direction, GameMode, GamePlayMode, GAME_SIZE_RANGE, CELL_SIZE_RANGE, REMOTE_HTTPS_SERVER_URL, LOCAL_SERVER_URL } from 'constant';
import type * as ControlsModels from 'containers/Controls/models';
import { ControlsProps } from './models';
import styles from './styles.module.scss';

export const Controls: React.FC<ControlsProps> = ({
  appStatus,
  startOver,
  move,

  gameMode,
  setGameMode,

  gamePlayMode,
  changeGamePlayMode,

  gameSize,
  changeGameSize,

  cellSize,
  setCellSize,

  url,
  changeServerUrl,
}) => {
  const [isSettingsVisible, setSettingsVisibility] = useState(!!(window as any).TEST_MODE);
  const onSettingsClick = useCallback(() => setSettingsVisibility(visible => !visible), [setSettingsVisibility]);
  const onChangeUrl = useCallback<React.ChangeEventHandler<HTMLSelectElement>>(event => changeServerUrl(event.target.value), [changeServerUrl]);

  const isFlatMode = gameMode === GameMode.Flat;
  const isGameFinished = appStatus === AppStatus.Finished;

  return (
    <div className={styles.Controls}>
      <div className={classNames(styles.column, styles.columnSettings)}>
        <div className={styles.gameStatus} data-status={isGameFinished ? 'game-over' : 'playing'}>
          {'Game status: '}
          <span>{isGameFinished ? 'Game Over' : 'Playing'}</span>
        </div>
        <div className={styles.settings}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
          <p onClick={onSettingsClick}>
            <span className={classNames({ [styles.mirrored]: isSettingsVisible })}>▾</span>
            Game settings (click to expand/collapse)
          </p>
          {isSettingsVisible && (
            <>
              <div>
                <button className={styles.startOver} onClick={startOver}>Start over</button>
              </div>
              <div>
                <NumericInput
                  id="game_size"
                  value={gameSize}
                  label="Game size"
                  range={GAME_SIZE_RANGE}
                  onChange={changeGameSize}
                />
              </div>
              <div>
                <NumericInput
                  id="hexagon_size"
                  value={cellSize}
                  label="Hexagon size"
                  range={CELL_SIZE_RANGE}
                  onChange={setCellSize}
                />
              </div>
              <div>
                <RadioButtons
                  title="Select a visual game mode:"
                  options={[
                    { id: GameMode.Flat, label: 'Flat topped' },
                    { id: GameMode.Pointy, label: 'Pointy topped' },
                  ]}
                  checkedId={gameMode}
                  onChange={setGameMode}
                />
              </div>
              <div>
                <RadioButtons
                  title="Select a play game mode:"
                  options={[
                    { id: GamePlayMode.Offline, label: 'Offline: generate data locally' },
                    { id: GamePlayMode.Online, label: 'Online: play with server data' },
                  ]}
                  checkedId={gamePlayMode}
                  onChange={changeGamePlayMode}
                />
              </div>
              {gamePlayMode === GamePlayMode.Online && (
                <select id="url-server" onChange={onChangeUrl} value={url}>
                  <option id="remote" value={REMOTE_HTTPS_SERVER_URL}>Remote server</option>
                  <option id="localhost" value={LOCAL_SERVER_URL}>Local server</option>
                </select>
              )}
            </>
          )}
        </div>
      </div>
      <div className={classNames(styles.column, styles.arrows, { [styles.flat]: isFlatMode })}>
        {isFlatMode
          ? <FlatToppedButtons move={move} disabled={isGameFinished} />
          : <PointyToppedButtons move={move} disabled={isGameFinished} />
        }
        <p>Use keyboard or these buttons</p>
      </div>
    </div>
  );
};

interface ButtonsProps {
  move: ControlsModels.ActionCreator.Move;
  disabled: boolean;
}

const PointyToppedButtons: React.FC<ButtonsProps> = ({ move, disabled }) => (
  <>
    <div>
      <button disabled={disabled} onClick={() => move(Direction.Top)}>
        <span className={styles.arrow}>➜</span>
        <span className={styles.text}>W</span>
      </button>
    </div>
    <div>
      <button disabled={disabled} onClick={() => move(Direction.TopRight)}>
        <span className={styles.arrow}>➜</span>
        <span className={styles.text}>Q</span>
      </button>
      <button disabled={disabled} onClick={() => move(Direction.TopLeft)}>
        <span className={styles.text}>E</span>
        <span className={styles.arrow}>➜</span>
      </button>
    </div>
    <div>
      <button disabled={disabled} onClick={() => move(Direction.BottomRight)}>
        <span className={styles.text}>A</span>
        <span className={styles.arrow}>➜</span>
      </button>
      <button disabled={disabled} onClick={() => move(Direction.BottomLeft)}>
        <span className={styles.arrow}>➜</span>
        <span className={styles.text}>D</span>
      </button>
    </div>
    <div>
      <button disabled={disabled} onClick={() => move(Direction.Bottom)}>
        <span className={styles.text}>S</span>
        <span className={styles.arrow}>➜</span>
      </button>
    </div>
  </>
);

const FlatToppedButtons: React.FC<ButtonsProps> = ({ move, disabled }) => (
  <>
    <div>
      <button disabled={disabled} onClick={() => move(Direction.TopRight)}>
        <span className={styles.arrow}>➜</span>
        <span className={styles.text}>W</span>
      </button>
      <button disabled={disabled} onClick={() => move(Direction.BottomRight)}>
        <span className={styles.text}>E</span>
        <span className={styles.arrow}>➜</span>
      </button>
    </div>
    <div>
      <button disabled={disabled} onClick={() => move(Direction.Top)}>
        <span className={styles.text}>A</span>
        <span className={styles.arrow}>➜</span>
      </button>
      <button disabled={disabled} onClick={() => move(Direction.Bottom)}>
        <span className={styles.arrow}>➜</span>
        <span className={styles.text}>F</span>
      </button>
    </div>
    <div>
      <button disabled={disabled} onClick={() => move(Direction.TopLeft)}>
        <span className={styles.text}>S</span>
        <span className={styles.arrow}>➜</span>
      </button>
      <button disabled={disabled} onClick={() => move(Direction.BottomLeft)}>
        <span className={styles.arrow}>➜</span>
        <span className={styles.text}>D</span>
      </button>
    </div>
  </>
);
