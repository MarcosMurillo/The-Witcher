import React from 'react';
import Modal from 'react-modal';
import Youtube from 'react-youtube';
import { useSelector, useDispatch } from 'react-redux';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export default function Player(id) {
  const visible = useSelector(state => state.isVisible);
  const dispatch = useDispatch();

  function HandleButtonClick() {
    dispatch({ type: 'TOGGLE_MODAL', isVisible: false });
  }
  return (
    <>
      <Modal isOpen={visible} style={customStyles}>
        <Youtube videoId={id} />
      </Modal>
      <button onClick={() => HandleButtonClick()} style={{ zIndex: 5 }}>
        Close
      </button>
    </>
  );
}
