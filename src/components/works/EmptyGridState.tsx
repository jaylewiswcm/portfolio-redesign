import React from 'react'
import { Link } from "gatsby";

const EmptyGridState:React.FC = () => {

  return (
    <div className="grid-item">
      <div className="work-empty-state">
        <h4>Your work could be here</h4>
        <p>If you've got a project in mind, get in touch and I can give a helping hand.</p>
        <Link to="/contact">Get in contact</Link>
      </div>
    </div>
  )
}

export default EmptyGridState;