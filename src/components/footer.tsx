import * as React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <div className="footer-top">
          <div className="center-wrapper">
            <span className="credit">
              <h6>Jay Lewis</h6>
              <p>Designed and developed by me.</p>
            </span>
            <span className="social-links">
              <a href="/"></a>
              <a href="/"></a>
            </span>
          </div>
        </div>
        <div className="center-wrapper">
          <div className="footer-column">
            <h6>Portfolio</h6>
            <ul>
              <li><a href="/">Freelance</a></li>
              <li><a href="/">Personal Projects</a></li>
              <li><a href="/" className="list-light">By Technology</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h6>Me</h6>
            <ul>
              <li><a href="/">About</a></li>
              <li><a href="/">Interests</a></li>
              <li><a href="/">Qualifications</a></li>
              <li><a href="/">Experience</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h6>Blog</h6>
            <ul>
              <li><a href="/">Posts</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h6>Contact</h6>
            <ul>
              <li><a href="/">Form</a></li>
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