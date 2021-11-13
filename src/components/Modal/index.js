import ReactDOM from "react-dom";
import './Modal.css'

const Modal = ({ children }) => (ReactDOM.createPortal(
    <div className="modal-background">
        {children}
    </div>, document.getElementById("modal")));



export default Modal;
