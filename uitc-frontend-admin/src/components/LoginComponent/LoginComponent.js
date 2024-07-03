import React, { useState } from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import { setToken } from '../../lib/services/auth.service';

const LoginComponent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isCreds, setCreds] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:3005/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
            setToken(data.accessToken);
            setCreds(false);
            navigate("/");
            window.location.reload();
            return data;
        })
        .catch(err => {
            console.log(err)
            setError(err);
            setCreds(true);
            return err;
        });
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit} className='rounded p-3 shadow' style={{background: '#FFF'}}>
                <Form.Group className='mb-3' controlId='handleUsername'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        name='username' 
                        type='text' 
                        onChange={(event) => {
                            setUsername(event.target.value);
                            console.log(event.target.value);
                        }} 
                        placeholder='Enter username'  
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='handlePassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        name='password' 
                        type='password' 
                        onChange={(event) => {
                            setPassword(event.target.value);
                            console.log(event.target.value);
                        }} 
                        placeholder='Enter password'

                    />
                </Form.Group>
                <Button variant='primary' type='submit' className='mb-3'>Login</Button>

                {isCreds ? <div className='alert alert-danger'>Invalid Credentials! {error}</div> : ''}
            </Form>
        </Container>
    );
}

export default LoginComponent;