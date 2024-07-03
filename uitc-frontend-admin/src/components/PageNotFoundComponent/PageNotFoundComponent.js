import { Container } from "react-bootstrap";

const PageNotFoundComponent = () => {
    return (
        <Container>
            <div style={{background: "#FFF", color: "red"}} className="shadow p-3 mb-5 rounded md">
                <p style={{textAlign: 'center', fontSize: '200%'}}> 404 page not found...</p>
            </div>
        </Container>
    );
}

export default PageNotFoundComponent;