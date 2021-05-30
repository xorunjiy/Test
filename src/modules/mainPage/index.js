import { connect } from 'react-redux';
import * as selectors from './selectors';
import Component from './MainPage.jsx';

const mapStateToProps = state => ({
    isLogged: selectors.getUserStatus(state),
});

export default connect(mapStateToProps)(Component);