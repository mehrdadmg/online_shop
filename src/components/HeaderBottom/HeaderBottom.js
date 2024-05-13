import './HeaderBottom.css';

function HeaderBottom() {
  const menuCategoriesList = [
    'Квадроциклы',
    'Катера',
    'Гидроциклы',
    'Лодки',
    'Вездеходы',
    'Снегоходы',
    'Двигатели',
    'Запчасти',
  ];
  return (
    <div className="header_bottom">
      <div className="container">
        <ul className="menu_categories">
          {menuCategoriesList.map((menuCategoriesItem, index) => (
            <li className="menu_categories_item" key={index}>
              <a className="menu_categories_link" href="google">
                {menuCategoriesItem}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default HeaderBottom;
