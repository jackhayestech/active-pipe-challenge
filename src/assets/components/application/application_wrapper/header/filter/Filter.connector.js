import { connect } from 'react-redux';
import Filter from './Filter.component';

import { setFilter } from '../../../../../../redux/action_creators/Ui.actioncreator';

const mapStateToProps = state => ({
  filter: state.Ui.filter,
});

const mapDispatchToProps = dispatch => ({
  setFilter: value => dispatch(setFilter(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
