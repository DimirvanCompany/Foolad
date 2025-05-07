import { Col, Row } from "react-bootstrap";
import Link from 'next/link'
import { GoDotFill , GoArrowUpLeft } from "react-icons/go";
function NewsItem({image , title , desc , date , category}) {
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
                    <div className="flex justify-start gap-x-1 items-center">
                                <span className="text-[#292A71]">{category}</span>
                                <span><GoDotFill size="20px" color="#D6DDE6" /></span>
                                <span className="font-bold">{date}</span>
                            </div>
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

export default NewsItem;