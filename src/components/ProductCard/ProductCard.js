import './ProductCard.css';
import favorite_w from '../../img/favorite_w.svg';
import basket_cards from '../../img/basket_cards.svg';

const endPointProductById = 'https://fakestoreapi.com/products/';

function ProductCard(props) {
  const { id, title, rating, price, image } = props;
  const product_available = true;

  return (
    <div className={'productCard-wrapper' + (product_available ? '' : ' product_not_available')}>
      <button className="productCard-favorite">
        <img className="productCard-favorite-icon" src={favorite_w} alt="" />
      </button>
      <button className="productCard-basket">
        <img className="productCard-basket-icon" src={basket_cards} alt="" />
      </button>
      <p className="productCard-sale">SALE</p>
      <button className="productCard-notify-me">Notify on arrival</button>

      <a className="productCard-item" href={endPointProductById + id}>
        <p className="productCard_hover-text">View Details</p>
        <img className="productCard-img" src={image} alt={'image of ' + title} />
        <h5 className="productCard-title">{title}</h5>
        <p className="price productCard-price">{price} €</p>
        <p className="productCard-notify-text">Not Available</p>
      </a>
    </div>
  );
}

export default ProductCard;
