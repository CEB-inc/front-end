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
      <div >
        <ul className="catList">
          {categories.map((cat, index) => (
            <li key={index} className="catListItem">
              <Link to={`/post/new/${cat}`}>{cat}</Link>
            </li>
        ))}
        </ul>
      </div>
    </>
  );
}

export default CategorySelection;
