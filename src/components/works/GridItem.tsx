import React from 'react'
import { Link } from "gatsby";

interface ComponentProps {
  name: string
  description: string
  imgSrc : string
  type : string
}

const GridItem = ({name, imgSrc, description }:ComponentProps) => {

  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   if(folder !== undefined) {
  //     setLoading(false);
  //   } else {
  //     setLoading(true);
  //   }
  //   console.log(folder)
  // },[folder])

  // if(loading) {
  //   return  (
  //   <div className="grid-item">
  //     <Link to="/">
  //     ...Loading
  //     </Link>
  //   </div>
  //   )
  // }

  return (
      <div className="grid-item">
      <Link to={`/${name}`}>
        {/* <StaticImage src={`${imgSrc}`} alt="Works Item"/>
        <Img fluid={`${imgSrc}`} />
             <Img className="home-logo" fluid={data.file.childImageSharp.fluid} alt="Pitchers logo" /> */}
        <img src={`../../images/${imgSrc}`} alt="Works Image" />
      </Link>
      </div>
  )
}

export default GridItem;