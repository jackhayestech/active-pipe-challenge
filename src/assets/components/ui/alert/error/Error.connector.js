import { connect } from 'react-redux';
import ErrorAlert from './Error.component';

import { setAlert, toggleLoading } from '../../../../../redux/action_creators/Ui.actioncreator';
import { loadProperties } from '../../../../../redux/action_creators/Properties.actioncreator';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  toggleLoading: () => dispatch(toggleLoading(true)),
  setAlert: () => dispatch(setAlert({
    display: false,
    type: null,
  })),
  load: () => dispatch(loadProperties()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorAlert);
