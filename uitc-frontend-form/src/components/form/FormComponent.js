import React, {Component} from "react";
import {Container, Form, Button} from 'react-bootstrap';

class FormComponent extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            middleName: "",
            email: "",
            //concerns mejo mahirap ilagay eto sa array lmao
            msTeams: "",
            studentAcc: "",
            gmail: "",
            //end ng concerns
            specificConcern: "",
            course: "",
            isSubmitted: false,
            badRequest: false
        }
    }

    handleSubmit = (event) => {
        const {firstName, lastName, middleName, email, msTeams, studentAcc, gmail, specificConcern, course} = this.state;
        event.preventDefault();

        const date = new Date();
        const dateString = date.getFullYear() + 
                            "-" + (date.getMonth() + 1) + 
                            "-" + date.getDate() + 
                            " " + date.getHours() + 
                            ":" + date.getMinutes();

        fetch("http://localhost:3005/form", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                fname: firstName,
                lname: lastName,
                mname: middleName,
                email: email,
                concern: `${msTeams} ${studentAcc} ${gmail}`,
                specific_concern: specificConcern,
                course: course,
                created_at: dateString
            })
        })
        .then(response => {
            if (!response.ok) {
                this.setState({
                    isSubmitted: false,
                    badRequest: true
                });
                return;
            }
            this.setState({
                isSubmitted: true,
                badRequest: false
            })
            return response.ok;
        })
        .then(data => console.log(data));
    }
    
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        });
        console.log(value);
    }

    render() {
        return(
            <Container style={{backgroundColor: "#FFF"}} className="shadow p-3 mb-5 rounded md">
                <h2 className="text-center">UITC Concern Submission</h2>
                <Form onSubmit={this.handleSubmit}>

                {/*Handles first name*/}
                    <Form.Group controlId="firstName" className="mb-2">
                        <Form.Label>First Name </Form.Label>
                        <Form.Control type="text" placeholder="Enter firstname" name="firstName" onChange={this.handleChange}></Form.Control>
                    </Form.Group>

                {/*Handles last name*/}
                    <Form.Group controlId="lastName" className="mb-2">
                        <Form.Label>Last Name </Form.Label>
                        <Form.Control type="text" placeholder="Enter lastname" name="lastName" onChange={this.handleChange}></Form.Control>
                    </Form.Group>

                {/*Handles middle name*/}
                    <Form.Group controlId="middleName" className="mb-2">
                        <Form.Label>Middle Name </Form.Label>
                        <Form.Control type="text" placeholder="Enter middle name" name="middleName" onChange={this.handleChange}></Form.Control>
                    </Form.Group>

                {/*Handles email*/}
                    <Form.Group controlId="enterEmail" className="mb-2">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="ex. email@gmail.com" name="email" onChange={this.handleChange}></Form.Control>
                    </Form.Group>

                {/*Handles ers*/}
                <Form.Label>Concern</Form.Label>
                    <Form.Group controlId="ersChoices" className="mb-2 form-check">
                    {/*Handles ms teams problem*/}
                        <Form.Check
                            className="form-radio-input"
                            type="radio"
                            name="msTeams"
                            value="MS Teams"
                            checked={this.state.msTeams === "MS Teams"}
                            label="MS Teams"
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="ersChoices1" className="mb-2 form-check">
                    {/*Handles student problem*/}
                        <Form.Check
                            className="form-radio-input"
                            type="radio"
                            name="studentAcc"
                            value="studAcc"
                            checked={this.state.studentAcc === "studAcc"}
                            label="Student Account"
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="ersChoices2" className="mb-2 form-check">
                    {/*Handles gmail problem*/}
                        <Form.Check
                            className="form-radio-input"
                            type="radio"
                            name="gmail"
                            value="gmail"
                            checked={this.state.gmail === "gmail"}
                            label="Gmail"
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    {/*Handles Courses*/}
                     <Form.Group controlId="course" className="mb-2">
                        <Form.Label>Course</Form.Label>
                        <Form.Control 
                            name="course"
                            type="text"
                            onChange={this.handleChange}
                            placeholder="ex. BET-CPET, BET-PPET"
                        />
                     </Form.Group>

                    <Form.Group controlId="moreQuestions" className="mb-2">
                        <Form.Label>Please write your specific concern</Form.Label>
                        <Form.Control as="textarea" style={{height: "125px"}} placeholder="Write down your concern" name="specific_concern" onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="primary" className="mt-1">Submit Form</Button>
                </Form>

                {this.state.isSubmitted ? <div className="alert alert-success mt-4">Your concern is successfully sent!</div> : <div></div>}
                {this.state.badRequest ? <div className="alert alert-danger mt-4">Sorry, there is a bad request :(</div> : <div></div>}
            </Container>          
        )
    }
}

export default FormComponent