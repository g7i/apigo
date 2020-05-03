import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function CreateTable(props) {
    const [name, setName] = useState('');
    const [fields, setFields] = useState('');

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Table
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                 onChange={e => setName(e.target.value)} />
                </InputGroup>
                <h6>Use <strong>,</strong> to separate fields and <strong>:</strong> to give max length.</h6>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Fields</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                                 onChange={e => setFields(e.target.value)} />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => props.handleSubmit(name, fields)}>Create</Button>
            </Modal.Footer>
        </Modal>
    );
}