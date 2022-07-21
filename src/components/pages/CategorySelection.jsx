import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CategorySelection() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function getCategories() {
      const res = await fetch('http://localhost:4000/api/v1/categories')
      setCategories(await res.json())
    }
    getCategories()
  }, [])

  return (
    <>
      <div>
        <h3 className="mt-5 mb-0 d-flex justify-content-center">Choose a category</h3>
        <ul>
          {categories.map((cat, index) => (
            <li key={index} className="LinkItem d-flex justify-content-center">
              <Link to={`/post/new/${cat}`} className="LinkItem text-body">
                <p className="CatText text-body">{cat}</p>
              </Link>
            </li>
        ))}
        </ul>
      </div>
    </>
  );
}

export default CategorySelection;
