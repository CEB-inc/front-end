import React from "react";
import { Link } from 'react-router-dom'

function Home({ entries }) {
  return (
    <ul>
      {entries.map((entry, index) => <li><Link to={`/entry/${index}`}>{entry.entry}</Link></li>)}
    </ul>
  )
}

export default Home