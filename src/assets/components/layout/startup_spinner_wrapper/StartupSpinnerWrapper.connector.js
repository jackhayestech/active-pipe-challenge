import { connect } from 'react-redux';
import StartupSpinnerWrapper from './StartupSpinnerWrapper.component';

const mapStateToProps = state => ({
  display: state.Ui.loadingDisplay,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartupSpinnerWrapper);
