'use client'
import React, {useState} from 'react'
import { IoMdChatbubbles } from "react-icons/io";
import { IoMdSend } from "react-icons/io";

export function AIChat() {

    const [showChat, setShowChat] = useState(false)

  return (
    <div className="absolute bottom-[50px] right-[15px] flex flex-col justify-center items-center gap-1">
      <div onClick={()=>setShowChat(!showChat)} className="w-[80px] h-[80px] rounded-full bg-backgroundSecondary shadow-md shadow-white flex justify-center items-center cursor-pointer">
        <IoMdChatbubbles size={40} />
      </div>
      {
        showChat && (
            <>
                <p>Nexus AI</p>
                <div className="absolute bottom-[120px] right-[20px] bg-black w-[200px] sm:w-[250px] rounded-lg overflow-hidden shadow-sm shadow-white">
                    <div className="py-4 border-b border-white text-center">
                    <p className="font-bold">Nexus AI</p>
                    </div>
                    <div className="min-h-[300px] py-4  text-center bg-white bg-opacity-10 px-3">
                    <p className="text-sm text-white text-center">Chat with our AI to learn how to use the service.</p>
                    </div>
                    <div className="py-4 border-b text-center flex gap-2 px-3">
                    <input type="text" className="flex-1 rounded-md" />
                    <div  className="flex justify-center items-center cursor-pointer">
                        <IoMdSend size={15} />
                    </div>
                    </div>
                </div>
            </>
        )
      }
    </div>
  )
}

