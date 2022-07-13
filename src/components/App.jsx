import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './pages/Home'
import Greeting from './Greeting'
import Comment from './Comment'
import Card from './Card'
import CategorySelection from './pages/CategorySelection'
import NewEntry from './pages/NewEntry'

function App() {
  const [entries, setEntries] = useState([])

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home entries={entries} />} />
        <Route path='/category' element={<CategorySelection />} />
        <Route path='/entry/new/:category' element={<NewEntry entries={entries} setEntries={setEntries} />} />
        <Route path='*' element={<h4>Page not found</h4>} />
      </Routes>
    </BrowserRouter>
  )
}
      /* <Greeting firstName='UserName'/>
      <section className="comments">
        <h1 class=''>Blogs</h1>
        <Card>
          <Comment userName='Ethan' date='10/11/21'>
            <p>comment content</p>
          </Comment>
        </Card>
        <Card>
          <Comment userName='Corey' date='11/12/22'>
            <p>comment content</p>
          </Comment>
        </Card>
        <Card>
          <Comment userName='Brian' date='12/03/23'>
            <p>comment content</p>
          </Comment>
        </Card>
      </section> */

export default App
