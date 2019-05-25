import { connect } from 'react-redux';
import Alert from './Alert.component';

const mapStateToProps = state => ({
  display: state.Ui.alert.display,
  type: state.Ui.alert.type,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert);
