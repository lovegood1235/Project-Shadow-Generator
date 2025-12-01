
import { useDispatch } from "react-redux"
import { updateShadowvalue } from "../../features/shadows"



export default function Shadowcolorpicker({inputData , shadowID}) {

   const disaptch = useDispatch()
  
  function handleInputs(e){
    disaptch(updateShadowvalue({
      inputNumber: inputData.inputNumber,
      value: e.target.value,
      shadowID
    })
  )

}

  return (
    <div className="mt-3">
      <p>{inputData.name}</p>
      <div className="flex mt-2">
        
        <input
          value={inputData.value}
          onChange={handleInputs}
          className="flex-grow border py-1 px-2 focus:outline-1 outline-gray-400"
          type="text" />

          <input
          value={inputData.value}
          onChange={handleInputs}
          className="cursor-pointer h-[40px]"
           type="color"/>
      </div>

    </div>
  )
}
 


