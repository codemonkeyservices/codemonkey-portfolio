"use client";

import { useState } from "react";
import Modal from "./bookModal";

export default function BookButton(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <>
        <button 
        onClick={()=>{setIsModalOpen(true)}}
        className="bg-sky-500 hover:bg-sky-400 p-3 rounded-md hover:rounded-none drop-shadow-2xl transition-custom">book a meeting</button>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

        </>
    )
}