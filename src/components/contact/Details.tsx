import React, { useEffect, useState } from 'react'
// Components 
import Copied from "./Copied";
// SVGs
import copy from "../../images/icons/copy.svg";
import copied from "../../images/icons/copied.svg";


const Details:React.FC = () => {
  const [copiedDetail, setDetailToCopy ] = useState("")

  useEffect(() => {
      if(copiedDetail !== "") {
        const interval = setInterval(() => {
          setDetailToCopy("")
        }, 3000);
        return () => clearInterval(interval);
      }
  }, [copiedDetail]) 

  const copyDetail = (detail: string) => {
      navigator.clipboard.writeText(detail)
      setDetailToCopy(detail);
  }

  return (
    <div className="details">
      <div className={copiedDetail === "07592832146" ? "detail detail-copied" : "detail"}>
        <span>
          <p className="detail-heading">Call me on:</p>
          <p className="detail-p">07592832146</p>
        </span>
        <button 
          className="copy-btn" 
          onClick={() => copyDetail("07592832146")} disabled={copiedDetail === "07592832146"}>
          { copiedDetail === "07592832146" ? 
            <img src={copied} alt="Copied"/>
            : <img src={copy} alt="Copy"/>
          }
        </button>
      </div>
       {
         copiedDetail === "07592832146" &&  <Copied />
       }
      <div className={copiedDetail === "Jr_lewis@outlook.com" ? "detail detail-copied" : "detail"}>
        <span>
          <p className="detail-heading">Email me:</p>
          <p className="detail-p">Jr_lewis@outlook.com</p>
        </span>
        <button 
          className="copy-btn" 
          onClick={() => copyDetail("Jr_lewis@outlook.com")} 
          disabled={copiedDetail === "Jr_lewis@outlook.com"}>
        { copiedDetail === "Jr_lewis@outlook.com" ? 
            <img src={copied} alt="Copied"/>
            : <img src={copy} alt="Copy"/>
          }
        </button>
      </div>
      {
         copiedDetail === "Jr_lewis@outlook.com" &&  <Copied />
       }
    </div>
  )
}

export default Details;