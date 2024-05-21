import React from 'react';
import './Icecream.css';
import right from "./img/deneme.png"

const Icecream = () => {
  return (
    <div className="container-products-detail">
      <div className="image half-left">
        <img src="https://boac-website.s3.eu-central-1.amazonaws.com/icecream_product_message.png" alt="Left" />
      </div>
      <div className="ice-content">
        <h1>Dondurmalar</h1>
        <div className="imgholder">
          <div className='img-holder-pic'><img src="https://boac-website.s3.eu-central-1.amazonaws.com/icecream_product_caramel.png" /></div>
          <div className='img-holder-text'>
            <ul>
              <li><h3>Tuzlu Karamel</h3></li>
              <li><p>BOAC Soft Serve'de, her zevke uygun çeşitli soft serve dondurma ve el yapımı topping'ler bulabilirsiniz. Yoğun lezzetlerimizi keşfedin ve damaklarınızı şımartın.</p></li>
              <li><button>100₺</button></li>
            </ul>

          </div>
        </div>
        <div className="imgholder">
          <div className='img-holder-pic' ><img src="https://boac-website.s3.eu-central-1.amazonaws.com/icecream_product_baklava.png" /></div>
          <div className='img-holder-text'>
            <ul>
              <li><h3>Fıstıklı Baklava</h3></li>
              <li><p>BOAC Soft Serve'de, her zevke uygun çeşitli soft serve dondurma ve el yapımı topping'ler bulabilirsiniz. Yoğun lezzetlerimizi keşfedin ve damaklarınızı şımartın.</p></li>
              <li><button>120₺</button></li>
            </ul>

          </div>
        </div>
        <div className="imgholder">
          <div className='img-holder-pic'><img src="https://boac-website.s3.eu-central-1.amazonaws.com/icecream_product_brownie.png" /></div>
          <div className='img-holder-text'>
            <ul>
              <li><h3>Fındıklı Brownie</h3></li>
              <li><p>BOAC Soft Serve'de, her zevke uygun çeşitli soft serve dondurma ve el yapımı topping'ler bulabilirsiniz. Yoğun lezzetlerimizi keşfedin ve damaklarınızı şımartın.</p></li>
              <li><button>90₺</button></li>
            </ul>

          </div>
        </div>
      </div>
      <div className="image half-right">
        <img src="https://boac-website.s3.eu-central-1.amazonaws.com/icecream_product_message.png" alt="Left" />
      </div>
    </div>
  );
};
export default Icecream;