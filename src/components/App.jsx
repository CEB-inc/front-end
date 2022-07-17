import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Nav from './Nav'
import Home from './pages/Home'
import Greeting from './Greeting'
import Comment from './Comment'
import Card from './Card'
import CategorySelection from './pages/CategorySelection'
import NewEntry from './pages/NewEntry'
import ShowEntry from './pages/ShowEntry'


function App() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
      async function getEntries() {
      const res = await fetch('http://localhost:4000/api/v1/posts')
      setEntries(await res.json())
    }
    getEntries()
  }, [])

  function ShowEntryWrapper() {
    const { id } = useParams()
    return <ShowEntry entry={entries.find((entry) => entry._id == id)} />
  }
  

  // higher order component
  function ShowEntryWrapper() {
    const { id } = useParams()
    return <ShowEntry entry={entries[id]} />
  }

  async function addEntry(category, media, title, body, score) {
    const newEntry = { category, media, title, body, score }
    // second param of fetch is configuration. this is a fetch to post our new entry to our API
    const res = await fetch("http://localhost:4000/api/v1/posts", {
      method: 'post',
      headers: {
        // telling the server we expect to get json back
        'Accept': 'application/json',
        // outgoing header. what we're sending is going to be json
        'Content-Type': 'application/json'
      },
      // providing the object that is being uploaded. we need to stringify it.
      body: JSON.stringify(newEntry)
    })
    const returnedEntry = await res.json()
    setPosts([...entries, returnedEntry])
    return returnedEntry._id
  }

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home entries={entries} />} />
        <Route path='/category' element={<CategorySelection />} />
        <Route path='/entry/:id' element={<ShowEntryWrapper />} />
        <Route path='/entry/new/:category' element={<NewEntry addEntry={addEntry} />} />
        <Route path='*' element={<h4>Page not found</h4>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
