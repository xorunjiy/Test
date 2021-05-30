import React, {useCallback} from 'react';
import Modal from 'react-modal';
import constants from '../../../constants';
import EditTaskComponent from './editTaskComponent';

const EditTaskModal = props => {
    const {
        styles,
        modalData,
        closeModalWindow,
    } = props;

    const onClose = useCallback( () => {
        closeModalWindow({
            type: constants.EDIT_TASK_MODAL_WINDOW_TYPE,
        });
    }, [closeModalWindow]);

    return (
        <Modal
            style={styles}
            isOpen={modalData.isShow}
            children={
                <EditTaskComponent
                    onClose={onClose}
                    modalData={modalData}
                    closeModalWindow={closeModalWindow}
                />
            }
            ariaHideApp={false}
            onRequestClose={onClose}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
        />
    );
}

export default React.memo(EditTaskModal);