import React, { useEffect } from 'react'
import ReactDom from "react-dom";
import Child from "./Child";

let node: any = null;

 const CvModal = () => {
  useEffect(() => {
    node = document.createElement("div");
    document.body.appendChild(node);
    ReactDom.render(<Child />, node)
    return () => {
      ReactDom.unmountComponentAtNode(node);
      node.parentNode && node.parentNode.removeChild(node);
    }
  },[node]);

  return <script />
}

export default CvModal;