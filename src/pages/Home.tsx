import { Button, Col, Container, Row, Image, Carousel } from "react-bootstrap";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

import './Home.css';
import './dondurma.css';
import { useEffect, useState, useRef, act } from "react";

interface Comment {
    id: number;
    comment: string;
    name: string;
}

export default function Home() {
    const COMMENTS_URL = 'https://boac-website.s3.eu-central-1.amazonaws.com/comments.json';
    const dotHeights = [472, 413, 300, 170, 52, 0];
    const dotImages = [
        { dot: 6, name: "yabanmersini", url: "https://boac-website.s3.eu-central-1.amazonaws.com/homepage_dessert_yabanmersini.png" },
        { dot: 5, name: "karisik", url: "https://boac-website.s3.eu-central-1.amazonaws.com/homepage_dessert_karisik.png" },
        { dot: 4, name: "cilek", url: "https://boac-website.s3.eu-central-1.amazonaws.com/homepage_dessert_cilek.png" },
        { dot: 3, name: "tuzlukaramel", url: "https://boac-website.s3.eu-central-1.amazonaws.com/homepage_dessert_tuzlukaramel.png" },
        { dot: 2, name: "baklava", url: "https://boac-website.s3.eu-central-1.amazonaws.com/homepage_dessert_baklava.png" },
        { dot: 1, name: "brownie", url: "https://boac-website.s3.eu-central-1.amazonaws.com/homepage_dessert_brownie.png" }
    ];
    const animationRef = useRef(null);

    const [comments, setComments] = useState<Comment[] | null>(null);
    const [activeDot, setActiveDot] = useState(6);
    const [fade, setFade] = useState('fade-in');
    const [animationBgImage, setAnimationBgImage] = useState(dotImages.find(item => item.dot == 1)?.url);

    useEffect(() => {
        const updateActiveDot = () => {
            const animation: any = animationRef.current;
            if (animation) {
                const height = parseFloat(getComputedStyle(animation).height);
                if (height < 52) {
                    setActiveDot(6);
                } else if (height >= 52 && height < 170) {
                    setActiveDot(5);
                } else if (height >= 170 && height < 300) {
                    setActiveDot(4);
                } else if (height >= 300 && height < 413) {
                    setActiveDot(3);
                } else if (height >= 413 && height < 472) {
                    setActiveDot(2);
                } else if (height >= 472) {
                    animation.style.animation = 'none';
                    animation.style.transition = 'none';
                    animation.style.height = '480px'
                    setActiveDot(1);
                    setTimeout(() => {
                        animation.style.animation = 'fill 15s linear infinite';
                    }, 3000);
                }
            }
        };
        setFade('fade-out');
        setTimeout(() => {
            setAnimationBgImage(dotImages.find(item => item.dot == activeDot)?.url);
            setFade('fade-in');
        }, 500);
        const interval = setInterval(updateActiveDot, 200);
        return () => {
            clearInterval(interval);
        };
    }, [activeDot]);

    const handleDotClick = (index: any) => {
        setActiveDot(index);
        const animation: any = animationRef.current;
        if (animation) {
            const newHeight = dotHeights[index - 1];
            animation.style.animation = 'none';
            animation.style.transition = 'none';
            animation.style.height = `${newHeight}px`;
            setTimeout(() => {
                const duration = ((472 - newHeight) / 472) * 30000;
                animation.style.transition = `height ${duration}ms linear`;
                animation.style.height = '480px';
            }, 50);
        }
    };

    useEffect(() => {
        fetch(COMMENTS_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setComments(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <Container className="home-container">
            <Row>
                <Col className="home-entry" xs={12} md={5} lg={5} style={{ paddingLeft: '40px' }}>
                    <h3 style={{ textAlign: 'left' }}>BOAC'a Hoşgeldin!</h3>
                    <h1 style={{ textAlign: 'left' }}>Bizimle Keşfe Çıkın <br></br> Ve Damaklarınızı <br></br> Şımartın!</h1>
                    <p>BOAC Soft Serve, enfes soft serve dondurmaları ve el yapımı topping'leriyle tatlı tutkunlarına unutulmaz bir lezzet deneyimi sunuyor. Bizimle keşfe çıkın ve damaklarınızı şımartın!</p>
                    <div>
                        <Button href="/" variant="primary">Ürünlere Göz At?</Button>
                    </div>
                </Col>
                <Col xs={12} md={7} lg={7} className="photo-animate-col">
                    <div className="bg-daire"><div className="bg-daire-inner"></div></div>
                    <div className={`pictures ${fade}`} style={{ backgroundImage: `url(${animationBgImage})` }}></div>
                    <div className="containerdeneme">
                        <div className='animation' ref={animationRef}></div>
                    </div>
                    <div className="container2">
                        <p className='text1' onClick={() => handleDotClick(1)}>Fındıklı Brownie</p>
                        <div className={`Dot Dot1 ${activeDot === 1 ? 'active' : ''}`} onClick={() => handleDotClick(1)}></div>
                        <p className='text2' onClick={() => handleDotClick(2)}>Fındıklı Baklava</p>
                        <div className={`Dot Dot2 ${activeDot === 2 ? 'active' : ''}`} onClick={() => handleDotClick(2)}></div>
                        <p className='text3' onClick={() => handleDotClick(3)}>Tuzlu Karamel</p>
                        <div className={`Dot Dot3 ${activeDot === 3 ? 'active' : ''}`} onClick={() => handleDotClick(3)}></div>
                        <p className='text4' onClick={() => handleDotClick(4)}>Çilekli Yoğurt</p>
                        <div className={`Dot Dot4 ${activeDot === 4 ? 'active' : ''}`} onClick={() => handleDotClick(4)}></div>
                        <p className='text5' onClick={() => handleDotClick(5)}>Karışık Meyveli Yoğurt</p>
                        <div className={`Dot Dot5 ${activeDot === 5 ? 'active' : ''}`} onClick={() => handleDotClick(5)}></div>
                        <p className='text6' onClick={() => handleDotClick(6)}>Yabanmersinli Yoğurt</p>
                        <div className={`Dot Dot6 ${activeDot === 6 ? 'active' : ''}`} onClick={() => handleDotClick(6)}></div>
                    </div>
                </Col>
            </Row>
            <Row className="gift-design">
                <Col style={{ textAlign: 'right' }}>
                    <Image
                        src="https://boac-website.s3.eu-central-1.amazonaws.com/cat.gif" />
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
                                <div className="d-block w-100" style={{ height: '300px', backgroundColor: 'white', paddingTop: '80px' }}>
                                    <p className="text-center" style={{ padding: '0 15vw', textAlign: 'left' }}>{item.comment}</p>
                                    <h1 className="text-center" style={{ marginTop: '-10px' }}>{item.name}</h1>
                                </div>
                            </Carousel.Item>
                        )) : <div></div>}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}