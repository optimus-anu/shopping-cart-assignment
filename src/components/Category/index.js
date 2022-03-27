import React from "react";

import classes from "./Category.module.css";

const Category = ({ categoryData }) => {
  return (
    <div
      className={`${classes["category-container"]} ${
        categoryData.order % 2 === 0 ? classes["reverse"] : ""
      }`}
    >
      <div className={classes["img-container"]}>
        <img src={categoryData.imageUrl} alt={categoryData.name} />
      </div>
      <div className={classes["description-container"]}>
        <h3>{categoryData.name}</h3>
        <p>{categoryData.description}</p>
        <button>{`Explore ${categoryData.name}`}</button>
      </div>
    </div>
  );
};

export default Category;