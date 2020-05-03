import React from "react";
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";

export default function Endpoints() {
    return (
        <Container fluid className="d-flex flex-column p-5 align-items-center justify-content-center">
            <div className="h3">Endpoints</div>
            <div>Base URL : <span className="font-weight-bold">http://apigo-docker.herokuapp.com</span></div>
            <br />
            <Table responsive>
                <thead>
                <tr>
                    <th>Endpoint Type</th>
                    <th>Endpoint URL</th>
                    <th>Request Type</th>
                    <th>Others</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>List Table Item(s)</td>
                    <td>/:db/:table</td>
                    <td>GET</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Insert Table Item</td>
                    <td>/:db/:table</td>
                    <td>POST</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Retrieve Table Item</td>
                    <td>/:db/:table/:id</td>
                    <td>GET</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Update Table Item</td>
                    <td>/:db/:table/:id</td>
                    <td>PUT</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Delete Table Item</td>
                    <td>/:db/:table/:id</td>
                    <td>DELETE</td>
                    <td></td>
                </tr>
                <tr>
                    <td><h5 className="font-weight-bolder">Extra Endpoints</h5></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>List Databases</td>
                    <td>/databases</td>
                    <td>GET</td>
                    <td>Extra Endpoint</td>
                </tr>
                <tr>
                    <td>Create Database</td>
                    <td>/databases</td>
                    <td>POST</td>
                    <td>Extra Endpoint</td>
                </tr>
                <tr>
                    <td>Remove Database</td>
                    <td>/databases/:db</td>
                    <td>DELETE</td>
                    <td>Extra Endpoint</td>
                </tr>
                <tr>
                    <td>List Tables</td>
                    <td>/:db/tables</td>
                    <td>GET</td>
                    <td>Extra Endpoint</td>
                </tr>
                <tr>
                    <td>Create Table</td>
                    <td>/:db/tables</td>
                    <td>POST</td>
                    <td>Extra Endpoint</td>
                </tr>
                <tr>
                    <td>Remove Table</td>
                    <td>/:db/tables/:table</td>
                    <td>DELETE</td>
                    <td>Extra Endpoint</td>
                </tr>
                </tbody>
            </Table>
            <br />
            <br />
            <h5 className="font-weight-bolder">Made w/ : </h5>
            <h6 className="font-weight-bold">ReactJS + Golang + Docker w/ Docker-Compose</h6>
        </Container>
    )
}