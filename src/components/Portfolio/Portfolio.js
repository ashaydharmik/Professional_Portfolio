import React, { useState, useEffect } from "react";
import "./portfolio.scss";
import { projectData } from "../../Data/projectData";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import seperator from "../assets/seperator.png"
const Portfolio = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(projectData);

  let filters = ["Web App", "Dynamic WebPage", "Static WebPage", "Figma"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {

    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = projectData.filter(
          (item) => item.category === selectedCategory
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...projectData]);
    }
  };

  return (
    <>
     <div id="seperator">

<img src={seperator} alt="" width="20px" height="5px"/>
</div>
      <div className="port-container">
        <div className="heading">
          <h1>Portfolio</h1>
        </div>
        <div className="projects">
          <div className="category-container">
            {filters.map((category, id) => (
              <button
                onClick={() => handleFilterButtonClick(category)}
                className={`button ${
                  selectedFilters?.includes(category) ? "active" : ""
                }`}
                key={`filters-${id}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="items-container">
            {filteredItems.map((item, id) => (
              <div key={`items-${id}`} className="item">
                <div className="img-container">
                  <img src={item.image} alt="" width="30px" height="28px" />
                </div>
                <div className="pro-name">
                  <p>{item.name} </p>
                  <p>
                    <a href={item.github} target="_blank">
                      <FaGithub />
                    </a>
                    &ensp;
                    <a href={item.host} target="_blank">
                      <FaGlobe />
                    </a>
                  </p>
                </div>
                <div className="category">
                  <p>{item.category}</p>
                </div>
                <div className="desc">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
