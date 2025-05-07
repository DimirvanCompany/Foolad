import { Col, Row } from "react-bootstrap";
import Link from 'next/link'
import { GoDotFill , GoArrowUpLeft } from "react-icons/go";
function BlogItem({image , title , desc}) {
    const truncatedText = desc.length > 200 
    ? desc.slice(0, 200) + "..."
    : desc;
    return(
            <Link href="">
                <div className='bg-gray-200 hover:bg-gray-100 m-auto hover:bg-opacity-50 shadow-xl m-3 rounded-xl'>
                    <div className="cardHead">
                        <img src={image} className="rounded-t-xl" />
                    </div>
                    <div className="cardFooter p-3 flex flex-col gap-y-3">
                        <p className='text-[19px]'>{title}</p>
                        <p className='text-gray-700 text-justify text-[15px] '>{truncatedText}</p>
                        <div className="flex justify-end">
                            <button className="border-2 !border-[#292a71] px-3 py-2 rounded-xl flex items-center justify-end gap-x-3 hover:!bg-[#292a71] hover:text-white duration-200">
                                بیشتر...
                                <span><GoArrowUpLeft size="20px" /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
    );
}

export default BlogItem;