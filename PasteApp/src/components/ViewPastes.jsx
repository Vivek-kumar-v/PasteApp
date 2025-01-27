
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const ViewPastes = () => {

    const {id} = useParams();
    const allPastes = useSelector((state)=>state.paste.pastes);
    
    const paste = allPastes.filter((p)=>p._id===id)[0];

    console.log("Final Passte : ",paste);


  return (
    <div>
    <div className="p-4 flex flex-row gap-7 place-content-between">
  <input
    type="text"
    className="p-1 w-[60%] pl-4 rounded-2xl bg-black text-white mt-3"
    placeholder="Enter title here"
    value={paste.title}
    disabled
    onChange={(e) => setTitle(e.target.value)}
  />
  {/* <button 
  onClick={createPaste}
  className="p-2 rounded-2xl bg-black text-white mt-3" >
    {pasteId ? "Update My Paste" : "Create My Paste"}
  </button> */}
</div>
<div className="mt-5" >
    <textarea 
        className="bg-black rounded-2xl mt-4, min-w-[650px] p-4"
        value={paste.content}
        disabled
        placeholder="Enter Content Here"
        onChange={(e) =>setValue(e.target.value)}
        rows={20}
    />
</div>
</div>
  )
}

export default ViewPastes
