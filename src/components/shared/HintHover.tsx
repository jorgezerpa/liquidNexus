import React from 'react'
import { MdOutlineQuestionMark } from "react-icons/md";
import { Tooltip } from 'react-tooltip'

export function HintHover({ text }:{text:string}) {
  return (
    <div
        data-tooltip-id="my-tooltip" data-tooltip-content={text} 
        className="flex justify-center items-center rounded-full w-[20px] h-[20px] border-white border"
    >
        <MdOutlineQuestionMark size={16} />
        <Tooltip id="my-tooltip" arrowColor='white' style={{ maxWidth:200, background:"white", color:"black", fontWeight:"normal", fontSize:15 }} />
    </div>
  )
}
