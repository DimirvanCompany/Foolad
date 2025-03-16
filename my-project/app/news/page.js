import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import pic from "@/public/assets/images/carpenter.jpg"
import NewsItem from "./NewsItem";
import Chart from "../components/Chart/Chart";
function News() {
    const bottomNewsData = [
        {
            id : 1,
            date : "شهریور 1403",
            title : "عنوان اخبار اول",
            image : pic,
            desc : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        },
        {
            id : 2,
            date : "دی 1403",
            title : "عنوان اخبار دوم",
            image : pic,
            desc : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        },
        {
            id : 3,
            date : "بهمن 1403",
            title : "عنوان اخبار سوم",
            image : pic,
            desc : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        },
        {
            id : 4,
            date : "بهمن 1403",
            title : "عنوان اخبار چهارم",
            image : pic,
            desc : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        },
    ]
    return (
        <Container className="!px-4 my-3">
            <Row className="flex justify-between">
            <Col lg={12} className="my-3 !px-8 flex flex-col gap-y-6">
                <div className="relative h-[100px] justify-center flex flex-col items-center py-2 px-3 rounded-xl">
                    <div className="absolute inset-0 rounded-xl before:absolute before:top-0 before:left-0 before:w-16 before:h-16 before:border-t-4 before:border-l-4 before:border-[#292A71] before:rounded-tl-xl after:absolute after:bottom-0 after:right-0 after:w-16 after:h-16 after:border-b-4 after:border-r-4 after:border-[#292A71] after:rounded-br-xl"></div>
                    <div className="relative flex justify-center items-center border-[#292A71]" aria-label="title">
                        <h1 className="h1">اخبار</h1>
                    </div>
                </div>
            </Col>
            <Col lg="6" className="p-4 h-full">
                <Row className="flex flex-col gap-y-3 bg-gray-200 hover:shadow-lg transition-all delay-150 hover:cursor-pointer border-s-4 border-[#292A71] hover:border-opacity-90 justify-between hover:rounded-xl rounded-e-xl p-3 shadow-md">
                        <Image
                            src={pic}
                            alt="تصویر اخبار"
                            className="w-full h-[25rem] !rounded-xl"
                            width={400}
                            height={350}
                        />
                    <span className="text-[12px] text-[#292A71]">شهریور 1403</span>
                        <p className="text-[15px] text-justify text-gray-800">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                        <p className="text-[14px] text-justify text-gray-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                    </Row>
                </Col>
                <Col lg="6" className="flex flex-col p-4 gap-y-4 h-full">
                <Row className="flex gap-x-3 items-center hover:shadow-lg transition-all delay-150 hover:cursor-pointer border-s-4 border-[#292A71] hover:border-opacity-90 justify-between hover:rounded-xl rounded-e-xl bg-gray-200 p-3 shadow-md">
                        <Col className="flex flex-col gap-y-3">
                    <span className="text-[10px] text-[#292A71]">شهریور 1403</span>
                        <p className="text-[13px] text-justify text-gray-800">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                        <p className="text-[12px] text-justify text-gray-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                        </Col>
                        <Col>
                        <Image
                            src={pic}
                            alt="تصویر اخبار"
                            className="w-full h-32 rounded-xl"
                            width={400}
                            height={350}
                        />
                        </Col>
                    </Row>
                <Row className="flex gap-x-3 items-center hover:shadow-lg transition-all delay-150 hover:cursor-pointer border-s-4 border-[#292A71] hover:border-opacity-90 justify-between hover:rounded-xl rounded-e-xl bg-gray-200 p-3 shadow-md">
                        <Col className="flex flex-col gap-y-3">
                    <span className="text-[10px] text-[#292A71]">شهریور 1403</span>
                        <p className="text-[13px] text-justify text-gray-800">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                        <p className="text-[12px] text-justify text-gray-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                        </Col>
                        <Col>
                        <Image
                            src={pic}
                            alt="تصویر اخبار"
                            className="w-full h-32 rounded-xl"
                            width={400}
                            height={350}
                        />
                        </Col>
                    </Row>
                <Row className="flex gap-x-3 items-center hover:shadow-lg transition-all delay-150 hover:cursor-pointer border-s-4 border-[#292A71] hover:border-opacity-90 justify-between bg-gray-200 hover:rounded-xl rounded-e-xl p-3 shadow-md">
                        <Col className="flex flex-col gap-y-3">
                    <span className="text-[10px] text-[#292A71]">شهریور 1403</span>
                        <p className="text-[13px] text-justify text-gray-800">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                        <p className="text-[12px] text-justify text-gray-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                        </Col>
                        <Col>
                        <Image
                            src={pic}
                            alt="تصویر اخبار"
                            className="w-full h-32 rounded-xl"
                            width={400}
                            height={350}
                        />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-5">
            <Chart />
            </Row>
        </Container>
    );
}

export default News;