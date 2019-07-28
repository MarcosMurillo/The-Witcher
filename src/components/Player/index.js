import React from 'react';
import Modal from 'react-modal';
import Youtube from 'react-youtube';
import { useDispatch } from 'react-redux';

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

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1,
  },
};
export default function Player(id, visible) {
  const dispatch = useDispatch();

  function HandleButtonClick() {
    dispatch({ type: 'TOGGLE_MODAL', isVisible: false });
  }
  return (
    <>
      <Modal isOpen={visible} style={customStyles}>
        <Youtube videoId={id} opts={opts} />
      </Modal>
      <button onClick={() => HandleButtonClick()} style={{ zIndex: 5 }}>
        Close
      </button>
    </>
  );
}
