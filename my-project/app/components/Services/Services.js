import { Row, Col, Container } from "react-bootstrap";
import styles from "./Services.module.css"
import { BsLayersHalf } from "react-icons/bs";
import { MdOutlineFactCheck } from "react-icons/md";
import ServiceItem from "./ServiceItem";
import { HiArrowLongLeft } from "react-icons/hi2";
import { TbMessages } from "react-icons/tb";
import Link from "next/link";
function Services() {
    const data = [
        {
            id: 1,
            icon: <BsLayersHalf color="#292A71" size="30px" />,
            title: "جداول وزنی",
            text: "برای راحتی شما مشتریان گرانقدر جداول وزنی اقلام پرکاربرد در فولاد را بریتان ایجاد کرده ایم."
        },
        {
            id: 2,
            icon: <MdOutlineFactCheck color="#292A71" size="30px" />,
            title: "ارسال فاکتور رسمی",
            text: "شرکت فولاد مرکزی بافق فاکتور های خریداران گرامی را در صورت درخواست رسمی صادر به مقصد شما ارسال می نماید."
        },
        {
            id: 3,
            icon: <BsLayersHalf color="#292A71" size="30px" />,
            title: "ارسال به سراسر کشور",
            text: "در اولین زمان ممکن محصولات فولادی خریداری شده هماهنگی کارشناسان شرکت به حمل شما بارگیری و ارسال می گردد."
        },
    ]
    return (
        <Container>
            <Row className="flex py-4 items-center">
            <Col lg={4} className="my-3 flex flex-col gap-y-6">
                <div className="relative h-[250px] flex flex-col items-center py-2 px-3 bg-white rounded-xl">
                    <div className="absolute inset-0 rounded-xl before:absolute before:top-0 before:left-0 before:w-16 before:h-16 before:border-t-4 before:border-l-4 before:border-[#292A71] before:rounded-tl-xl after:absolute after:bottom-0 after:right-0 after:w-16 after:h-16 after:border-b-4 after:border-r-4 after:border-[#292A71] after:rounded-br-xl"></div>
                    <div className="relative flex justify-center items-center mb-4 border-[#292A71]" aria-label="title">
                        <h2 className="text-xl font-medium text-center">
                            <span className="text-2xl font-semibold">خدماتی</span> که ما ارائه می‌دهیم
                        </h2>
                    </div>
                    <p className="text-gray-600 relative text-[13px]">
                        در منشور اخلاقی آرگون فولاد ایرانیان، اعتماد مهم‌ترین گزینه و سرمایه اجتماعی است...
                    </p>
                    <div className="btns w-full mt-3 flex flex-col gap-y-4 items-center">
                        <a
                            href="#"
                            className="mx-3 bg-[#292a71] group transition delay-100 hover:bg-[#1c1d61] z-10 w-full flex gap-x-2 p-1 h-12 rounded-xl justify-center items-center"
                            aria-label="مشاوره رایگان"
                            title="مشاوره رایگان"
                        >
                            <TbMessages className="text-gray-100" size="30px" aria-hidden="true" />
                            <span className="text-gray-100">مشاوره رایگان</span>
                        </a>
                        <a
                            href="#"
                            className="w-full group mx-3 z-10 bg-gray-100 hover:bg-[#292a71] text-[#292a71] hover:text-gray-200 flex gap-x-2 p-1 h-12 rounded-xl justify-center transition delay-100 items-center"
                            aria-label="بیشتر بخوانید"
                            title="بیشتر بخوانید"
                        >
                            <span>بیشتر بخوانید</span>
                            <HiArrowLongLeft size="30px" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </Col>
            <Col lg={8} className="my-3">
                <Row>
                    {data.map((item) => (
                        <Col md={4} key={item.id}>
                            <ServiceItem {...item} />
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
        </Container>
    );
}
export default Services;