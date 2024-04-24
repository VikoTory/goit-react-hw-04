import css from './ImageModal.module.css';
import ReactModal from 'react-modal';

ReactModal.setAppElement(document.getElementById('root'));

const ImageModal = ({ modalUrl, modalIsOpen, closeModal }) => {
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.content}
      overlayClassName={css.overlay}
      contentLabel="Image Modal"
    >
      <button className={css.closeBtn} onClick={closeModal}>Close</button>
      <div className={css.modalContent} onClick={handleClickOutside}>
        <img src={modalUrl} alt="Image" />
      </div>
    </ReactModal>
  );
};

export default ImageModal;