import React, { useState, useEffect } from "react";
import "./index.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Favs() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  async function getRandom() {
    const checkStorage = localStorage.getItem("random");

    if (checkStorage) {
      setRandom(JSON.parse(checkStorage));
    } else {
      let apiKey = "ad878f3ec4f34864845165807faf5ef2";
      let apiUrl = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=15`
      );
      let data = await apiUrl.json();
      localStorage.setItem("random", JSON.stringify(data.recipes));
      setRandom(data.recipes);
      console.log(data);
    }
  }

  return (
    <div>
      <Splide
        options={{
          perPage: 5,
          perMove: 5,
          gap: "1em",
          start: 0,
          arrows: false,
          drag: "free",
          rewind: true,
          height: "21em",
          pagination: "splide__pagination your-class-pagination",
        }}
      >
        {random.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
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
