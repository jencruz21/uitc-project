import React, {useState, useEffect} from "react";
import {Container, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { logout } from "../../lib/services/auth.service";
import CardContainer from "./CardContainer";
import { fetchConcerns } from "../../lib/services/data.service";

const DashboardComponent = ({concerns}) => {

    // const [concerns, setConcerns] = useState([]);
    // const [error, setError] = useState("");

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchConcerns()
            .then(response => setData(response.data))
            .catch(err => err.message); 
    }, [])

    const dataView = data.map((datum, i) => {
        return(
            <CardContainer 
                key={i}
                id={datum.id}
                fname={datum.fname}
                lname={datum.lname}
                course={datum.course}
                concern={datum.concern}
            />
        );
    });

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    return(
        <Container>
            {/* <div className='row mb-3 bg-white p-3 rounded shadow'>
                <h1 className='col-10'>Dashboard</h1>
                <Button className='col-2' variant='dark' onClick={handleLogout}>Log-out</Button>
            </div> */}
            {dataView}
        </Container>
    );
}

export default DashboardComponent;