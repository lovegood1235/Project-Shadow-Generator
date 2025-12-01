import { useEffect, useState } from "react"
import Shadowcolorpicker from "./Shadowcolorpicker"
import Shadowrange from "./Shadowrange"
import chevron from "../../assets/chevron.svg"

import ShadowCheckBox from "./ShadowCheckBox"
import {removeShadow} from "../../features/shadows"
import { useDispatch } from "react-redux"




export default function Shadow({panelNumber , shadow}) {
    const [toogleshadow , settoogleshadow] = useState(false)

    console.log(shadow);
    

    const disaptch = useDispatch()

    useEffect(() =>{
      
        if(panelNumber === 1){
          settoogleshadow(true)
        }

    } , [])
      
    // console.log(shadow);
    
      const shadowinputs = shadow.inputs.map((input, index) => {
    
        if(input.type === "range"){
          return <Shadowrange
          key={index} 
          inputData={shadow.inputs[index]}
          shadowID = {shadow.id}
          />
        }
    
        else if(input.type === "color"){
          return <Shadowcolorpicker  
          key={index} 
          inputData={shadow.inputs[index]}
          shadowID = {shadow.id}
          />
        }

      })
  return (
    <li
    className="bg-gray-50 border-b border-b-gray-300"
    >
        <button
        className="w-full flex justify-between items-center hover:bg-gray-200 px-6 py-4 cursor-pointer"
        onClick={() => settoogleshadow(!toogleshadow)}
        >
            <span>
                Shadow {panelNumber}
            </span>
            <img
            style={{
                transform: `${toogleshadow ? "rotate(90deg)" : "rotate(0deg)"}`
            }}
            className="font-bold w-5"
            src={chevron} alt="icon button"/>
        </button>
        {toogleshadow && <>
        
            <div className="flex items-end px-6 py-4">
                <ShadowCheckBox name={"active"} shadowID={shadow.id}/>
                <ShadowCheckBox name={"inset"} shadowID={shadow.id}/>
                <button

                onClick={() => disaptch(removeShadow(shadow.id))}
                className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded cursor-pointer"
            >

                remove
            </button>
            </div>
            <div className="px-6 py-4">
                {shadowinputs}
            </div>
            
        
        </>}
    </li>
  )
}
