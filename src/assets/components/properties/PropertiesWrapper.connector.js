import { connect } from 'react-redux';
import PropertiesWrapper from './PropertiesWrapper.component';

const mapStateToProps = state => ({
  properties: state.Properties.data,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PropertiesWrapper);