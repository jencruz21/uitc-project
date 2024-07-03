import React from "react";
import {Container} from 'react-bootstrap'

const Header = () => {
    return (
        <Container fluid style={{backgroundColor: "#000", color: "whitesmoke", padding: "1rem", textDecoration: "underline"}} className="mb-5 position-sticky">
            <h2 style={{textAlign: "center", borderBottom: "whitesmoke"}}>UITC Concerns</h2>
        </Container>
    ) 
}

export default Header