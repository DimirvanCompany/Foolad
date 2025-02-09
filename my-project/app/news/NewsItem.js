import { Col, Row } from "react-bootstrap";
import Image from "next/image";

function NewsItem({ image, title, desc, date }) {
    return (
        <Col lg="4" className="flex flex-col p-4 gap-y-4">
            <Row className="flex gap-x-3 items-center justify-between hover:shadow-lg transition-all delay-200 hover:cursor-pointer border-s-4 border-[#292A71] hover:border-opacity-90 bg-gray-200 hover:rounded-xl rounded-e-xl p-3 shadow-md">
                <Col className="flex flex-col gap-y-3">
                    <span className="text-[10px] text-[#292A71]">{date}</span>
                    <p className="text-[13px] text-justify text-gray-800">{title}</p>
                    <p className="text-[12px] text-justify text-gray-500">{desc}</p>
                </Col>
                <Col>
                    <Image
                        src={image}
                        alt="تصویر اخبار"
                        className="w-full h-32 rounded-xl"
                        width={400}
                        height={350}
                    />
                </Col>
            </Row>
        </Col>
    );
}

export default NewsItem;