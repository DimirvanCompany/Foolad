import { FaArrowLeft } from "react-icons/fa6";

export default function BlogItem({title , desc , image}){
    return(
        <div>
            
            <div className='bg-gray-300 p-2 m-3 text-center rounded-xl'>
                <div className="cardHead">
                    <img src={image} />
                </div>
                <div className="cardFooter mt-2">
                    <p className='text-[19px]'>{title}</p>
                    <p className='text-gray-500 text-[15px] mt-3 '>{desc}</p>
                    <div className="flex justify-end"><button className="border-2 !border-[#292a71] px-3 py-2 rounded-xl flex items-center justify-end gap-x-3 hover:!bg-[#292a71] hover:text-white duration-200"><span>ادامه</span><span><FaArrowLeft /></span></button></div>
                </div>
            </div>
        </div>
    )
}