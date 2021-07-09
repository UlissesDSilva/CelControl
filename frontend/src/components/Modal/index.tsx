import React from 'react'
import Modal from 'react-modal';
import { Container } from './style'

import { Celula } from '../Celula/'

import pacceImg from '../../assets/pacce-symbol.svg';
import close from '../../assets/close.svg';
import fupImg from '../../assets/fup.svg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    padding: '0'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

export function ModalFacilitator() {
  const cel = { id: 1, name: 'FUP', img: fupImg }
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Container>
          <header>
            <img src={pacceImg} alt="logo" />
            
            <h1>Facilitador</h1>

            <img src={close} alt="close" className='closeModal'
                onClick={closeModal}
            />
          </header>

          <Celula
            name={cel.name}
            img={cel.img}
          />

          {/* <div>
            <img src="" alt="" />
            <h1>Célula X</h1>
            <span>Info</span>
          </div>
          <div>
            <button>Frequência</button>
            <button>Feedback</button>
            <button>Relatório</button>
          </div> */}

        </Container>
      </Modal>
    </div>
  );
}