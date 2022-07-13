import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function NewEntry({ entries, setEntries }) {
  
  const { category } = useParams()
  const [entry, setEntry] = useState('')

  function submit(e) {
    e.preventDefault()
    const newEntry = { category, entry }
    setEntries([...entries, newEntry])
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