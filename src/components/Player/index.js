import React from 'react';
import Modal from 'react-modal';
import Youtube from 'react-youtube';

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
function Player(id, isVisible) {
  return (
    <>
      <Modal isOpen={false} style={customStyles}>
        <Youtube videoId={id} />
      </Modal>
    </>
  );
}

export default Player;
