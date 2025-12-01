import { useSelector } from "react-redux"
import getBoxShadowValue from "../../../utils/getBoxShadowValue"
import { useEffect } from "react"



export default function ModalResult({closemodal}) {
  const shadowValue = useSelector(state => state.shadows)

  useEffect(() => {
      document.body.style.overflowY = "hidden"

      return () => document.body.style.overflowY = "auto"

  } , [])

  let running = false

  console.log(!running);
  

  function handleCopy(e) {
    if(!running){
      running = true
      e.target.textContent = "copied !"

      setTimeout(() => {
        e.target.textContent = "Copy"
         running = false
      } , 1250)
    }

     navigator.clipboard.writeText(`box-shadows : ${getBoxShadowValue(shadowValue)}`)
  }

  return (
    <div className='fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75'>
      <div
      onClick={e => e.stopPropagation()}
      className="max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]"
      >
        <div className="flex items-end mb-5">
            <p className="font-semibold mr-5">Here is your code </p>
            <button

              onClick={handleCopy}
                className="cursor-pointer ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded"
            >
                copy

            </button>
            <button
                onClick={closemodal}
                className="cursor-pointer text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded"
            >
                close

            </button>
        </div>

        <p className="rounde bg-gray-100 p-5">
            <span className="font-semibold">
                box-shadow : <br />
            </span>
            <span>
                {getBoxShadowValue(shadowValue)}
            </span>
        </p>

      </div>
    </div>
  )
}
