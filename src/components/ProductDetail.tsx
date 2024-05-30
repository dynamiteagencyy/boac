import ProductDetailModel from '../model/ProductDetailModel';
import './ProductDetail.css';

interface ProductDetailProps {
    productDetails: ProductDetailModel[];
    pageTitle: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productDetails, pageTitle }) => {
    return (
        <div className="container-products-detail">
            <div className="image half-left">
                <img src="https://boac-website.s3.eu-central-1.amazonaws.com/icecream_product_message.png" alt="Left" />
            </div>
            <div className="ice-content">
                <h1>{pageTitle}</h1>

                {productDetails.map(item => (
                    <div key={item.id} className="imgholder">
                        <div className='img-holder-pic'><img src={item.image} /></div>
                        <div className='img-holder-text'>
                            <ul>
                                <li><h3>{item.name}</h3></li>
                                <li><p>{item.detail}</p></li>
                                <li><button>{item.price}₺</button></li>
                            </ul>

                        </div>
                    </div>
                ))}
            </div>
            <div className="image half-right">
                <img src="https://boac-website.s3.eu-central-1.amazonaws.com/icecream_product_message.png" alt="Left" />
            </div>
        </div>
    );
}

export default ProductDetail;