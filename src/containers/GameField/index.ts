import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GameField } from 'components/GameField';
import { initiateField } from 'containers/Controls/actions';
import { appStatus, cellSize, gameMode, gameSize } from 'containers/Controls/selectors';
import { appearedCells, field } from './selectors';

const mapStateToProps = createStructuredSelector({
  appearedCells,
  field,
  gameMode,
  gameSize,
  appStatus,
  cellSize,
});

const mapDispatchToProps = {
  initiateField,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameField);
