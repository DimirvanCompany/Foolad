import { Col, Row } from "react-bootstrap";
import Link from 'next/link'
import { GoDotFill , GoArrowUpLeft } from "react-icons/go";
function TopThreeNews({desc , date , category}) {
    const truncatedText = desc.length > 100 
    ? desc.slice(0, 100) + "..."
    : desc;
    return(
        <Row>
            <Link href="">
                <Col lg={12} className="my-2 m-auto arrow-hover">
                    <div className="border-b-4 bg-gray-200 hover:bg-gray-100 hover:bg-opacity-50 border-b-[#292A71] rounded-lg shadow-xl flex px-3 py-2 justify-center item-center">
                        <div className="mx-2">
                            <div className="my-3 flex justify-start items-center">
                                <span className="text-[#292A71]">{category}</span>
                                <span><GoDotFill size="20px" color="#D6DDE6" /></span>
                                <span>{date}</span>
                            </div>
                            <p className="my-3 text-justify">{truncatedText}</p>
                        </div> 
                        <span className="hidden">
                            <GoArrowUpLeft size="30px" color="#292A71" />             
                        </span>
                    </div>
                </Col>
            </Link>
        </Row>
    );
}

export default TopThreeNews;