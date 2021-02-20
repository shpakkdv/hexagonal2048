import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Controls } from 'components/Controls';
import {
  changeGameSize,
  move,
  setCellSize,
  setGameMode,
  startOver,
} from './actions';
import { appStatus, cellSize, gameMode, gameSize } from './selectors';

const mapStateToProps = createStructuredSelector({
  appStatus,
  cellSize,
  gameMode,
  gameSize,
});

const mapDispatchToProps = {
  changeGameSize,
  move,
  setCellSize,
  setGameMode,
  startOver,
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
