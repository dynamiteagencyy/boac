import { Button, Col, Container, Row, Image, Carousel } from "react-bootstrap";
import './Products.css';
import { useEffect, useState } from "react";
import ProductDetail from "../components/ProductDetail";
import ProductDetailModel from "../model/ProductDetailModel";
import { ProductModel } from "../model/ProductModel";

function Products() {
    const [showDetailComponent, setShowDetailComponent] = useState(false);
    const [productDetailPageTitle, setProductDetailPageTitle] = useState("");
    const [products, setProducts] = useState<ProductModel | null>(null);
    const [productDetails, setProductDetails] = useState<ProductDetailModel[] | null>(null);

    const PRODUCTS_URL = "https://boac-website.s3.eu-central-1.amazonaws.com/products.json";

    useEffect(() => {
        fetch(PRODUCTS_URL, {
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
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const onClickShowDetail = (title: string) => {
        setProductDetailPageTitle(title);
        setShowDetailComponent(true);
        switch (title) {
            case "Dondurmalar":
                if (products?.icecream)
                    setProductDetails(products?.icecream);
                break;
            case "Yoğurtlar":
                if (products?.yogurts)
                    setProductDetails(products?.yogurts);
                break;
            case "Külahlar":
                if (products?.cones)
                    setProductDetails(products?.cones);
                break;
            case "İçecekler":
                if (products?.drinks)
                    setProductDetails(products?.drinks);
                break;
        }
    };

    return (
        <>
            {
                showDetailComponent
                    ?
                    productDetails ? <ProductDetail productDetails={productDetails} pageTitle={productDetailPageTitle} /> : <></>
                    :
                    <div>
                        <h1 style={{ margin: "30px 0px 90px 0px" }}>Ürünlerimiz</h1>
                        <Container className="products-container">
                            <Row>
                                <Col>
                                    <img className="img-pull-left-side" onClick={() => { onClickShowDetail("Dondurmalar") }} style={{ width: "20%" }} src="https://boac-website.s3.eu-central-1.amazonaws.com/products_icecream_btn.png" />
                                    <h3 style={{ margin: "20px 0px 130px 0px" }}>Dondurmalar</h3>
                                </Col>
                                <Col><img className="img-pull-left-side" onClick={() => { onClickShowDetail("Yoğurtlar") }} style={{ width: "20%" }} src="https://boac-website.s3.eu-central-1.amazonaws.com/products_yogurt_btn.png" />
                                    <h3 style={{ margin: "20px 0px 130px 0px" }}>Yoğurtlar</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col><img className="img-pull-left-side" style={{ width: "20%" }} onClick={() => { onClickShowDetail("Külahlar") }} src="https://boac-website.s3.eu-central-1.amazonaws.com/products_cone_btn.png" />
                                    <h3 style={{ margin: "20px 0px 130px 0px" }}>Külahlar</h3>
                                </Col>
                                <Col><img className="img-pull-left-side" style={{ width: "10%" }} onClick={() => { onClickShowDetail("İçecekler") }} src="https://boac-website.s3.eu-central-1.amazonaws.com/products_drink_btn.png" />
                                    <h3 style={{ margin: "20px 0px 130px 0px" }}>İçecekler</h3>
                                </Col>
                            </Row>
                        </Container>
                    </div>
            }
        </>)

}

export default Products;