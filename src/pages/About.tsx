import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';

export default function About() {
    return (
        <>
            <Container className='about-container'>
                <Row>
                    <Col className='about-first-text'>
                        <h1>BOAC Soft Serve’ü Daha Yakından Tanıyın!</h1>
                        <p>BOAC Soft Serve olarak kiosk konseptli dükkanlarımızla müşterilerimize en kolay ve en pratik şekilde ulaşıyoruz. “We serve, you deserve" sloganıyla yola çıktığımız markamızda, lezzetli dondurma ve tatlılarla dolu bir dünyaya kapı aralıyoruz. Müşterilerimize en taze ve kaliteli malzemelerle hazırladığımız özel tariflerimizle unutulmaz bir tatlı deneyimi sunuyoruz. Her bir ürünümüzde özgünlük ve lezzetin izlerini taşıyor, müşterilerimize damaklarında unutulmaz bir tat bırakmayı amaçlıyoruz.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='about-bg-col'>
                        <Image
                            className="about-bg"
                            src="https://boac-website.s3.eu-central-1.amazonaws.com/about_bg_1.png" />
                        <div className='about-bg-text-1'>
                            <h1>Vizyonumuz</h1>
                            <p>BOAC Soft Serve olarak vizyonumuz, müşterilerimize en kaliteli ve yenilikçi tatlı deneyimini sunmaktır. Yaratıcı ve lezzetli ürünlerimizle her anınıza tat katmak, öncelikli hedefimizdir.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='about-bg-col'>
                        <Image
                            className="about-bg"
                            src="https://boac-website.s3.eu-central-1.amazonaws.com/about_bg_2.png" />
                        <div className='about-bg-text-2'>
                            <h1>Misyonumuz</h1>
                            <p>Misyonumuz, herkesin kolayca erişebileceği, sağlıklı ve lezzetli bir tatlı deneyimi sunmaktır. Müşterilerimizin memnuniyeti ve damak zevklerine hitap etmek için sürekli olarak kendimizi geliştiriyor ve inovatif yaklaşımlarımızla sektörde öncü olmayı hedefliyoruz.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='about-second-text'>
                        <h1>BOAC Soft Serve</h1>
                        <h2>Lezzetin Yeni Tanımı</h2>
                    </Col>
                </Row>
                <Row className='about-no-row'>
                    <Col xs={3} md={3} lg={3}>
                        <Image
                            className="about-no-img"
                            src="https://boac-website.s3.eu-central-1.amazonaws.com/about_no_1.png" />
                    </Col>
                    <Col className='about-no-text' xs={9} md={9} lg={9}>
                        <h3>Dondurma ve Yoğurt Severlerin Buluşma Noktası:</h3>
                        <p>Arkadaşlarınızla veya ailenizle tatlı bir kaçamak yapmanın en keyifli adresi. Sofistike lezzetleri ve çeşitli sunum seçenekleriyle, leziz atıştırmalıklarınızı paylaşmanın tadını çıkarın.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} md={3} lg={3}>
                        <Image
                            className="about-no-img"
                            src="https://boac-website.s3.eu-central-1.amazonaws.com/about_no_2.png" />
                    </Col>
                    <Col className='about-no-text' xs={9} md={9} lg={9}>
                        <h3>Sağlıklı Atıştırmalıkların Yeni Adresi:</h3>
                        <p>Sağlıklı atıştırmalık arayanlar için taze meyvelerle hazırlanan ve birbirinden lezzetli yoğurt seçenekleri sunan BOAC Soft Serve besleyici tatların buluşma noktası.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} md={3} lg={3}>
                        <Image
                            className="about-no-img"
                            src="https://boac-website.s3.eu-central-1.amazonaws.com/about_no_3.png" />
                    </Col>
                    <Col className='about-no-text' xs={9} md={9} lg={9}>
                        <h3>Kusursuz Lezzet Deneyimi:</h3>
                        <p>BOAC Soft Serve'in pürüzsüz dokusu, günlük meyveleri ve el yapımı lezzetleri, damağınızı şımartırken kalbinizi de fethediyor, her kaşıkta farklı bir mutluluk yaşatıyor.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} md={3} lg={3}>
                        <Image
                            className="about-no-img"
                            src="https://boac-website.s3.eu-central-1.amazonaws.com/about_no_4.png" />
                    </Col>
                    <Col className='about-no-text' xs={9} md={9} lg={9}>
                        <h3>Her An Keyifli Bir Kaçamak:</h3>
                        <p>Tatlı bir kaçamak yapmak istediğinizde BOAC Soft Serve haftanın 7 günü hizmetinizdedir.</p>
                    </Col>
                </Row>
            </Container>
            <Row style={{marginTop: '50px'}}>
                <Col className='about-bg-full-col'>
                    <Image
                        className="about-bg-full-img"
                        src="https://boac-website.s3.eu-central-1.amazonaws.com/about_bg_3.png" />
                    <h3 className='about-bg-full-text'>BOAC Soft Serve olarak, lezzetin sınırlarını zorlayan bir marka olarak yolculuğumuza devam ediyoruz. Siz de bizimle birlikte bu lezzet dolu <br></br> maceraya katılarak, tatlı tutkunluğunuzun yeni ve sağlıklı adresini keşfedin!</h3>
                </Col>
            </Row>
        </>
    );
}