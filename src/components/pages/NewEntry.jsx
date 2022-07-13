import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function NewEntry({ entries, setEntries }) {
  
  const { category } = useParams()
  const [entry, setEntry] = useState('')

  return (
    <>
    <h2>New Entry for {category} </h2>
    <form className='container-sm' onSubmit={e => e.preventDefault()}>
      <div>
        <textarea value={entry} onChange={e => setEntry(e.target.value)} rows='10' className='form-control'></textarea>
      </div>
      <button className='btn btn-primary mt-3'>Post</button>
    </form>
    </>
  )
}

export default NewEntry