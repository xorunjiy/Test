import { connect } from 'react-redux';
import Component from './Modals.jsx';
import * as actions from './actions';
import * as selectors from './selectors';

const mapStateToProps = state => ({
    modals: selectors.getModals(state),
});

const mapDispatchToProps = dispatch => ({
    closeModalWindow: payload => dispatch(actions.onCloseModalWindow(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);