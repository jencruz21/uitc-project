import React, {Component} from 'react';
import {Container, Form, Button} from 'react-bootstrap';

class SignUpComponent extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            isSuccessful: false
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        console.log(value)
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3005/signup", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => {
            if (!response.ok) {
                return response.statusText;
            }
            this.setState({
                isSuccessful: true
            });
            return response.ok;
        })
        .then(data => {
            console.log(data);
        });
    }

    render() {
        return(
            <Container style={{backgroundColor: "#FFF"}} className='shadow p-3 mb-5 rounded md'>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId='handleUsername' className='mb-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type='text' 
                            onChange={this.handleChange} 
                            name='username' 
                            placeholder='Enter username' 
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='handlePassword' className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type='password' 
                            onChange={this.handleChange} 
                            name='password' 
                            placeholder='Enter passowrd' 
                        >

                        </Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>Sign Up</Button>
                </Form>
                {this.state.isSuccessful ? <div className='alert alert-successful mt-4'>Signup is successful</div> : <div></div>}
            </Container>
        );
    }
}

export default SignUpComponent;