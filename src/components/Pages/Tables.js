import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import CreateTable from "../modals/CreateTable";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

export default function Tables(props) {

    const [tables, setTables] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [progress, setProgress] = React.useState(false);
    const [msg, setMsg] = React.useState(null);
    const [variant, setVariant] = React.useState('success');

    useEffect(() => {
        axios
            .get(`https://apigo-docker.herokuapp.com/${props.match.params.db}/tables`)
            .then(res => setTables(res.data))
            .catch(err => console.log(err));
    }, [msg]);

    const handleSubmit = (name, fields) => {

        if (!name.trim()){
            alert("Enter valid table name!");
            return;
        }

        const pairs = fields.split(',');
        const initialValue = {};
        let isValid = true;
        const fieldsObj = pairs.reduce((obj, item) => {
            let singles = item.split(":");
            if(singles.length !== 2 || !/^\d+$/.test(singles[1]) || !singles[0] || !singles[1]) {
                isValid = false;
            }
            return {
                ...obj,
                [singles[0].trim()] : Number(singles[1]),
            };
        }, initialValue);

        if (!isValid){
            alert("Enter Field's name and max-length as instructed!");
            return;
        }

        setProgress(true);
        setModalShow(false);

        const data = {
            table : name.trim(),
            fields : fieldsObj
        };

        axios
            .post(`https://apigo-docker.herokuapp.com/${props.match.params.db}/tables`, data)
            .then(() => {
                setMsg('Table Created Successfully!');
                setVariant('success');
            })
            .catch(err => {
                setMsg(err.response.data.status);
                setVariant('danger');
            });
        setProgress(false);
    };

    const handleDelete = table => {
        setProgress(true);
        axios
            .delete(`https://apigo-docker.herokuapp.com/${props.match.params.db}/tables/` + table)
            .then(() => {
                setMsg('Table Removed Successfully!');
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
            <div className="h3">Tables</div>
            <Button variant="primary" onClick={() => setModalShow(true)} style={{marginBottom:"20px"}}>
                {progress ? <Spinner animation="border" variant="light" as="span" /> : "Create Table"}
            </Button>

            <CreateTable
                show={modalShow}
                handleSubmit={handleSubmit}
                onHide={() => setModalShow(false)}
            />
            <ListGroup>
                {
                    tables.map(table => (
                        <div style={{display:"flex", alignItems:"center"}}>
                        <ListGroup.Item action
                                        onClick={() => props.history.push(`/${props.match.params.db}/${table}/items`)}
                                        key={table} style={{marginRight:"20px"}}>
                            {table}
                        </ListGroup.Item>
                        <FontAwesomeIcon icon={faTrash} style={{cursor:"pointer"}} onClick={() => handleDelete(table)}/>
                        </div>
                    ))
                }
            </ListGroup>
        </Container>
    );
}