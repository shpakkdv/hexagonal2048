import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Controls } from 'components/Controls';
import {
  changeGamePlayMode,
  changeGameSize,
  changeServerUrl,
  move,
  setCellSize,
  setGameMode,
  startOver,
} from './actions';
import { appStatus, cellSize, gameMode, gamePlayMode, gameSize, url } from './selectors';

const mapStateToProps = createStructuredSelector({
  appStatus,
  cellSize,
  gameMode,
  gamePlayMode,
  gameSize,
  url,
});

const mapDispatchToProps = {
  changeGamePlayMode,
  changeGameSize,
  changeServerUrl,
  move,
  setCellSize,
  setGameMode,
  startOver,
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
