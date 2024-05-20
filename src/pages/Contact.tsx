import { Container, Row, Col, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';

import "./Contact.css";

export default function Contact() {
    const sendEmail = (e: any) => {
        
        emailjs.sendForm('service_6g4d40i', 'template_k6mktnv', e.target, '-z039C0Ijwv93I4yZ');
        alert("Email gönderildi!");
    }
    return (
        <Container className="contact-container">
            <Row>
                <Col style={{ marginTop: '20px' }}>
                    <p style={{ fontSize: '32px', fontWeight: 'bold' }}>Bize Ulaşın</p>
                    <p style={{fontSize: '14px'}}>Soru, öneri veya geri bildirimleriniz varsa, bize aşağıdaki formu <br></br> doldurarak ulaşabilirsiniz.</p>
                    <form className='contact-form' onSubmit={sendEmail}>
                        <label className="contact-label" htmlFor="nameFrom">Adınız:</label>
                        <input className="contact-input" type="text" name="name_from" id="nameFrom"></input>
                        <label className="contact-label" htmlFor="emailFrom">E-posta Adresiniz:</label>
                        <input className="contact-input" type="text" name="email_from" id="emailFrom"></input>
                        <label className="contact-label" htmlFor="phoneFrom">Telefon Numaranız:</label>
                        <input className="contact-input" type="tel" name="phone_from" id="phoneFrom"></input>
                        <label className="contact-label" htmlFor="message">Mesajınız:</label>
                        <textarea className="contact-input" name="message" id="message"></textarea>
                        <div style={{textAlign: 'center'}}>
                            <Button className="contact-submit-button" type="submit">Gönder</Button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}