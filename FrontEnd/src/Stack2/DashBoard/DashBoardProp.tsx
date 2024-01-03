import img from "../../assets/mark.svg"
import { FaAngleDown} from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FaFolderClosed } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { FaCopy } from "react-icons/fa";
import GlobalInput from "../../Stacks/GlobalInput";
import { FaBell } from "react-icons/fa";
import img2 from "../../assets/passport.jpg"
import { twMerge } from "tailwind-merge";
import { FC, ReactNode } from "react";

interface iProps{
  Name1: string
  Icon1: ReactNode
}

const DashBoardProp: FC<iProps> = ({Name1, Icon1}) => {
  return (
    <div className={twMerge(
      "w-full h-full flex justify-center items-center"
    )}>
      <div className="w-[100%] h-[90vh] bg-white border flex">
        <div className="w-[20%] shadow-md bg-[#111827] flex justify-center items-center">
          <div className="w-[90%] h-[95%]">
            <img src={img} className="w-[50px] ml-[10px]"/>
            <div className="mt-8 flex justify-center items-center flex-col">
              <div className="flex items-center bg-[#1F2937] w-[100%] rounded-md py-2 text-white cursor-pointer">
               <div className="text-[22px] mr-[10px] ml-[10px]">
               {Icon1}
               </div>
                <p className="text-[14px] font-[700]">{Name1}</p>
              </div>
               <div className="flex items-center hover:bg-[#1F2937] w-[100%] rounded-md py-2 text-[grey] cursor-pointer hover:text-white transition-all duration-300 mt-[5px]">
                <IoPeople className="text-[22px] mr-[10px] ml-[10px]"/>
                <p className="text-[14px] font-[700]">Team</p>
              </div>
               <div className="flex items-center hover:bg-[#1F2937] w-[100%] rounded-md py-2 text-[grey] cursor-pointer hover:text-white transition-all duration-300 mt-[5px]">
                <FaFolderClosed className="text-[22px] mr-[10px] ml-[10px]"/>
                <p className="text-[14px] font-[700]">Projects</p>
              </div>
               <div className="flex items-center hover:bg-[#1F2937] w-[100%] rounded-md py-2 text-[grey] cursor-pointer hover:text-white transition-all duration-300 mt-[5px]">
                <FaRegCalendarAlt className="text-[22px] mr-[10px] ml-[10px]"/>
                <p className="text-[14px] font-[700]">Calendar</p>
              </div>
               <div className="flex items-center hover:bg-[#1F2937] w-[100%] rounded-md py-2 text-[grey] cursor-pointer hover:text-white transition-all duration-300 mt-[5px]">
                <FaCopy className="text-[22px] mr-[10px] ml-[10px]"/>
                <p className="text-[14px] font-[700]">Documents</p>
              </div>
               <div className="flex items-center hover:bg-[#1F2937] w-[100%] rounded-md py-2 text-[grey] cursor-pointer hover:text-white transition-all duration-300 mt-[5px]">
                <TiDocumentText className="text-[22px] mr-[10px] ml-[10px]"/>
                <p className="text-[14px] font-[700]">Report</p>
              </div>
            </div>
            <div className="w-full min-h-[20vh] mt-5 ">
            <div className="flex items-center w-[100%] ml-[10px] text-[grey]">
                <p className="text-[14px] font-[700]">Your Team</p>
              </div>
              <div className="flex items-center hover:bg-[#1F2937] w-[100%] rounded-md py-2 text-[grey] cursor-pointer hover:text-white transition-all duration-300 mt-[5px]">
              <div className="mr-[10px] h-[20px] w-[20px] border rounded-md text-white flex justify-center items-center text-[13px] font-[500] ml-[10px]">A</div>
                <p className="text-[14px] font-[700]">Ajayi Gabriel</p>
              </div>
              <div className="flex items-center hover:bg-[#1F2937] w-[100%] rounded-md py-2 text-[grey] cursor-pointer hover:text-white transition-all duration-300 mt-[5px]">
              <div className="mr-[10px] h-[20px] w-[20px] border rounded-md text-white flex justify-center items-center text-[13px] font-[500] ml-[10px]">H</div>
                <p className="text-[14px] font-[700]">Habeeb Abacha</p>
              </div>
              <div className="flex items-center hover:bg-[#1F2937] w-[100%] rounded-md py-2 text-[grey] cursor-pointer hover:text-white transition-all duration-300 mt-[5px]">
                <div className="mr-[10px] h-[20px] w-[20px] border rounded-md text-white flex justify-center items-center text-[13px] font-[500] ml-[10px]">D</div>
                <p className="text-[14px] font-[700]">Daniel Eromonsale</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%]">
          <div className="w-full h-[70px] bg-[white] ml-[50px]">
            <div className="items-center flex">
            <GlobalInput className="w-[65%]" color="" placeholder="Search..."/>
            <FaBell className="text-[grey] text-[20px]"/>
            <div className="w-[1px] h-[30px] bg-[grey] ml-[15px]"></div>
            <div className="w-[40px] h-[40px] bg-[grey] ml-[25px] rounded-[50%] overflow-hidden">
              <img src={img2} alt="" />
            </div>
            <div className="text-[14px] ml-2 font-[500]">Ajayi Gabriel</div>
            <FaAngleDown className="ml-2 cursor-pointer"/>
            </div>
          </div>
          <div className="w-full h-[88%] flex justify-center items-center">
            <div className="w-[85%] h-[450px] bg-[black] rounded-[20px]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoardProp;