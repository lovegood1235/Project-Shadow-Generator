import { useState } from "react"
import { createPortal } from "react-dom"
import ModalResult from "./ModalResult"

export default function Modalbtn() {
  const [showmodal , setShowmodal] = useState(false)

  function show(){
    setShowmodal(!showmodal)
  }
  return (

    <>
    <button

      onClick={show}
    
    className="relative z-0 mx-auto mt-2 py-1 px-3 text-sm rounded  bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">
      get the code
    </button>
    {showmodal && 
    createPortal(
    <ModalResult closemodal={show} />,
    document.body
    )}
    </>
  )
}
