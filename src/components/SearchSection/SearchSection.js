import { useState } from 'react';
import './SearchSection.css';

function SearchSection() {
  const [activeTab, setActiveTab] = useState(0);
  const search_tab_info = [
    {
      id: 0,
      titel: 'Search by number',
      placeholder: 'Enter number',
      active_tab: true,
    },
    {
      id: 1,
      titel: 'Search by brand',
      placeholder: 'Enter brand',
      active_tab: false,
    },
    {
      id: 2,
      titel: 'Search by product name',
      placeholder: 'Enter product name',
      active_tab: false,
    },
  ];

  function TabContent({ formData, activeTab }) {
    return (
      <form className="search_form-item">
        <input className="search_form-input" type="text" placeholder={formData[activeTab].placeholder} />
        <button className="search_btn" type="submit">
          Search
        </button>
      </form>
    );
  }

  return (
    <section className="search_section">
      <div className="container">
        <div className="search_section_inner">
          <div className="search_tabs">
            {search_tab_info.map((tab_item, index) => (
              <button
                className={activeTab === index ? 'search_tabs-item search_tabs-item--active' : 'search_tabs-item '}
                href="search"
                onClick={() => setActiveTab(index)}
                key={index}
              >
                {tab_item.titel}
              </button>
            ))}
          </div>
          <div className="search_forms">
            <div className="search_tabs-form-item">
              <TabContent activeTab={activeTab} formData={search_tab_info} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SearchSection;
