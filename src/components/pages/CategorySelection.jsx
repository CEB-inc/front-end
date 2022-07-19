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
      <h2>Please select a New Post category:</h2>
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
