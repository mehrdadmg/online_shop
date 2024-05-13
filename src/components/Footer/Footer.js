import './Footer.css';
import instagram from '../../img/instagram.svg';
import vk from '../../img/vk.svg';
import facebook from '../../img/facebook.svg';
import youtube from '../../img/youtube.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_top">
          <div className="footer_top_inner">
            <div className="footer_top-column footer_top-column_news">
              <h6 className="footer_top-title">Подпишитесь на нашу рассылку и узнавайте о акциях быстрее</h6>
              <form className="footer_top-form">
                <input className="footer_top-form_input" type="text" placeholder="Введите ваш e-mail" />
                <button className="footer_top-form_btn" type="submit">
                  SEND
                </button>
              </form>
            </div>
            <div className="footer_top-column">
              <h6 className="footer_top-title">Информация</h6>
              <ul className="footer_top-list">
                <li className="footer_top-item">
                  <a href="google.com">О компании</a>
                </li>
                <li className="footer_top-item">
                  <a href="google.com">Контакты</a>
                </li>
                <li className="footer_top-item">
                  <a href="google.com">Акции</a>
                </li>
                <li className="footer_top-item">
                  <a href="google.com">Магазины</a>
                </li>
              </ul>
            </div>
            <div className="footer_top-column">
              <h6 className="footer_top-title">Интернет-магазин</h6>
              <ul className="footer_top-list">
                <li className="footer_top-item">
                  <a href="google.com">Доставка и самовывоз</a>
                </li>
                <li className="footer_top-item">
                  <a href="google.com">Оплата</a>
                </li>
                <li className="footer_top-item">
                  <a href="google.com">Возврат-обмен</a>
                </li>
                <li className="footer_top-item">
                  <a href="google.com">Новости</a>
                </li>
              </ul>
            </div>
            <div className="footer_top-column footer_top-column_social">
              <ul className="footer_top-social_list">
                <li className="footer_top-social_item">
                  <a href="google.com">
                    <img src={instagram} className="footer_top-social_icon" alt="instagram_icon" />
                  </a>
                </li>
                <li className="footer_top-social_item">
                  <a href="google.com">
                    <img src={vk} className="footer_top-social_icon" alt="vk_icon" />
                  </a>
                </li>
                <li className="footer_top-social_item">
                  <a href="google.com">
                    <img src={facebook} className="footer_top-social_conm" alt="facebook_icon" />
                  </a>
                </li>
                <li className="footer_top-social_item">
                  <a href="google.com">
                    <img src={youtube} className="footer_top-social_conm" alt="youtube_icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <a className="footer_bottom_link" href="google.com">
            Договор оферты
          </a>
          <a className="footer_bottom_link" href="google.com">
            Политика обработки персональных данных
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
