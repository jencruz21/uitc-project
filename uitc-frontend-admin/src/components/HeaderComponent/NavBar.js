import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router";
import { isAuth, logout } from "../../lib/services/auth.service";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            height: "7vh",
            background: "#000",
            color: "#FFF",
            padding: "0.3rem",
            marginBottom: "2.5vh",
            textDecoration: "underline",
        }}
        className="sticky-top"
        >
            <Container fluid className="row row-cols-2 p-1">
                <p className="col-lg-6 col fs-3" style={{paddingLeft: "5vw"}}>UITC Concerns</p>
                {
                    isAuth()
                    ?( <p 
                        className="col-lg-6 col text-lg-end text-end fs-3" 
                        style={{paddingLeft: "5vw",
                                marginLeft: "auto",
                                marginTop: "0",
                                marginBottom: "0",
                                cursor: "pointer"
                        }} 
                        onClick={() => {
                                        logout();
                                        window.location.reload();
                                        navigate("/login");
                        }}>
                        Log out</p>
                    )
                    :<></>
                }
            </Container>
        </div>
    );
}

export default NavBar;

{/* <div className="col-1" style={{paddingTop: "5px"}}>
                            <Dropdown className="decrease">
                                <Dropdown.Toggle variant="secondary" style={{background: "#303030"}}></Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => {
                                        logout();
                                        window.location.reload();
                                        navigate("/login");
                                    }}>
                                        Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </div> */}
