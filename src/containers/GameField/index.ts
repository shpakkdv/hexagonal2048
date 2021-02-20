import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GameField } from 'components/GameField';
import { appStatus, cellSize, gameMode } from 'containers/Controls/selectors';
import { field } from './selectors';

const mapStateToProps = createStructuredSelector({
  field,
  gameMode,
  appStatus,
  cellSize,
});

export default connect(mapStateToProps)(GameField);
