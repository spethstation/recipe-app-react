import React from "react";
import { Route, Routes } from "react-router-dom";

export default function RecipePage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}
