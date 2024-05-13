import './CategoriesSection.css';

import atvs from '../../img/categories/atvs.png';
import all_terrain_vehicles from '../../img/categories/all_terrain_vehicles.png';
import boat from '../../img/categories/boat.png';
import jet_ski from '../../img/categories/jet_ski.png';
import rm_vector from '../../img/categories/rm_vector.png';
import engines from '../../img/categories/engines.png';

function CategoriesSection() {
  const categoriesInfo = [
    { categoryName: 'ATVs', categoryImg: atvs, categoryLink: 'atvs' },
    { categoryName: 'Jet skis', categoryImg: jet_ski, categoryLink: 'jet_ski' },
    { categoryName: 'Boats', categoryImg: boat, categoryLink: 'boat' },
    { categoryName: 'Snowmobiles', categoryImg: rm_vector, categoryLink: 'rm_vector' },
    { categoryName: 'All-terrain vehicles', categoryImg: all_terrain_vehicles, categoryLink: 'all_terrain_vehicles' },
    { categoryName: 'Engines', categoryImg: engines, categoryLink: 'engines' },
  ];

  return (
    <section className="categories_section">
      <div className="container">
        <div className="categories_section_inner">
          {categoriesInfo.map((ategoryItem, index) => (
            <a className="categories_section-item" href={ategoryItem.categoryLink} key={index}>
              <div className="categories_section-item-info">
                <h4 className="categories_section-item-title">{ategoryItem.categoryName}</h4>
                <p className="categories_section-item-text">{'Learn More >'}</p>
              </div>
              <div className="categories_section-item-img">
                <img className="" src={ategoryItem.categoryImg} alt={ategoryItem.title} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
export default CategoriesSection;
