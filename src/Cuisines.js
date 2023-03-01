import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

export default function Cuisines() {
  async function getCuisine(name) {
    let apiKey = "ad878f3ec4f34864845165807faf5ef2";
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=15&cuisine=${name}`
    );
  }

  return <div className="Cuisines"></div>;
}
