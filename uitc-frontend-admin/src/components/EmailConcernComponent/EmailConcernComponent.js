import React, {useEffect, useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { emailConcern, fetchConcern } from "../../lib/services/data.service";

const EmailConcernComponent = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const intId = parseInt(id);
    const [concern, setConcern] = useState({});
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchConcern(intId)
            .then(response => setConcern(response.data))
            .catch(err => console.log("Whoops somethings wrong"));
    }, []);

    const handleSubmit = (event) => {
        emailConcern();

        event.preventDefault();
        navigate("/");
    };

    return(
        <Container>
            <div className="bg-white shadow p-3 mb-3 rounded md">
                <h3 style={{background: "#F0F8FF"}} className="rounded p-2" >Concern {concern.concern}</h3>
                <div style={{background: "#e5e5e5"}} className="rounded p-2">
                    <h5>Name {concern.lname}, {concern.fnmae} {concern.mname}.</h5>
                    <h5>Course {concern.course}</h5>
                    <h5>Email {concern.email}</h5>
                </div>
                <hr />
                <p>{concern.specific_concern}</p>
            </div>
            <Form className="bg-white shadow p-3 mb-3 rounded md" onSubmit={handleSubmit}>
                <Form.Group controlId="handleFrom" className="mb-2">
                    <Form.Label>From</Form.Label>
                    <Form.Control 
                        name="from"
                        type="email"
                        onChange={(event) => {
                            setFrom(event.target.value);
                        }}
                    />
                </Form.Group>

                <Form.Group controlId="handleFrom" className="mb-2">
                    <Form.Label>To</Form.Label>
                    <Form.Control 
                        name="to"
                        type="email"
                        onChange={(event) => {
                            setTo(event.target.value);
                            console.log(event.target.value);
                        }}
                        value={concern.email}
                    />
                </Form.Group>

                <Form.Group controlId="handleFrom" className="mb-2">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control 
                        name="subject"
                        type="text"
                        onChange={(event) => {
                            setSubject(event.target.value);
                        }}
                    />
                </Form.Group>

                <Form.Group controlId="handleFrom" className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        style={{ height: "15vh"}}
                        name="message"
                        as="textarea"
                        onChange={(event) => {
                            setMessage(event.target.value);
                        }}
                    />
                </Form.Group>

                <Button variant="primary">Submit</Button>
            </Form>
        </Container>
    );
}

export default EmailConcernComponent;