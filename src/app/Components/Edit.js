"use client";

import { useState, useRef, useEffect } from "react";
import { RiPencilLine } from "react-icons/ri";

const Edit = () => {
  const [showEdit, setShowEdit] = useState(false);
  const containerRef = useRef(null);

  // Function to close Edit button when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowEdit(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex gap-4 pt-2 items-center">
      <input type="text" className="w-[156px] h-[24px] bg-[#D9D9D9]" />

      {/* Click Pencil to Show Edit Button */}
      <RiPencilLine
        className="w-[17px] h-[17px] text-[#007AFF] cursor-pointer"
        onClick={() => setShowEdit(true)}
      />

      {/* Show Edit Button */}
      {showEdit && (
        <button className="bg-blue-500 text-white px-2 py-1 rounded">
          Edit
        </button>
      )}
    </div>
  );
};

export default Edit;
