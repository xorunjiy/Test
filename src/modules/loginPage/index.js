import { connect } from 'react-redux';
import * as actions from './actions';
import Component from './LogInPage.jsx';

const mapDispatchToProps = dispatch => ({
    signInRequest: (userData) => dispatch(actions.signInRequest(userData))
});

export default connect(null, mapDispatchToProps)(Component);