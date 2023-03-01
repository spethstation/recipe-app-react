import { FaLeaf } from "react-icons/fa";
import React from "react";
import { NavLink } from "react-router-dom";

export default function CuisineLinks() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"/cuisine"}>
            <FaLeaf />
            <h4>Vegetarian</h4>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/cuisine"}>
            <FaLeaf />
            <h4>Vegetarian</h4>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
