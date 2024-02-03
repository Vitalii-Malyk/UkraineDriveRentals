import ReactModal from "react-modal";
import "./Modal.css";
import { ReactComponent as Close } from "../../helpers/icons/close.svg";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName="modal-overlay"
      className="modal-content"
      ariaHideApp={false}
      onRequestClose={() => onClose()}
    >
      <button className="modal-close-btn" onClick={() => onClose()}>
        <Close />
      </button>
      {children}
    </ReactModal>
  );
};

export default Modal;
