import { connect } from 'react-redux';
import ApplicationWrapper from './ApplicationWrapper.component';

const mapStateToProps = state => ({
  properties: state.Properties.data,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplicationWrapper);
