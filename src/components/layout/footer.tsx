import React, { useState } from "react"
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import github from "../../images/socials/github.svg";
import githubHover from "../../images/socials/github-hover.svg";
import linkedin from "../../images/socials/linkedin.svg";
import linkedinHover from "../../images/socials/linkedin-hover.svg";

const Footer: React.FC = () => {
  const [githubHovering, setGithubHover] = useState(false);
  const [linkedinHovering, setLinkedinHover] = useState(false);

  return (
    <footer className="footer">
        <div className="footer-top">
          <div className="center-wrapper">
            <span className="credit">
              <h6>Jay Lewis</h6>
              <p>Designed and developed by me.</p>
            </span>
            <span className="social-links">
              <a 
                href="https://github.com/JayLewis1" 
                target="_blank"
                onMouseOver={() => setGithubHover(true)}
                onMouseOut={() => setGithubHover(false)}>
                { githubHovering ? 
                  <img src={githubHover} alt="Github"/>
                : <img src={github} alt="Github"/>
              }
              
              </a>
              <a 
                href="https://www.linkedin.com/in/jaylewis98/"
                target="_blank"
                onMouseOver={() => setLinkedinHover(true)}
                onMouseOut={() => setLinkedinHover(false)}>
              { linkedinHovering ? 
                    <img src={linkedinHover} alt="Linkedin"/>
                :  <img src={linkedin} alt="Linkedin"/>
              } 
              </a>
            </span>
          </div>
        </div>
        <div className="center-wrapper">
          <div className="footer-column">
            <h6>Navigation</h6>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/me" className="list-light">Me</Link></li>
              <li><Link to="/contact" className="list-light">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h6>Projects</h6>
            <ul>
              <li><Link to="/work/dirt">Dirt</Link></li>
              <li><Link to="/work/bouncingborders">BouncingBorders</Link></li>
              <li><Link to="/work/pitchers">Pitchers</Link></li>
              <li><Link to="/work/foliotune">FolioTune</Link></li>
            </ul>
          </div>
          <div className="footer-column" id="contact-column">
            <h6>Contact</h6>
            <ul>
              <li id="form-link"><AnchorLink to="/contact#form">Form</AnchorLink></li>
              <li className="p-li">
                <p>Phone Number</p>
              </li>
              <li><button>07592832146</button></li>
              <li className="p-li">
                <p>Email Address</p>
              </li>
              <li><button>Jr_lewis@outlook.com</button></li>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer;