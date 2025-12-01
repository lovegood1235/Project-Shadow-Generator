import { useSelector } from "react-redux";
import getShadowValue from "../../utils/getBoxShadowValue"
import Modalbtn from "./modal/Modalbtn"



export default function Visualisation() {
  const shadowValue = useSelector(state => state.shadows)
  const boxproperties = useSelector(state => state.boxpropertie)

  console.log(getShadowValue(shadowValue));
  return (
    <div className="flex flex-col p-5 ml-10 lg:ml-20">
        <Modalbtn/>
      <div 
      className="w-[240px] h-[250px] bg-white rounded-xl mb-2 lg:mb-40"
      style={{
        boxShadow:`${getShadowValue(shadowValue).slice(0, -1)}`,
        borderRadius: `${boxproperties[0].value}px`,
        height: `${boxproperties[1].value}px`,
        width: `${boxproperties[2].value}px`,
        backgroundColor:`${boxproperties[3].value}`
      }}
      >



      </div>
    </div>
  )
}
