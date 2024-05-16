import { Button, Col, Container, Row } from "react-bootstrap";
import './Home.css';

export default function Home() {
    return (
        <Container className="home-container">
            <Row>
                <Col xs={12} md={6} lg={5}>
                    <p style={{textAlign: 'left', fontSize: '20px', fontWeight: 'bold'}}>BOAC'a Hoşgeldin!</p>
                    <p style={{textAlign: 'left', fontSize: '50px', fontWeight: '1000'}}>Bizimle Keşfe Çıkın Ve Damaklarınızı Şımartın!</p>
                    <p style={{textAlign: 'left', marginTop: '50px', fontSize: '16px', maxWidth: '30vw'}}>BOAC Soft Serve, enfes soft serve dondurmaları ve el yapımı topping'leriyle tatlı tutkunlarına unutulmaz bir lezzet deneyimi sunuyor. Bizimle keşfe çıkın ve damaklarınızı şımartın!</p>
                    <div style={{textAlign: 'left', marginTop: '50px'}}>
                        <Button variant="primary">Ürünlere Göz At?</Button>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={7}>2 of 3 (wider)</Col>
            </Row>
        </Container>
    );
}