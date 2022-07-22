import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CategorySelection() {
  const [categories, setCategories] = useState([])
  const api =
    import.meta.env.VITE_API_ENDPOINT || "http://localhost:4000/api/v1";

  useEffect(() => {
    async function getCategories() {
      const res = await fetch(`${api}/categories`)
      setCategories(await res.json())
    }
    getCategories()
  }, [])

  return (
    <>
      <div>
        <h3 className="mt-4 mb-0 d-flex justify-content-center">Choose a category</h3>
        <ul>
          {categories.map((cat, index) => (
            <li key={index} className="mt-0 d-flex justify-content-center">
              <Link to={`/post/new/${cat}`} className="CatText">{cat}</Link>
            </li>
        ))}
        </ul>
      </div>
    </>
  );
}

export default CategorySelection;
