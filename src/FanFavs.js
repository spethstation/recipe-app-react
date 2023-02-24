import React, { useState, useEffect } from "react";

export default function FanFavs() {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  async function getRandom() {
    let apiKey = "ad878f3ec4f34864845165807faf5ef2";
    let apiUrl = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=5`
    );
    let data = await apiUrl.json();
    setRandom(data.recipes);
    console.log(data);
  }

  return (
    <div>
      {random.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
}
