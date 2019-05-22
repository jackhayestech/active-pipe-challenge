import { connect } from 'react-redux';
import LoadingSpinner from './LoadingSpinner.component';

const mapStateToProps = state => ({
  display: state.ui.loadingDisplay,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadingSpinner);
