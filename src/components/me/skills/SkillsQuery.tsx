import React from 'react'
import { graphql, StaticQuery } from "gatsby"
// Components 
import SkillsList from "./SkillsList";

const Skills:React.FC = () => {


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
// const [skillData, _setSkillData ] = useState(data.allJson.edges);
  // return (
    // <div id="skills">
    //   <h3 className="sub-heading">Skills</h3>
    //   <div className="skills-table">
    //     <div className="row">
    //       <h5>{}</h5>
    //     </div>
    //   </div>
    // </div>
  // )
}

export default Skills;