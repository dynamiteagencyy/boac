import { Container, Nav, Navbar, Image, Button } from "react-bootstrap";
import './CustomNavbar.css';
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CustomNavbar() {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    return (
        <Navbar variant="custom" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <Image
                        width="150px"
                        src="https://boac-website.s3.eu-central-1.amazonaws.com/logo.png" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" active={activeLink === '/'}>Anasayfa</Nav.Link>
                        <Nav.Link href="/" active={activeLink === '/urunlerimiz'}>Ürünlerimiz</Nav.Link>
                        <Nav.Link href="/hakkimizda" active={activeLink === '/hakkimizda'}>Hakkımızda</Nav.Link>
                        <Nav.Link href="/iletisim" active={activeLink === '/iletisim'}>İletişim</Nav.Link>
                    </Nav>
                    <Button href="/boac-nerede" variant="primary">BOAC Nerede?</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}