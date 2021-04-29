import React, {Fragment} from 'react'
import square from "../../images/icons/square.svg";
import triangle from "../../images/icons/triangle.svg";
import circle from "../../images/icons/circle.svg";
// Redux
import { connect, ConnectedProps } from "react-redux";
import { InitialState } from "../../state/store";

const mapState = (state: InitialState) => ({
  typeOfWork : state.works.typeOfWork
})

const mapDispatch = {
  addOrRemoveTypeOfWork : (workTypes: Array<string>) => ({type: "CHOOSE_WORKS_TYPE", payload: workTypes})
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

 const WorksNav = ({ typeOfWork, addOrRemoveTypeOfWork }:Props) => {
   // Function that changes the type of works
  const changeWorksType = (s: string) => {  
    // Create new array and iterate typeOfWork (array from redux state)
    let newTypes = [...typeOfWork];
    // Initialise a boolean var to check whether the type is in the list
    let isTypeSelected = false;
    let index: number = -1;
    // Loop through the new Array
    for(let x = 0;x< newTypes.length;x++ ) {
      // Check if the selected string is in the array
      if(newTypes[x] === s) {
        // Set boolean to true and find index of the string
        isTypeSelected = true;
        index = newTypes.indexOf(newTypes[x]);
      }
    }
    // If string is in the array then splice out of array
    if(isTypeSelected === true) {
      newTypes.splice(index, 1);
    } else {
      // If not in array then push to the array
      newTypes.push(s);
    }
    // Pass our new array to redux func
    addOrRemoveTypeOfWork(newTypes)
  }

  return (
    <div className='works-navigation' id="my-works">
      <h3 className="sub-heading">Works</h3>
      <ul className="btn-list">
        <li>
          <button onClick={() => changeWorksType("freelance")}>Freelance</button>
          <span className="shape-wrapper">
            { 
              typeOfWork.map((type:string, index:number) => 
                <Fragment key={index}>
                  {type === "freelance" &&  
                      <img src={square} alt="Square" className="smaller-shape"/>    
                  }
                </Fragment>
              )
            }
          </span>
        </li>
        <li>
          <button onClick={() => changeWorksType("personal")}>Personal</button>
          <span className="shape-wrapper">
            { 
              typeOfWork.map((type:string, index: number) => 
                <Fragment key={index}>
                  {type === "personal" && 
                      <img src={triangle} alt="Triangle" key="triangle"/>
                  }
                </Fragment>
              )
            }
          </span>
        </li>
        {/* <li>
          <button onClick={() => changeWorksType("designs")}>Designs</button>
          <span className="shape-wrapper">
          { 
            typeOfWork.map((type:string, index: number) => 
              <Fragment key={index}>
                {type === "designs" &&      
                    <img src={circle} alt="Circle"className="smaller-shape" key="circle"/>
                }
              </Fragment>
            )
          }
            </span>
        </li> */}
      </ul>
    </div>
  )
}

export default connector(WorksNav);