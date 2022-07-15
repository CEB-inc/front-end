import { useState } from 'react'
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
  const [entries, setEntries] = useState([
    { category: 'Movies', entry: 'Jurassic World was quite bad' },
    { category: 'Movies', entry: 'Moonfall was far-fetched but still an entertaining film'},
    { category: 'Games', entry: 'GTA San Andreas is still the GOAT'},
    { category: 'Music', entry: 'The new Khruangbin album is LIT!!!'}
  ])
  

  // higher order component
  function ShowEntryWrapper() {
    const { id } = useParams()
    return <ShowEntry entry={entries[id]} />
  }

  function addEntry(category, entry) {
    const newEntry = { category, entry }
    const id = entries.length
    setEntries([...entries, newEntry])
    return id
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
