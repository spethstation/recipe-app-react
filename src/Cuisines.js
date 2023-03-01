import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

export default function Cuisines() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  async function getCuisine(name) {
    let apiKey = "ad878f3ec4f34864845165807faf5ef2";
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=15&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  }

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return <div className="Cuisines"></div>;
}
