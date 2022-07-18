import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

function CategorySelection() {
  const [categories, setCategories] = useState(["Movies", "Games", "Music"]);

  return (
    <>
      <h2>Select a category:</h2>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>
            <Link to={`/post/new/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategorySelection;
