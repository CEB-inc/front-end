import { useNavigate } from 'react-router-dom'

function ShowPost({ post, setPosts }) {
  const nav = useNavigate()

  async function deletePost() {
    await fetch(`http://localhost:4000/api/v1/posts/${post._id}`, {
      method: "DELETE",
    })
    // updating the array for 
    const updated = await fetch("http://localhost:4000/api/v1/posts")
    setPosts(await updated.json())
    nav('/')
  }

  return (
    <>
      <h5 className="title is-1">media cat:{post.media}</h5>
      <h5 className="title is-1">title: {post.title}</h5>
      <h5 className="title is-1">body: {post.body}</h5>
      { post.score === !null ? <h5 className="title is-1">score: {post.score}</h5> : '' }
      <p>Posted in {post.category}</p>
      <button onClick={deletePost}>delete</button>
    </>
  )
}

export default ShowPost