import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function NewPost({ addPost }) {
  const { category } = useParams()
  const [media, setMedia] = useState("")
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [score, setScore] = useState("")
  // useNavigate lets us force the user to a path
  const nav = useNavigate()

  // What happens on submit. the press of the button.
  async function submit(e) {
    e.preventDefault()
    const id = await addPost(category, media, title, body, score)
    nav(`/post/${id}`)
  }

  return (
    <>
      <h2 className="title is-2 my-4">New Post in {category}</h2>
      <form className="container" onSubmit={submit}>
        <div className="control mb-3">
          <div className="select">
            <select value={media} onChange={e => setMedia(e.target.value)}>
              {/* {media.map(p => <option>{ p }</option>)} */}
              <option>Select Media</option>
              <option>Music</option>
              <option>Games</option>
              <option>Movies</option>
            </select>
          </div>
        </div>
        <div>
          <input value={title} onChange={ e => setTitle(e.target.value) } className="input mb-3" placeholder="Title: "></input>
        </div>
        <div>
          <textarea value={body} onChange={ e => setBody(e.target.value) } className="textarea mb-3" placeholder="What are you about to babble about!?"></textarea>
        </div>
        { category === "Review" ? <div><input value={score} onChange={ e => setScore(e.target.value) } className="input mb-3" placeholder="Score: "></input></div> : "" }
        <button className="button is-info is-outlined">Create Post</button>
      </form>
    </>
  )
}

export default NewPost