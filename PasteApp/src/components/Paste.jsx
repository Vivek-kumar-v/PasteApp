import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dispatch = useDispatch();

  const formatDate = (date) => {
    try {
      return new Date(date).toLocaleString();
    } catch {
      return "Invalid Date";
    }
  };

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }


  return (
    <div>
      <input
        className="p-2 bg-black rounded-2xl min-w-[600px] "
        type="search"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-4 mt-5">
        {filteredData.length > 0 ? (
          filteredData.map((paste, index) => (
            <div key={paste?._id} className="border p-3 rounded-lg">
              <div className="font-bold">{paste.title}</div>
              <div className="mb-2" >{paste.content}</div>
              
              <div className="flex flex-row gap-1 place-content-evenly">
                <button >
                    <Link to={`/?pasteId=${paste?._id}`} >
                        Edit
                    </Link>
                    </button>
                <button className="btn">
                <Link to={`/pastes/${paste?._id}`}>View</Link>
                </button>
                <button onClick={ ()=>handleDelete(paste?._id)} >Delete</button>
                <button onClick={()=>{
                    navigator.clipboard.writeText(paste?.content)
                    toast.success("Copy to Clipboard")
                }} >Copy</button>
                <button>Share</button>
              </div>
              <div className="mt-2" >{paste.createdAt ? formatDate(paste.createdAt) : "Date not available"}</div>
            </div>
          ))
        ) : (
          <div className="text-gray-500">No pastes found.</div>
        )}
      </div>
    </div>
  );
};

export default Paste;

