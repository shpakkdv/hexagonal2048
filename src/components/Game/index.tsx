import React from 'react';

import Controls from 'containers/Controls';
import GameField from 'containers/GameField';
import styles from './styles.module.scss';

export const Game: React.FC = () => (
  <div className={styles.Game}>
    <header>
      <h1 className={styles.gameTitle}>Hexagonal 2048</h1>
      <Controls />
    </header>
    <main className={styles.main}>
      <GameField />
    </main>
  </div>
);
