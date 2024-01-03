import img from "../../assets/mark.svg"
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const FooterProp = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#111827]">
       <div className="w-[90%] h-[95%] flex justify-center items-center flex-col">
                <div className="w-full h-[70%] flex justify-center items-center">
                    <div className="w-[40%]">
                        <img src={img} className="h-[40px] mb-6" />
                        <div className="font-[600] text-[white]">Making the world a better place through constructing <br />elegant hierarchies.</div>
                        <div className="flex  w-[200px] justify-between text-[25px] text-[grey] mt-6 cursor-pointer">
                        <IoLogoFacebook className=" hover:text-white transition-all duration-300"/>
                        <FaTwitter className=" hover:text-white transition-all duration-300"/>
                        <FaSquareInstagram className=" hover:text-white transition-all duration-300"/>
                        <FaGithubSquare className=" hover:text-white transition-all duration-300"/>
                        <FaYoutube className=" hover:text-white transition-all duration-300"/>
                        </div>
                    </div>
                    <div className="w-[15%] font-[600] text-[white]">
                        <div>
                        Solution
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Marketing
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Analytic
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Commerce
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Insight
                        </div>
                    </div>
                    <div className="w-[15%] font-[600] text-[white]">
                        <div>
                        Solution
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Marketing
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Analytic
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Commerce
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Insight
                        </div>
                    </div>
                    <div className="w-[15%] font-[600] text-[white]">
                        <div>
                        Solution
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Marketing
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Analytic
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Commerce
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Insight
                        </div>
                    </div>
                    <div className="w-[15%] font-[600] text-[white]">
                        <div>
                        Solution
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Marketing
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Analytic
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Commerce
                        </div>
                        <div className="mt-4 text-[#D1C6A7] font-[400] hover:text-white transition-all duration-400 cursor-pointer">
                        Insight
                        </div>
                    </div>
                </div>
                <div className="w-full h-[30%] border-y">
                    <div className="flex items-center text-[grey] mt-9">© 2020 Your Company, Inc. All rights reserved.</div>
                </div>
       </div>
    </div>
  )
}

export default FooterProp;
