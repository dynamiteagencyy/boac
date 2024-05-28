import { Button, Col, Container, Row, Image, Carousel } from "react-bootstrap";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import './dondurma.css';
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
   const [activeDot, setActiveDot] = useState(0);
   const dotHeights = [478, 430, 308, 162, 44, 0];
   const animationRef = useRef(null);
   const delay = 30000; // 3 saniye bekleme süresi
   useEffect(() => {
       const updateActiveDot = () => {
           const animation = animationRef.current;
           if (animation) {
               const height = parseFloat(getComputedStyle(animation).height);
               if (height < 44) {
                   setActiveDot(6);
               } else if (height >= 44 && height < 162) {
                   setActiveDot(5);
               } else if (height >= 162 && height < 308) {
                   setActiveDot(4);
               } else if (height >= 308 && height < 430) {
                   setActiveDot(3);
               } else if (height >= 430 && height < 478) {
                   setActiveDot(2);
               } else if (height >= 478 ) {
                setActiveDot(1);
            }
           }
       };
       const interval = setInterval(updateActiveDot, 100);
       return () => {
           clearInterval(interval);
       };
   }, [activeDot]);
   const handleDotClick = (index) => {
       setActiveDot(index);
       const animation = animationRef.current;
       if (animation) {
           const newHeight = dotHeights[index - 1];
           // Pause the current animation
           animation.style.animation = 'none';
           animation.style.transition = 'none';
           // Set the new height immediately
           animation.style.height = `${newHeight}px`;
           // Restart the animation from the new position
           setTimeout(() => {
               const duration = ((478 - newHeight) / 478) * 30000;
               animation.style.transition = `height ${duration}ms linear`;
               animation.style.height = '500px';
               // Re-enable the CSS animation to make it continue smoothly
               setTimeout(() => {
                   animation.style.animation = 'fill 30s linear infinite';
               }, duration);
           }, 50);
       }
   };
   return (
<Container className="home-container">
<Row>
<Col xs={12} md={6} lg={6}>
<h3 style={{ textAlign: 'left',  marginLeft:"150px" }}>BOAC'a Hoşgeldin!</h3>
<h1 style={{ textAlign: 'left',  marginLeft:"150px" }}>Bizimle Keşfe Çıkın <br /> Ve Damaklarınızı Şımartın!</h1>
<p style={{ textAlign: 'left', marginTop: '50px', maxWidth: '30vw', marginLeft:"150px"  }}>BOAC Soft Serve, enfes soft serve dondurmaları ve el yapımı topping'leriyle tatlı tutkunlarına unutulmaz bir lezzet deneyimi sunuyor. Bizimle keşfe çıkın ve damaklarınızı şımartın!</p>
<div style={{ textAlign: 'left', marginTop: '50px', marginLeft:"150px" }}>
<Button variant="primary">Ürünlere Göz At</Button>
</div>
</Col>
<Col xs={12} md={6} lg={5}>
<div className="bg-daire"><div className="bg-daire-inner"></div></div>

<div className='pictures'></div>
<p className='text1'>Fındıklı Brownie</p>
<div className={`Dot Dot1 ${activeDot === 1 ? 'active' : ''}`} onClick={() => handleDotClick(1)}></div>
<p className='text2'>Fındıklı Baklava</p>
<div className={`Dot Dot2 ${activeDot === 2 ? 'active' : ''}`} onClick={() => handleDotClick(2)}></div>
<p className='text3'>Tuzlu Karamel</p>
<div className={`Dot Dot3 ${activeDot === 3 ? 'active' : ''}`} onClick={() => handleDotClick(3)}></div>
<p className='text4'>Çilekli Yoğurt</p>
<div className={`Dot Dot4 ${activeDot === 4 ? 'active' : ''}`} onClick={() => handleDotClick(4)}></div>
<p className='text5'>Karışık Meyveli Yoğurt</p>
<div className={`Dot Dot5 ${activeDot === 5 ? 'active' : ''}`} onClick={() => handleDotClick(5)}></div>
<p className='text6'>Yabanmersinli Yoğurt</p>
<div className={`Dot Dot6 ${activeDot === 6 ? 'active' : ''}`} onClick={() => handleDotClick(6)}></div>
<div className="containerdeneme">
<div className='animation' ref={animationRef}></div>
<div className="container2"></div>
</div>
</Col>
</Row>
<div className="gift-design">
<div><img style={{ width: "50%" }} src="https://boac-website.s3.eu-central-1.amazonaws.com/dog_img.png" /></div>
<div><h2>we serve,</h2><h2>you deserve!</h2></div>
</div>
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
<Col style={{ marginBottom: '-80px', zIndex: '2000' }}>
<h1>Müşterilerimiz Ne Düşünüyor?<br />"</h1>
</Col>
</Row>
<Row>
<Col style={{ padding: '0 80px' }}>
<Carousel
                       nextIcon={<LuArrowRight size={40} className="carousel-control-icon" />}
                       prevIcon={<LuArrowLeft size={40} className="carousel-control-icon" />}
>
                       {comments.map((item) => (
<Carousel.Item key={item.id}>
<div className="d-block w-100" style={{ height: '200px', backgroundColor: 'white', paddingTop: '80px' }}>
<p className="text-center" style={{ marginBottom: '30px' }}>{item.comment}</p>
<p className="text-center" style={{ fontSize: '16px', fontWeight: 'bold', margin: '0' }}>{item.name}</p>
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