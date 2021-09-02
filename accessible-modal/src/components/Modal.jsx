import React, { useRef, useState, useEffect } from 'react'
// import { useFocusTrap } from '../hooks/useFocusTrap'
import { ModalContent } from './ModalContent'
import './modal.css'

export default function ModalContainer() {
  const [open, setOpen] = useState(false)
  const btnOpenRef = useRef()
  const btnCloseRef = useRef()
  const ESCAPE_KEY = 'Escape'

  useEffect(() => {
    if (open) {
      btnCloseRef.current.focus()
      console.log(btnCloseRef);
    } else {
      btnOpenRef.current.focus()
    }
  }, [open])

  const onOpen = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const onKeyDown = (event) => {
    if (event.key === ESCAPE_KEY) {
      onClose()
    }
  }

  return (
    <>
      {open && 
        <ModalContent 
          buttonRef={btnCloseRef}
          open={open}
          onClose={onClose}
          onKeyDown={onKeyDown}
      />}
      <section className="btn">
        <button onClick={onOpen} ref={btnOpenRef}>
          Open Modal
        </button>
        <div role="button" tabIndex="0" onKeyPress={onOpen} onClick={onOpen} ref={btnOpenRef}>
          Open Modal div feo
        </div>
      </section>
    </>
  )
}
