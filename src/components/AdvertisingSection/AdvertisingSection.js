import banner_2 from '../../img/banners/banner_2.jpg';
import './AdvertisingSection.css';

function AdvertisingSection() {
  return (
    <section className="advertising_section">
      <div className="container">
        <a className="advertising_section-banner" href="google">
          <img src={banner_2} alt="discounts on spare parts" />
        </a>
      </div>
    </section>
  );
}
export default AdvertisingSection;
