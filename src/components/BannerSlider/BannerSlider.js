import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import './BannerSlider.css';
import banner_1 from '../../img/banners/banner_1.jpg';
import arrow_right from '../../img/arrow_right .svg';
import arrow_left from '../../img/arrow_left.svg';

function BannerSlider() {
  const sliderItems = ['banner_1', 'banner_1', 'banner_1', 'banner_1', 'banner_1', 'banner_1'];

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="banner_slider">
      <Slider {...settings}>
        {sliderItems.map((slider_item, index) => {
          return (
            <a className="banner_slider_item" href="google" key={index}>
              <img className="banner_slider_img" src={banner_1} alt="banner_1" />
            </a>
          );
        })}
      </Slider>
    </div>
  );
}
export default BannerSlider;

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button type="button" className="banner_slider_btn banner_slider_btnpnext" onClick={onClick}>
      <img src={arrow_right} alt="" />
    </button>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;

  return (
    <button type="button" className="banner_slider_btn banner_slider_btnprev" onClick={onClick}>
      <img src={arrow_left} alt="" />
    </button>
  );
}
