import React, {useState} from 'react'
import CloseCross from "../../../images/icons/close-cross.svg";

 const CvChild = () => {
   const [toggleModal, setModal] = useState(true)

   const closeModal = () => {
     if(toggleModal) {
      setModal(false)
     } else {
      setModal(true)
     }
   }

  return (
    <div 
      className="cv-modal"
      style={toggleModal ? {display: "block"} : {display: "none"}} 
    >
      <p>Looking for my cv? <a href={`https://www.jaylewis.me/downloadables/Jay_Lewis_CV.pdf`} download>Download it here</a></p>
      <button className="close-modal-btn" onClick={() => closeModal()}>
        <img src={CloseCross} alt="Close modal"/>
      </button>
    </div>
  )
}

export default CvChild;