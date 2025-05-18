import "../styles/Navigation.css"
import AuthService from "../services/auth.service"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function Navigation() {

  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser()
    if (user) {
      setCurrentUser(user)
    }
  }, [])

  return (
    <div className="main-nav">
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/public">Public</a>
        </li>

        {currentUser && currentUser.roles.includes("ROLE_ADMIN") && (
          <li>
            <a href="/private">Private</a>
          </li>
        )}
        {currentUser && (
          <li>
            <a href="/" onClick={AuthService.logout}>Logout</a>
          </li>
        )}
        { !currentUser && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}

        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
    <div className="username"><p>{currentUser && currentUser.username}</p></div>
    </div>
  )
}