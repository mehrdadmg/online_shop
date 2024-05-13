import sale_img from '../../img/content/motor.jpg';

import './BannerMainSale.css';

function BannerMainSale() {
  return (
    <a className="banner_main_sale" href="google">
      <div className="banner_main_sale-top">
        <p className="banner_main_sale-info">SALE</p>
        <div className="banner_main_sale-price">
          <div className="price banner_main_sale-price-new">6900 €</div>
          <div className="price banner_main_sale-price-old">7500 €</div>
        </div>
      </div>
      <img className="banner_main_sale-img" src={sale_img} alt="" />
      <h5 className="banner_main_sale-title">Лодочный мотор Suzuki DF9.9BRS</h5>
      <p className="banner_main_sale-footer">
        Акция действует до
        <span>31.08.2020</span>
      </p>
    </a>
  );
}
export default BannerMainSale;
