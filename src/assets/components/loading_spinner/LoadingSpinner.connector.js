import { connect } from 'react-redux';
import LoadingSpinner from './LoadingSpinner.component';

const mapStateToProps = state => ({
  display: state.Ui.loadingDisplay,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadingSpinner);
