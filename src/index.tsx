import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  GameMode,
  DirectionByKeyCodeFlatMode,
  DirectionByKeyPointyMode,
  KeyCodesToHandleFlatMode,
  KeyCodesToHandlePointyMode,
} from 'constant';
import { move } from './containers/Controls/actions';
import { App } from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

document.addEventListener('keyup', ({ code }) => {
  const isFlatMode = store.getState().controls.gameMode === GameMode.Flat;
  const directionByKeyCode = isFlatMode ? DirectionByKeyCodeFlatMode : DirectionByKeyPointyMode;
  const keyCodesToHandle = isFlatMode ? KeyCodesToHandleFlatMode : KeyCodesToHandlePointyMode;

  if (keyCodesToHandle.includes(code as any)) {
    return store.dispatch(move(directionByKeyCode[code]));
  }
})
