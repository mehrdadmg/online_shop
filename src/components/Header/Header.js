import HeaderTop from '../HeaderTop/HeaderTop';
import HeaderBottom from '../HeaderBottom/HeaderBottom';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}
export default Header;
