import Nav from './Nav'
import Home from './pages/Home'
import Greeting from './Greeting'

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Greeting firstName='UserName'/>
    </>
  )
}

export default App
