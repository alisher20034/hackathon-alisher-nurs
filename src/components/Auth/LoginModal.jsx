import { Modal, Button } from "react-bootstrap";
import LoginModalBody from "./LoginModalBody";

function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Войти в существующий аккаунт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginModalBody />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
