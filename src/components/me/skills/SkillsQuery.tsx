import React from 'react'
import { graphql, StaticQuery } from "gatsby"
// Components 
import SkillsList from "./SkillsList";

const SkillsQuery:React.FC = () => {


return (
    <StaticQuery query={
    graphql`
    query SkillsQuery{
      allSkillsJson {
          edges {
            node {
            type
            skills
            }
          }
        }
      }` 
    }
    render={data => (
      <div id="skills" className="bio-container">
      <h3 className="sub-heading">Skills</h3>
      <ul className="skills-table">
        <SkillsList data={data}/>
      </ul>
    </div>
    )}/>
)
}

export default SkillsQuery;