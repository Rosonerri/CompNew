import img from "../../assets/photo1.avif"
import img2 from "../../assets/photo2.avif"
import img3 from "../../assets/photo3.avif"
import img4 from "../../assets/img1.avif"
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const ContactProp = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-full min-h-[50%] grid lg:grid-cols-4 gap-2 bg-[#F3F4F6] md:grid-cols-3 sm:grid-cols-2 ">
        <div className="rounded-md shadow-md w-[100%] h-[100%]">
            <div className="w-full h-[85%] bg-[white] border-y flex justify-center items-center flex-col">
                <div className="w-[130px] h-[130px] bg-white rounded-[50%] overflow-hidden mb-[15px]">
                <img src={img} alt="" />
                </div>
                <div className="text-[13px] font-[600] mb-[10px]">Rebecca Cooper</div>
                <div className="text-[13px] font-[600] text-[grey]">Project Manager</div>
                <div className="text-[13px] font-[600] border rounded-[15px] py-1 px-2 bg-[#F0FDF4] mt-[15px]">Admin</div>

            </div>
            <div className="w-full h-[15%] bg-[white] flex justify-center items-center">
                <div className="w-[50%] h-full flex justify-center items-center border-x">
                <MdEmail className="mr-[6px] text-[20px] text-[grey]"/>
                <span className="font-[500]">Email</span>
                </div>
                <div className="w-[50%] h-full flex justify-center items-center ">
                <IoMdCall className="mr-[6px] text-[20px] text-[grey]"/>
                <span className="font-[500]">Call</span>
                </div>
            </div>
        </div>
        <div className="rounded-md shadow-md w-[100%] h-[100%]">
            <div className="w-full h-[85%] bg-[white] border-y flex justify-center items-center flex-col">
                <div className="w-[130px] h-[130px] bg-white rounded-[50%] overflow-hidden mb-[15px]">
                <img src={img3} alt="" />
                </div>
                <div className="text-[13px] font-[600] mb-[10px]">Esther</div>
                <div className="text-[13px] font-[600] text-[grey]">UI/UX Designer</div>
                <div className="text-[13px] font-[600] border rounded-[15px] py-1 px-2 bg-[#F0FDF4] mt-[15px]">Admin</div>

            </div>
            <div className="w-full h-[15%] bg-[white] flex justify-center items-center">
                <div className="w-[50%] h-full flex justify-center items-center border-x">
                <MdEmail className="mr-[6px] text-[20px] text-[grey]"/>
                <span className="font-[500]">Email</span>
                </div>
                <div className="w-[50%] h-full flex justify-center items-center ">
                <IoMdCall className="mr-[6px] text-[20px] text-[grey]"/>
                <span className="font-[500]">Call</span>
                </div>
            </div>
        </div>
        <div className="rounded-md shadow-md w-[100%] h-[100%]">
            <div className="w-full h-[85%] bg-[white] border-y flex justify-center items-center flex-col">
                <div className="w-[130px] h-[130px] bg-white rounded-[50%] overflow-hidden mb-[10px]">
                <img src={img2} alt="" />
                </div>
                <div className="text-[13px] font-[600] mb-[10px]">Wilson Rice</div>
                <div className="text-[13px] font-[600] text-[grey]">Sales Rep</div>
                <div className="text-[13px] font-[600] border rounded-[15px] py-1 px-2 bg-[#F0FDF4] mt-[10px]">Admin</div>

            </div>
            <div className="w-full h-[15%] bg-[white] flex justify-center items-center">
                <div className="w-[50%] h-full flex justify-center items-center border-x">
                <MdEmail className="mr-[6px] text-[20px] text-[grey]"/>
                <span className="font-[500]">Email</span>
                </div>
                <div className="w-[50%] h-full flex justify-center items-center ">
                <IoMdCall className="mr-[6px] text-[20px] text-[grey]"/>
                <span className="font-[500]">Call</span>
                </div>
            </div>
        </div>
        <div className="rounded-md shadow-md w-[100%] h-[100%]">
            <div className="w-full h-[85%] bg-[white] border-y flex justify-center items-center flex-col">
                <div className="w-[130px] h-[130px] bg-white rounded-[50%] overflow-hidden mb-[10px]">
                <img src={img4} alt="" />
                </div>
                <div className="text-[13px] font-[600] mb-[10px]">Maxwell Mbata</div>
                <div className="text-[13px] font-[600] text-[grey]">Software Engineer </div>
                <div className="text-[13px] font-[600] border rounded-[15px] py-1 px-2 bg-[#F0FDF4] mt-[10px]">Admin</div>

            </div>
            <div className="w-full h-[15%] bg-[white] flex justify-center items-center">
                <div className="w-[50%] h-full flex justify-center items-center border-x">
                <MdEmail className="mr-[6px] text-[20px] text-[grey]"/>
                <span className="font-[500]">Email</span>
                </div>
                <div className="w-[50%] h-full flex justify-center items-center ">
                <IoMdCall className="mr-[6px] text-[20px] text-[grey]"/>
                <span className="font-[500]">Call</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactProp;
