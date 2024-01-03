import { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
const ToggleProp = () => {
    const [toggle, setToggle] = useState<boolean>(false)
  return (
    <div className={twMerge(
        "flex items-center justify-center w-full h-[100vh]  transition-all duration-700"
    )}>
       {toggle ? (
         <div
         onClick={() =>{
             setToggle(!toggle)
         }}
         className="text-[green] text-[200px] cursor-pointer"        
         >
         <BsToggleOn />
         </div>
       ) : (
        <div
        onClick={() => {
            setToggle(!toggle)
        }}
        className="text-[crimson] text-[200px] cursor-pointer"
        >
        <BsToggleOff/>
        </div>
       )}
    </div>
  )
}

export default ToggleProp;
