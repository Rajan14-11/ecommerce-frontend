import React from 'react'
import { Button,Modal} from 'react-bootstrap';

function NewModal(props) {
  return (
    <Modal size={props.size} show={props.show} onhide={props.handleClose}>
      <Modal.Header closeButton onClick={props.handleClose}>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        {props.buttons ? (
          props.buttons.map((btn, index) => (
            <Button key={index} variant={btn.color} onClick={btn.onClick}>
              {btn.label}
            </Button>
          ))
        ) : (
          <Button
            variant="primary"
            {...props}
            style={{ backgroundColor: "#333" }}
            className="btn-sm"
            onClick={props.onSubmit}
          >
            Save
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default NewModal