import React from "react";
import style from "../components/recipe.module.css";

const Recipe = ({ recipeName, imageSrc }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{recipeName}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Order Now
        </a>
      </div>
    </div>
  );
};

export default Recipe;
