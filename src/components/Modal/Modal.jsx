import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector("#modal-root")

class Modal extends Component {
  render() {
    return createPortal(
      <div className="overlay">
        <div className="modal">
         {this.props.children}
        </div>
      </div>,modalRoot
    );
  }
}


export default Modal
