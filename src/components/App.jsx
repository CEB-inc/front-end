import Nav from './Nav'
import Home from './pages/Home'
import Greeting from './Greeting'
import Comment from './Comment'
import Card from './Card'

function App() {

  const message = "This is just a test."

  const styles = {
    color: 'red',
    fontSize: '30px'
  }

  return (
    <>
      <Nav />
      <Home />
      <Greeting firstName='UserName'/>
        <div style={styles}>
          {message}
        </div>
      <section className="comments">
        <h1 class='title is-4'>Blogs</h1>
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
      </section>
    </>
  )
}

export default App
