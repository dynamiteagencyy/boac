import { Button, Col, Container, Nav, Row, Image } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import './Footer.css';

export default function Footer() {
    return (
        <Container className="footer-container">
            <Row>
                <Nav className="me-auto">
                    <Col xs={12} md={2} lg={2}>
                        <Nav.Link href="/">Anasayfa</Nav.Link>
                    </Col>
                    <Col xs={12} md={2} lg={2}>
                        <Nav.Link href="/">Ürünlerimiz</Nav.Link>
                    </Col>
                    <Col xs={12} md={2} lg={2}>
                        <Nav.Link href="/hakkimizda">Hakkımızda</Nav.Link>
                    </Col>
                    <Col xs={12} md={2} lg={2}>
                        <Nav.Link href="/">Franchise</Nav.Link>
                    </Col>
                    <Col xs={12} md={2} lg={2}>
                        <Nav.Link href="/">Blog</Nav.Link>
                    </Col>
                    <Col xs={12} md={2} lg={2}>
                        <Nav.Link href="/iletisim">İletişim</Nav.Link>
                    </Col>
                </Nav>
            </Row>
            <Row style={{marginTop: '20px'}}>
                <Col>
                    <Image
                        width="120px"
                        src="https://boac-website.s3.eu-central-1.amazonaws.com/logo.png" />
                </Col>
            </Row>
            <Row style={{marginTop: '20px'}}>
                <Col>
                    <p style={{fontSize: '10px', margin: '0'}}>Designed by Dynamite Agency<br></br>2024</p>
                    <p>
                        <a style={{color: 'white'}} href="https://www.facebook.com/profile.php?id=61557954306563&locale=tr_TR" target="_blank">
                            <FaFacebookF style={{cursor: 'pointer'}}></FaFacebookF>
                        </a>
                        <a style={{color: 'white', margin: '0 30px'}} href="https://www.instagram.com/boacsoftserve" target="_blank">
                            <FaInstagram style={{cursor: 'pointer'}}></FaInstagram>
                        </a>
                        <a style={{color: 'white'}} href="https://www.tiktok.com/@boacsoftserve?is_from_webapp=1&sender_device=pc" target="_blank">
                            <FaTiktok style={{cursor: 'pointer'}}></FaTiktok>
                        </a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}