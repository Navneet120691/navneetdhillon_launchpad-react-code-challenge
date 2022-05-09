import { Button, Modal } from "react-bootstrap";
import NewPost from "../NewPost/NewPost";

export default function FormModal({ show, close, form }) {
return (
<>
<Modal show={show} onHide={close}>
<Modal.Header closeButton>
<Modal.Title>Add & Edit Post</Modal.Title>
</Modal.Header>
<Modal.Body>{form}</Modal.Body>
</Modal>
</>
);
}