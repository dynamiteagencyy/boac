import { Button, Col, Container, Row, Image, Carousel } from "react-bootstrap";
import './Products.css';
import { useNavigate } from "react-router-dom";
function Products() {
    const navigate=useNavigate();

    return(
    <div>
        <h1 style={{margin:"0px 0px 90px 0px"}}>Ürünlerimiz</h1>
        <Container>
            <Row>
                <Col>
                    <img className="img-pull-left-side" onClick={()=>navigate("/urunlerimiz/dondurmalarimiz")} style={{width:"30%"}} src="https://boac-website.s3.eu-central-1.amazonaws.com/products_icecream_btn.png"/>
                    <h3 style={{margin:"20px 0px 130px 0px"}}>Dondurmalar</h3>
                </Col>
                <Col><img className="img-pull-left-side" onClick={()=>navigate("/urunlerimiz/yogurtlarimiz")} style={{width:"30%"}}  src="https://boac-website.s3.eu-central-1.amazonaws.com/products_yogurt_btn.png"/>
                    <h3 style={{margin:"20px 0px 130px 0px"}}>Yoğurtlar</h3>
                </Col>
            </Row>
            <Row>
                <Col><img className="img-pull-left-side" style={{width:"30%"}} onClick={()=>navigate("/urunlerimiz/külahlarimiz")} src="https://boac-website.s3.eu-central-1.amazonaws.com/products_cone_btn.png"/>
                <h3 style={{margin:"20px 0px 130px 0px"}}>Külahlar</h3></Col>
                <Col><img className="img-pull-left-side" style={{width:"16%"}} onClick={()=>navigate("/urunlerimiz/içeceklerimiz")} src="https://boac-website.s3.eu-central-1.amazonaws.com/products_drink_btn.png"/>
                <h3 style={{margin:"20px 0px 130px 0px"}}>İçecekler</h3></Col>
            </Row>
        </Container>

    </div>)
        
    
}

export default Products;