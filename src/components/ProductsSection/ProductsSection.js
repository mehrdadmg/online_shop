import { useState, useEffect } from 'react';
import Slider from 'react-slick';

import ProductCard from '../ProductCard/ProductCard';
import './ProductsSection.css';
import arrow_right_balck from '../../img/arrow_right_black.svg';
import arrow_left_balck from '../../img/arrow_left_black.svg';

const endPointCategoriesURL = 'https://fakestoreapi.com/products/categories';
const endPointProductsInCategory = 'https://fakestoreapi.com/products/category/';

function ProductsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [categoriesItem, setCategoriesItem] = useState(null);
  const [productsInCategory, setProductsInCategory] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingProductsInCategory, setIsLoadingProductsInCategory] = useState(true);

  let productCategory;

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch(endPointCategoriesURL);
      const categoriesItem = await res.json();
      setCategoriesItem(categoriesItem);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const fetchCategoryProducts = async (newActiveTab) => {
    try {
      if (categoriesItem) {
        productCategory = categoriesItem[newActiveTab];
        const res = await fetch(`${endPointProductsInCategory}${productCategory}`);
        const productsInCategory = await res.json();
        setProductsInCategory(productsInCategory);
        setIsLoadingProductsInCategory(false);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (categoriesItem === null) fetchCategories();

    fetchCategoryProducts(activeTab);
  }, [activeTab, categoriesItem]);

  if (error) {
    console.log('Error: ', { error });
  }

  return (
    <section className="products_section">
      <div className="container">
        <div className="products_section_inner">
          <div className="tabs-wrapper">
            <div className="tabs">
              {isLoading ? (
                <h2>Loading...</h2>
              ) : (
                categoriesItem.map((tab_item, index) => (
                  <button
                    className={activeTab === index ? 'tabs-item tabs-item--active' : 'tabs-item '}
                    href="search"
                    onClick={() => {
                      setActiveTab(index);
                    }}
                    key={index}
                  >
                    <span>{tab_item}</span>
                  </button>
                ))
              )}
            </div>
            <div className="products_content">
              <div className="products_slider">
                <div className="products_slider-item">
                  <Slider {...settings}>
                    {isLoadingProductsInCategory ? (
                      <h2>Loading...</h2>
                    ) : (
                      productsInCategory.map((product) => <ProductCard {...product} key={product.id} />)
                    )}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="products_show_more">
              <button className="products_btn-show_more">Show More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductsSection;

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button type="button" className="products_slider_btn products_slider_btnpnext" onClick={onClick}>
      <img src={arrow_right_balck} alt="" />
    </button>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;

  return (
    <button type="button" className="products_slider_btn products_slider_btnprev" onClick={onClick}>
      <img src={arrow_left_balck} alt="" />
    </button>
  );
}
