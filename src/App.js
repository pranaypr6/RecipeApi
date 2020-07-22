import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

const App = () => {
  const APP_ID = 41245641;
  const APP_KEY = "4b9d5191e07284e29b0f54d2e6e1a50a";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    fetchAPI();
  }, [query]);

  const fetchAPI = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const getSearch = (e) => {
    e.preventDefault();
    if (search === "") {
      return alert("please enter your recipe");
    }
    setQuery(search);
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Paradise
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search for recipe"
              aria-label="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              className="btn btn-outline-warning my-2 my-sm-0"
              type="submit"
              onClick={getSearch}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="recipes">
        {recipes.map((recipe, index) => {
          return (
            <Recipe
              recipeName={recipe.recipe.label}
              imageSrc={recipe.recipe.image}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
