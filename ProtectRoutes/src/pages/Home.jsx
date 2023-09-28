import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({handleAuthentication, isAuthenticated}) => {

  return (
    <div>
      This is Home Page!!!
      <div style={{ display: "flex", justifyContent: 'space-around' }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      {isAuthenticated ? (
        <button onClick={() => handleAuthentication(false)}>Logout</button>
      ) : (
        <button onClick={() => handleAuthentication(true)}>Login</button>
      )}
    </div>
  )
}

export default Home