import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [searchParams,setSearchParams] = useSearchParams(); 
  const [value,setValue] = useState('');
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state)=>state.paste.pastes);


  useEffect(() => {
    if(pasteId) {
        const paste = allPastes.find((p)=>p._id===pasteId);
        setTitle(paste.title);
        setValue(paste.content);
    }
}, [pasteId])


  function createPaste() {
    const paste = {
        title:title,
        content : value,
        _id: pasteId || 
                Date.now().toString(36),
        createAt: new Date().toISOString(),
    }

   
    

    if(pasteId) {
        // Update
        dispatch(updateToPastes(paste));
    }
    else{
        // Create
        dispatch(addToPastes(paste));
    }

    // After creation or Updation 
    setTitle('');
    setValue('');
    setSearchParams({});




  }

  return (
    <div>
        <div className="p-4 flex flex-row gap-7 place-content-between">
      <input
        type="text"
        className="p-1 w-[60%] pl-4 rounded-2xl bg-black text-white mt-3"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button 
      onClick={createPaste}
      className="p-2 rounded-2xl bg-black text-white mt-3" >
        {pasteId ? "Update My Paste" : "Create My Paste"}
      </button>
    </div>
    <div className="mt-5" >
        <textarea 
            className="bg-black rounded-2xl mt-4, min-w-[650px] p-4"
            value={value}
            placeholder="Enter Content Here"
            onChange={(e) =>setValue(e.target.value)}
            rows={20}
        />
    </div>
    </div>
  );
};

export default Home;

