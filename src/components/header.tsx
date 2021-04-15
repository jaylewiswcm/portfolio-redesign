import * as React from "react"
import { Link } from "gatsby"

// Svgs
import square from "../images/icons/square.svg"
import triangle from "../images/icons/triangle.svg"
import hexagon from "../images/icons/hexagon.svg"


const Header: React.FC = () => {

  const isPartiallyActive = ({ isPartiallyCurrent }: any) => {
    return isPartiallyCurrent
      ? { className: 'active' }
      : { className: '' }
  }
  
  const PartialNavLink = (props: any) => (
    <Link getProps={isPartiallyActive} {...props}>
      {props.children}
    </Link>
  )
  
  return (
  <header className="app-header">
    <div className="center-wrapper">
      <span className="logo-wrapper">
        <h1 className='logo'>Logo</h1>  
      </span>  
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active" >Home</Link>
            <span className="link-icon" id="circle">
              {/* <img src={circle} alt="Circle icon" id="circle"/> */}
            </span>
          </li>
          <li>
            <Link to="/work" activeClassName="active">Work</Link>
            <span 
            className="link-icon">
                <img src={square} alt="Square icon" id="square"/>
            </span>
          </li>
          <li>
            <PartialNavLink to="/me">Me</PartialNavLink>
            <span className="link-icon">
                 <img src={triangle} alt="Triangle icon" id="triangle"/>
            </span>
          </li>
          <li id="contact-link">
            <PartialNavLink to="/"  activeClassName="active">Contact</PartialNavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
  }

export default Header
