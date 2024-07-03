import { Container } from "react-bootstrap";

const { useNavigate, Link } = require("react-router");

const CardContainer = ({id, fname, lname, concern, course}) => {
    const navigate = useNavigate();

    return (
        <div className="shadow p-3 mb-3 rounded md" style={{background: "#FFF", cursor:"pointer"}} onClick={() => navigate(`concern/${id}`)} >
            <Container>
                <h2>{fname} {lname}</h2>
                <h5>{course}</h5>
                <p>Concern: {concern}</p>
            </Container>
        </div>
    );
}

export default CardContainer;