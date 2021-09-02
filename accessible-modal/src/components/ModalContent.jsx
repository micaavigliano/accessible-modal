import React from 'react'
import ReactDOM from 'react-dom'
import { useFocusTrap } from '../hooks/useFocusTrap'
import './modal.css'

export const ModalContent = ({
  buttonRef,
  open,
  onClose,
  onKeyDown,
  onClickAway,
}) => {
  const dialogRef = useFocusTrap()

  return ReactDOM.createPortal(
    <div
      className="modal-overlay"
      onClick={onClickAway}
    >
      <div className="modal-content" ref={dialogRef} tabIndex={-1} {...(open ? {'aria-modal': true, role: 'dialog'} : {'aria-hidden': true})}>
        <div onKeyDown={onKeyDown}>
          <header>
            <button ref={buttonRef} type="button" aria-label="cerrar modal" onClick={onClose}>
              X
            </button>
            <h1>hola, soy un modal</h1>
          </header>
          <p>soy el texto del modal</p>
          <div className="modal-interactive">
            <a href="/">soy link del modal</a>
            <form>
              <fieldset>
                <label for="input-modal">soy un input</label>
                <input type="text" id="input-modal" className="input-modal" />
              </fieldset>
            </form>
            <details>
              <summary>details del modal</summary>
              <p>texto del details</p>
            </details>
          </div>
          <button type="button" onClick={onClose}> cerrar el modal</button>
        </div>
      </div>
    </div>,
    document.body,
  )
}