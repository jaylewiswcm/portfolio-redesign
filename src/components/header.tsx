import * as React from "react"
import { Link } from "gatsby"



interface ComponentProps  {
  siteTitle : string
}

const Header = ({siteTitle} : ComponentProps) => (
  <header className="app-header">
    <div className="center-wrapper">
      <span className="logo-wrapper">
        <h1 className='logo'>Logo</h1>  
      </span>  
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <span id="circle" className="link-icon"></span>
          </li>
          <li>
            <Link to="/">Work</Link>
            <span id="square"
            className="link-icon"></span>
          </li>
          <li>
            <Link to="/">Me</Link>
            <span id="triangle"
            className="link-icon"></span>
          </li>
          <li>
            <Link to="/">Blog</Link>
            <span id="hexagon"
            className="link-icon"></span>
          </li>
          <li id="contact-link">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
