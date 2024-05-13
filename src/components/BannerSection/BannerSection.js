import BannerSlider from '../BannerSlider/BannerSlider';
import BannerMainSale from '../BannerMainSale/BannerMainSale';

import './BannerSection.css';

function BannerSection() {
  return (
    <section className="banner_section">
      <div className="container">
        <div className="banner_section_inner">
          <BannerSlider />
          <BannerMainSale />
        </div>
      </div>
    </section>
  );
}
export default BannerSection;
