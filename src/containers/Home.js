import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Hello, 🗺.</h1>
    <p>You can go to the <Link to='/about'>About</Link> page</p>
  </div>
)

export default Home
