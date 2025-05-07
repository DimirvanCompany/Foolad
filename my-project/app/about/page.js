"use client";
import { Container, Row , Col } from "react-bootstrap";
import History from "../../components/about/History.js"
import Managers from "../../components/about/Managers.js"
import Adress from "../../components/about/Adress.js"
function About() {
    const data = [
        {
            id: 1,
            image: "https://static1.khabarfoori.com/servev2/YWYyNTQP3VI6/5Uwvb7W7Zm0,/file.jpg",
            title: "طاهر ابراهیم زاده",
            text : "شماره ملی : 1651801932",
            subText : "نماینده شرکت سنگ آهن مرکزی ایران",
            semat: "رئیس هیئت مدیره"
        },
        {
            id: 2,
            image: "https://static1.khabarfoori.com/servev2/YWYyNTQP3VI6/5Uwvb7W7Zm0,/file.jpg",
            title: "حمید حسینی",
            text : "شماره ملی : 4420521661",
            subText : "",
            semat: "نائب رئیس هیئت مدیره"
        },
        {
            id: 3,
            image: "https://static1.khabarfoori.com/servev2/YWYyNTQP3VI6/5Uwvb7W7Zm0,/file.jpg",
            title: "مهراداد همتی",
            text : "شماره ملی : 5669621964",
            subText : "نماینده شرکت صنعتی معدنی بازرگانی گوهران چعارت بافق",
            semat: "عضو هیئت مدیره"
        },
        {
            id: 4,
            image: "https://static1.khabarfoori.com/servev2/YWYyNTQP3VI6/5Uwvb7W7Zm0,/file.jpg",
            title: "حمیدرضا عسکری باقرآبادی",
            text : "شماره ملی : 4470067695",
            subText : "نماینده شرکت ذوب و نورد مهرخام گیتی جنوب",
            semat: "عضو هیئت مدیره"
        },
        {
            id: 5,
            image: "https://static1.khabarfoori.com/servev2/YWYyNTQP3VI6/5Uwvb7W7Zm0,/file.jpg",
            title: "محمد عاقبت خیری",
            text : "شماره ملی : 4420517913",
            subText : "",
            semat: "عضو هیئت مدیره و مدیرعامل"
        },
    ]
    return (
        <Container className="m-auto mt-5">
            <Row className="my-3 m-auto flex flex-col gap-y-6">
                <div className="relative h-[100px] justify-center flex flex-col items-center py-2 px-3 rounded-xl">
                    <div className="absolute inset-0 rounded-xl before:absolute before:top-0 before:left-0 before:w-16 before:h-16 before:border-t-4 before:border-l-4 before:border-[#292A71] before:rounded-tl-xl after:absolute after:bottom-0 after:right-0 after:w-16 after:h-16 after:border-b-4 after:border-r-4 after:border-[#292A71] after:rounded-br-xl"></div>
                    <div className="relative flex justify-center items-center border-[#292A71]" aria-label="title">
                        <h1 className="h1">درباره ما</h1>
                    </div>
                </div>
            </Row>
            <History/>
            <Row className="hover:!shadow-lg m-auto my-5 transition-all delay-200 hover:!cursor-pointer border-s-4 border-[#292A71] hover:border-opacity-90 !bg-gray-200 hover:rounded-xl rounded-e-xl p-3 !shadow-md">
                <h5 className="pt-2 text-justify h5">سهامداران ، هیئت مدیره ، مدیران:</h5>
                {data.map((item) => (
                        <Col md={4} key={item.id}>
                            <Managers {...item} />
                    </Col>
                ))}
            </Row>
            <Adress/>
        </Container>
    );
}

export default About;