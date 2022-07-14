import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function NewEntry({ addEntry }) {
  
  const { category } = useParams()
  const [entry, setEntry] = useState('')
  const nav = useNavigate()

  function submit(e) {
    e.preventDefault()
    const id = addEntry(category, entry)
    nav(`/entry/${id}`)
  }

  return (
    <>
    <h2>New Entry for {category} </h2>
    <form className='container-sm' onSubmit={submit}>
      <div>
        <textarea value={entry} onChange={e => setEntry(e.target.value)} rows='10' className='form-control'></textarea>
      </div>
      <button className='btn btn-primary mt-3'>Post</button>
    </form>
    </>
  )
}

export default NewEntry