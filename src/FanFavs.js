import React, { useState, useEffect } from "react";
import "./FanFavs.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function FanFavs() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  async function getRandom() {
    let apiKey = "ad878f3ec4f34864845165807faf5ef2";
    let apiUrl = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8`
    );
    let data = await apiUrl.json();
    setRandom(data.recipes);
    console.log(data);
  }

  return (
    <div>
      <Splide>
        {random.map((recipe) => {
          return (
            <SplideSlide>
              <div key={recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
