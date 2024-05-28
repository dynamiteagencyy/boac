import { Container, Row, Col, Button } from "react-bootstrap";

import "./Location.css";

export default function Location() {
    return (
        <Container className="location-container">
            <Row>
                <Col style={{ marginTop: '20px' }}>
                    <h1 style={{ marginBottom: '20px' }}>BOAC Nerede?</h1>
                    <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.670726850595!2d29.064483627992335!3d40.96679164324605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac774f6b0f4a5%3A0x7c9ff60b4696f306!2zQ2FkZGVib3N0YW4sIE9nw7xuIFNrLiBObzozIEQ6YSwgMzQ3MjggS2FkxLFrw7Z5L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1716906999716!5m2!1str!2str" loading="lazy"></iframe>
                </Col>
            </Row>
        </Container>
    );
}