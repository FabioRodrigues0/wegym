import "./newCardModal.style.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function NewsCardModal(props) {
    // eslint-disable-next-line react/prop-types
    const title = props.modalTitle;
    // eslint-disable-next-line react/prop-types
    const description = props.modalDescription;
    // eslint-disable-next-line react/prop-types
    const image = props.modalImage;
    // eslint-disable-next-line react/prop-types
    const date = props.modalDate;
    return (
        <Modal{...props} size="lg" aria-labelledby="contained-modal-title-vcenter" className="" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="card-no-border card flex-md-row mb-4">
                <div className="card-body d-flex flex-column align-items-start">
                    <p id="cardText" className="card-text mb-auto">{description}</p>
                </div>
                <img src={image} className="img-ajust img-size card-img-right flex-auto d-none d-lg-block" width={250} height={250} alt={title}/>
            </Modal.Body>
            <Modal.Footer>
                {/* eslint-disable-next-line react/prop-types */}
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewsCardModal;