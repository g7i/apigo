import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import CreateDatabase from "../modals/CreateDB";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from '@fortawesome/free-solid-svg-icons'

export default function DataBases(props) {
    const [dbs, setDbs] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [progress, setProgress] = React.useState(false);
    const [msg, setMsg] = React.useState(null);
    const [variant, setVariant] = React.useState('success');

    useEffect(() => {
        axios
            .get("https://apigo-docker.herokuapp.com/databases")
            .then(res => setDbs(res.data))
            .catch(err => console.log(err));
    }, [msg]);

    const handleSubmit = db => {

        if (!db.trim()) {
            alert("Enter valid database name!");
            return;
        }

        setProgress(true);
        setModalShow(false);
        axios
            .post("https://apigo-docker.herokuapp.com/databases", {"db": db})
            .then(() => {
                setMsg('Database Created Successfully!');
                setVariant('success');
            })
            .catch(err => {
                setMsg(err.response.data.status);
                setVariant('danger');
            });
        setProgress(false);
    };

    const handleDelete = db => {
        setProgress(true);
        axios
            .delete("https://apigo-docker.herokuapp.com/databases/" + db)
            .then(() => {
                setMsg('Database Removed Successfully!');
                setVariant('success');
            })
            .catch(err => {
                setMsg(err.response.data.status);
                setVariant('danger');
            });
        setProgress(false);
    };

    return (
        <Container fluid className="d-flex flex-column p-4 align-items-center justify-content-center">
            <Alert variant={variant} show={msg}>
                {msg}
            </Alert>
            <div className="h3">Databases</div>
            <Button variant="primary"  onClick={() => setModalShow(true)} style={{marginBottom: "20px",cursor:"not-allowed"}} disabled>
                {progress ? <Spinner animation="border" variant="light" as="span"/> : "Create Database"}
            </Button>

            <CreateDatabase
                show={modalShow}
                handleSubmit={handleSubmit}
                onHide={() => setModalShow(false)}
            />
            <ListGroup>
                {
                    dbs.map(db => (
                        <div style={{display:"flex", alignItems:"center"}}>
                            <ListGroup.Item action onClick={() => props.history.push(`${db}/tables`)} key={db}
                            style={{marginRight:"20px"}}>
                                {db}
                            </ListGroup.Item>
                            <FontAwesomeIcon icon={faTrash} style={{cursor:"not-allowed"}}/>
                            {/*<FontAwesomeIcon icon={faTrash} style={{cursor:"pointer"}} onClick={() => handleDelete(db)}/>*/}
                        </div>
                    ))
                }
            </ListGroup>
        </Container>
    );
}