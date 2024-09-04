import React from "react";

const MenuSliderCategories = ({ category, changeCategory }) => {
  return (
    <li>
      <button onClick={() => changeCategory(category.id)}>
        {category.name}
      </button>
    </li>
  );
};

export default MenuSliderCategories;
