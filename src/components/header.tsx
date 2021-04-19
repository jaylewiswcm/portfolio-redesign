import React, { useState } from "react"
import { Link } from "gatsby"

// Svgs
import square from "../images/icons/square.svg"
import triangle from "../images/icons/triangle.svg"
import burger from "../images/burger/burger.svg";


const Header: React.FC = () => {
  const [menuToggle, setMenuToggle] = useState(false);
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
  
  const toggleMenu = () => {
    if(menuToggle) {
      setMenuToggle(false)
    } else {
      setMenuToggle(true)
    }
  }

  return (
  <header className="app-header">
    <div className="center-wrapper">
      <span className="logo-wrapper">
        <Link to="/" className='logo'>Jay Lewis</Link>  
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
            <PartialNavLink to="/contact"  activeClassName="active">Contact</PartialNavLink>
          </li>
        </ul>
      </nav>
      <button onClick={() => toggleMenu()} className="burger-menu-icon">
        <img src={burger} alt="Menu"/>
      </button>

    </div>
    <ul className="mobile-menu" style={menuToggle === true ? { minHeight: "220px" } : {minHeight: "0px"}}>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/work" >Work</Link></li>
        <li><Link to="/me" >Me</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
      </ul>
  </header>
  )
  }

export default Header
