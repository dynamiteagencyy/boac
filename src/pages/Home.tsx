import { Button, Col, Container, Row, Image, Carousel } from "react-bootstrap";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

import './Home.css';
import { useEffect, useState } from "react";

interface Comment {
    id: number;
    comment: string;
    name: string;
    title: string;
}

export default function Home() {
    const [comments, setComments] = useState<Comment[] | null>(null);

    useEffect(() => {
        fetch('https://boac-website.s3.eu-central-1.amazonaws.com/comments.json')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setComments(data)
          })
          .catch((error) => {
          });
      }, []);

    return (
        <Container className="home-container">
            <Row>
                <Col className="home-entry" xs={12} md={6} lg={5}>
                    <h3 style={{ textAlign: 'left' }}>BOAC'a Hoşgeldin!</h3>
                    <h1 style={{ textAlign: 'left' }}>Bizimle Keşfe Çıkın <br></br> Ve Damaklarınızı <br></br> Şımartın!</h1>
                    <p>BOAC Soft Serve, enfes soft serve dondurmaları ve el yapımı topping'leriyle tatlı tutkunlarına unutulmaz bir lezzet deneyimi sunuyor. Bizimle keşfe çıkın ve damaklarınızı şımartın!</p>
                    <div>
                        <Button href="/" variant="primary">Ürünlere Göz At?</Button>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={7}>

                </Col>
            </Row>
            <Row className="gift-design">
                <Col style={{textAlign: 'right'}}>
                    <img src="https://boac-website.s3.eu-central-1.amazonaws.com/dog_img.png" />
                </Col>
                <Col>
                    <h1>We Serve,</h1>
                    <h1>You Deserve!</h1>
                </Col>
            </Row>
            <Row className="ozgun-tasarim-row">
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
                <Col style={{ marginBottom: '-80px', zIndex: '2000' }}>
                    <h1>Müşterilerimiz Ne Düşünüyor?<br></br>"</h1>
                </Col>
            </Row>
            <Row>
                <Col className="comments-carousel">
                    <Carousel
                        nextIcon={<LuArrowRight size={40} className="carousel-control-icon" />}
                        prevIcon={<LuArrowLeft size={40} className="carousel-control-icon" />}
                    >
                        {comments ? comments.map((item) => (
                            <Carousel.Item key={item.id}>
                                <div className="d-block w-100" style={{ height: '200px', backgroundColor: 'white', paddingTop: '80px' }}>
                                    <p className="text-center">{item.comment}</p>
                                    <h1 className="text-center" style={{ margin: '0' }}>{item.name}</h1>
                                    <p className="text-center" style={{marginTop: '-8px'}}>{item.title}</p>
                                </div>
                            </Carousel.Item>
                        )) : <div></div>}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}