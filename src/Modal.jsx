import React, { useRef } from 'react';
import Modal from 'react-modal';

function MyModal({ modalIsOpen, setIsOpen }) {
  const subtitleRef = useRef();

  function afterOpenModal() {
    if (subtitleRef.current) {
      subtitleRef.current.style.color = '#f00';
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={{content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },}}
        contentLabel="Example Modal"
      >
        <img src="https://media1.giphy.com/media/rHFr6QeqyndscG81ws/giphy.gif?cid=ecf05e474vd950uxauxdrv2gtwbgb7h4d7qj9cm14vd9p0no&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="/" />
      </Modal>
    </div>
  );
}

export default MyModal;