import { Button, Col, Container, Row, Image, Carousel } from "react-bootstrap";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

import './Home.css';

interface Comment {
    id: number;
    comment: string;
    name: string;
    title: string;
}

export default function Home() {
    const comments: Comment[] = [
        { id: 1, comment: 'Ben hayatımda böyle dondurma yemedim!', name: 'Can Görkay', title: 'Müşteri Temsilci Direktörü' },
        { id: 2, comment: 'Güzel dondurma!', name: 'Ahmet A', title: 'Müşteri' },
        { id: 3, comment: 'Başarılı', name: 'Mehmet M', title: 'Satış Danışmanı' },
        { id: 4, comment: 'Lezzetli!', name: 'Yeşim Y', title: 'Personel' }
    ];

    return (
        <Container className="home-container">
            <Row>
                <Col xs={12} md={6} lg={5}>
                    <h3 style={{ textAlign: 'left' }}>BOAC'a Hoşgeldin!</h3>
                    <h1 style={{ textAlign: 'left' }}>Bizimle Keşfe Çıkın <br></br> Ve Damaklarınızı Şımartın!</h1>
                    <p style={{ textAlign: 'left', marginTop: '50px', maxWidth: '30vw' }}>BOAC Soft Serve, enfes soft serve dondurmaları ve el yapımı topping'leriyle tatlı tutkunlarına unutulmaz bir lezzet deneyimi sunuyor. Bizimle keşfe çıkın ve damaklarınızı şımartın!</p>
                    <div style={{ textAlign: 'left', marginTop: '50px' }}>
                        <Button variant="primary">Ürünlere Göz At?</Button>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={7}>

                </Col>
            </Row>
            <Row>
                <Col className="ozgun-tasarim-col" xs={12} md={12} lg={4}>
                    <Image
                        className="ozgun-tasarim-img-1"
                        src="https://boac-website.s3.eu-central-1.amazonaws.com/ozgun_tasarim_bg.png" />
                </Col>
                <Col className="ozgun-tasarim-col" xs={12} md={12} lg={8}>
                    <Image
                        className="ozgun-tasarim-img-2"
                        src="https://boac-website.s3.eu-central-1.amazonaws.com/ice_cream_home.png" />
                </Col>
            </Row>
            <Row>
                <Col style={{marginBottom: '-80px', zIndex: '2000'}}>
                    <h1>Müşterilerimiz Ne Düşünüyor?<br></br>"</h1>
                </Col>
            </Row>
            <Row>
                <Col style={{padding: '0 80px'}}>
                    <Carousel
                        nextIcon={<LuArrowRight size={40} className="carousel-control-icon" />}
                        prevIcon={<LuArrowLeft size={40} className="carousel-control-icon" />}
                    >
                        {comments.map((item) => (
                            <Carousel.Item key={item.id}>
                                <div className="d-block w-100" style={{ height: '200px', backgroundColor: 'white', paddingTop: '80px'}}>
                                    <p className="text-center" style={{marginBottom: '30px'}}>{item.comment}</p>
                                    <p className="text-center" style={{fontSize: '16px', fontWeight: 'bold', margin: '0'}}>{item.name}</p>
                                    <p className="text-center">{item.title}</p>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}