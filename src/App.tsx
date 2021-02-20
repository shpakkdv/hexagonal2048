import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Game } from 'components/Game';

import 'normalize.css/normalize.css';

export const App: React.FC = () => (
  <BrowserRouter>
    <Game />
  </BrowserRouter>
);
