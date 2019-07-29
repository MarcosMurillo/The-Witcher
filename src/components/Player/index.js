import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Youtube from 'react-youtube';
import { useSelector } from 'react-redux';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    padding: 0,

    backgroundColor: '#000',

    borderColor: '#a99e7e',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};

export default function Player({ id }) {
  const visible = useSelector(state => state.isVisible);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Modal isOpen={visible} style={customStyles}>
      <Youtube videoId={id} opts={opts} />
    </Modal>
  );
}

Player.propTypes = {
  id: PropTypes.string.isRequired,
};
