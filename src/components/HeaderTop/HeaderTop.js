import logo from '../../img/logo.svg';
import basket from '../../img/basket.svg';
import adressIcon from '../../img/adress-icon.svg';
import heart from '../../img/heart.svg';
import user from '../../img/user.svg';

import './HeaderTop.css';

function HeaderTop() {
  const menuItemList = ['Магазины', 'Акции', 'Доставка и оплата'];
  return (
    <div className="header_top">
      <div className="container">
        <div className="header_top_inner">
          <nav className="menu">
            <ul className="menu_list">
              {menuItemList.map((menuItem, index) => (
                <li className="menu_item" key={index}>
                  <a className="menu_link" href="google">
                    {menuItem}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="menu_link" href="google">
            <img className="logo_img" src={logo} alt="logo" />
          </a>
          <div className="header_box">
            <p className="header_adress">
              <img className="logo_img" src={adressIcon} alt="logo" />
              Харьков, ул. Науки 25
            </p>
            <ul className="user_list">
              <li className="user_list_item">
                <a className="user_list_link" href="google">
                  <img src={heart} alt="" />
                </a>
              </li>
              <li className="user_list_item">
                <a className="user_list_link" href="google">
                  <img src={user} alt="" />
                </a>
              </li>
              <li className="user_list_item">
                <a className="user_list_link basket" href="google">
                  <img src={basket} alt="" />
                  <p className="basket_num">2</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeaderTop;
