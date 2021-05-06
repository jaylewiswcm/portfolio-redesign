import React, { useState } from "react"
import { Link } from "gatsby"

// Svgs
import square from "../../images/icons/square.svg"
import triangle from "../../images/icons/triangle.svg"
import burger from "../../images/burger/burger.svg";


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
        <Link to="/" className='logo'>Jay <span className="blue">Lewis</span></Link>  
      </span>  
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active">Home
            <div className="link-icon" id="circle"></div>
            </Link>
          </li>
          <li>
            <Link 
              to="/work" 
              activeClassName="active"  
              partiallyActive={true}> Work
            <div 
            className="link-icon"></div>
            </Link>
          </li>
          <li>
            <Link 
              to="/me" 
              activeClassName="active" 
              partiallyActive={true}> Me
            <div className="link-icon"></div>
            </Link>
          </li>
          <li id="contact-link">
            <Link 
              to="/contact" 
              activeClassName="active" 
              partiallyActive={true}> Contact
            <div className="link-icon"></div></Link>
          </li>
        </ul>
      </nav>
      <button onClick={() => toggleMenu()} className="burger-menu-icon">
        <img src={burger} alt="Menu"/>
      </button>

    </div>
    <ul className="mobile-menu" style={menuToggle === true ? { minHeight: "220px" } : {minHeight: "0px"}}>
        <li><Link to="/" activeClassName="active" >Home</Link></li>
        <li><Link to="/work"activeClassName="active" partiallyActive={true} >Work</Link></li>
        <li><Link to="/me" activeClassName="active" partiallyActive={true}>Me</Link></li>
        <li><Link to="/contact" activeClassName="active" partiallyActive={true} >Contact</Link></li>
      </ul>
  </header>
  )
  }

export default Header
