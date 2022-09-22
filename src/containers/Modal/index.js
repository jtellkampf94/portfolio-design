import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, open }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return isBrowser && open
    ? ReactDOM.createPortal(children, document.getElementById("portal"))
    : null;
};

export default Modal;
