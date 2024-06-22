import { Button, Col, Container, Row, Image, Carousel } from "react-bootstrap";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

import './Home.css';
import './HomeAnimation.css';
import { useEffect, useState, useRef, act } from "react";

interface Comment {
    id: number;
    comment: string;
    name: string;
}

export default function Home() {
    const COMMENTS_URL = 'https://boac-website.s3.eu-central-1.amazonaws.com/comments.json';
    const dotHeights = [472, 377, 281, 185, 91, 0];
    const dotImages = [
        { dot: 6, name: "yabanmersini", url: process.env.PUBLIC_URL + "/home-dessert-images/homepage_dessert_yabanmersini.png" },
        { dot: 5, name: "karisik", url: process.env.PUBLIC_URL + "/home-dessert-images/homepage_dessert_karisik.png" },
        { dot: 4, name: "cilek", url: process.env.PUBLIC_URL + "/home-dessert-images/homepage_dessert_cilek.png" },
        { dot: 3, name: "tuzlukaramel", url: process.env.PUBLIC_URL + "/home-dessert-images/homepage_dessert_tuzlukaramel.png" },
        { dot: 2, name: "baklava", url: process.env.PUBLIC_URL + "/home-dessert-images/homepage_dessert_baklava.png" },
        { dot: 1, name: "brownie", url: process.env.PUBLIC_URL + "/home-dessert-images/homepage_dessert_brownie.png" }
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
                if (height < 91) {
                    setActiveDot(6);
                } else if (height >= 91 && height < 185) {
                    setActiveDot(5);
                } else if (height >= 185 && height < 281) {
                    setActiveDot(4);
                } else if (height >= 281 && height < 377) {
                    setActiveDot(3);
                } else if (height >= 377 && height < 472) {
                    setActiveDot(2);
                } else if (height >= 472) {
                    animation.style.animation = 'none';
                    animation.style.transition = 'none';
                    animation.style.height = '480px'
                    setActiveDot(1);
                    setTimeout(() => {
                        animation.style.animation = 'fill 20s linear infinite';
                    }, 3000);
                }
            }
        };
        setFade('');
        setTimeout(() => {
            setAnimationBgImage(dotImages.find(item => item.dot == activeDot)?.url);
            setFade('rotate');
        }, 1000);
        const interval = setInterval(updateActiveDot, 200);
        return () => {
            clearInterval(interval);
        };
    }, [activeDot]);

    const handleDotClick = (index: any) => {
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
        setActiveDot(index);
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
                <Col className="home-entry" xs={12} md={5} lg={5}>
                    <h3>BOAC'a Hoşgeldin!</h3>
                    <h1>Bizimle Keşfe Çıkın Ve Damaklarınızı Şımartın!</h1>
                    <p>BOAC Soft Serve, enfes soft serve dondurmaları ve el yapımı topping'leriyle tatlı tutkunlarına unutulmaz bir lezzet deneyimi sunuyor. Bizimle keşfe çıkın ve damaklarınızı şımartın!</p>
                    <div className="button">
                        <Button href="/urunlerimiz" variant="primary">Ürünlere Göz At!</Button>
                    </div>
                </Col>
                <Col xs={12} md={7} lg={7} className="photo-animate-col">
                    <div className="bg-daire"><div className="bg-daire-inner"></div></div>
                    <div className={`pictures ${activeDot===1?'rotate':''}`} style={{ backgroundImage: `url(${dotImages.find(item => item.dot == 1)?.url})` }}></div>
                    <div className={`pictures ${activeDot===2?'rotate':''}`} style={{ backgroundImage: `url(${dotImages.find(item => item.dot == 2)?.url})` }}></div>
                    <div className={`pictures ${activeDot===3?'rotate':''}`} style={{ backgroundImage: `url(${dotImages.find(item => item.dot == 3)?.url})` }}></div>
                    <div className={`pictures ${activeDot===4?'rotate':''}`} style={{ backgroundImage: `url(${dotImages.find(item => item.dot == 4)?.url})` }}></div>
                    <div className={`pictures ${activeDot===5?'rotate':''}`} style={{ backgroundImage: `url(${dotImages.find(item => item.dot == 5)?.url})` }}></div>
                    <div className={`pictures ${activeDot===6?'rotate':''}`} style={{ backgroundImage: `url(${dotImages.find(item => item.dot == 6)?.url})` }}></div>
                    <div className="animation-container">
                        <div className='animation' ref={animationRef}></div>
                    </div>
                    <div className="text-container">
                        <p className='text1' onClick={() => handleDotClick(1)}>Fındıklı Brownie</p>
                        <div className={`Dot Dot1 ${activeDot === 1 ? 'active' : ''}`} onClick={() => handleDotClick(1)}>
                            {activeDot === 1 ? <FaLocationDot className="location-icon" /> : <div></div>}
                        </div>
                        <p className='text2' onClick={() => handleDotClick(2)}>Fındıklı Baklava</p>
                        <div className={`Dot Dot2 ${activeDot === 2 ? 'active' : ''}`} onClick={() => handleDotClick(2)}>
                            {activeDot === 2 ? <FaLocationDot className="location-icon" /> : <div></div>}
                        </div>
                        <p className='text3' onClick={() => handleDotClick(3)}>Tuzlu Karamel</p>
                        <div className={`Dot Dot3 ${activeDot === 3 ? 'active' : ''}`} onClick={() => handleDotClick(3)}>
                            {activeDot === 3 ? <FaLocationDot className="location-icon"/> : <div></div>}
                        </div>
                        <p className='text4' onClick={() => handleDotClick(4)}>Çilekli Yoğurt</p>
                        <div className={`Dot Dot4 ${activeDot === 4 ? 'active' : ''}`} onClick={() => handleDotClick(4)}>
                            {activeDot === 4 ? <FaLocationDot className="location-icon" /> : <div></div>}
                        </div>
                        <p className='text5' onClick={() => handleDotClick(5)}>Karışık Meyveli Yoğurt</p>
                        <div className={`Dot Dot5 ${activeDot === 5 ? 'active' : ''}`} onClick={() => handleDotClick(5)}>
                            {activeDot === 5 ? <FaLocationDot className="location-icon" /> : <div></div>}
                        </div>
                        <p className='text6' onClick={() => handleDotClick(6)}>Yabanmersinli Yoğurt</p>
                        <div className={`Dot Dot6 ${activeDot === 6 ? 'active' : ''}`} onClick={() => handleDotClick(6)}>
                            {activeDot === 6 ? <FaLocationDot className="location-icon" /> : <div></div>}
                        </div>
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