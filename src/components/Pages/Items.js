import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";

export default function Items(props) {

    const [items, setItems] = useState([]);
    const [fields, setFields] = useState([]);

    useEffect(() => {
        axios
            .get(`https://apigo-docker.herokuapp.com/${props.match.params.db}/${props.match.params.table}`)
            .then(res => {
                setItems(res.data.data);
                setFields(res.data.fields)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Container fluid className="d-flex flex-column p-4 align-items-center justify-content-center">
            <div className="h3">Items</div>
            <h6 className="font-weight-bold">Database : {props.match.params.db}</h6>
            <h6 className="font-weight-bold">Table : {props.match.params.table}</h6>
            <div>
                <h6>
                    <br/>
                    <h5 className="font-weight-bolder">Fields</h5>
                    {
                        fields.map(field => (
                            <div><span className="font-weight-bolder">{field.field}</span> : max_length = {field.length}
                            </div>
                        ))
                    }
                </h6>
            </div>
            <ListGroup>
                {
                    items.map(item => (
                        <ListGroup.Item action key={item.id} disabled>
                            {JSON.stringify(item)}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Container>
    );
}