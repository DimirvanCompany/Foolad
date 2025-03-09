"use client";
import { Container, Row , Col } from "react-bootstrap";
import History from "./History.js"
import Managers from "./Managers.js"
import Adress from "./Adress.js"
function About() {
    const data = [
        {
            id: 1,
            image: "https://yazdanfoolad.com/wp-content/uploads/2023/10/MX-M264N_20231017_150933_001-min-scaled.webp",
            title: "محمدرضا اشرفی پور راد",
            semat: "هیئت مدیره"
        },
        {
            id: 2,
            image: "https://yazdanfoolad.com/wp-content/uploads/2023/10/MX-M264N_20231017_150933_001-min-scaled.webp",
            title: "محمدرضا اشرفی پور",
            semat: "هیئت مدیره"
        },
        {
            id: 3,
            image: "https://yazdanfoolad.com/wp-content/uploads/2023/10/MX-M264N_20231017_150933_001-min-scaled.webp",
            title: "محمدرضا اشرفی",
            semat: "هیئت مدیره"
        },
        {
            id: 4,
            image: "https://yazdanfoolad.com/wp-content/uploads/2023/10/MX-M264N_20231017_150933_001-min-scaled.webp",
            title: "محمد اشرفی",
            semat: "هیئت مدیره"
        },
    ]
    return (
        <Container className="!px-4 my-3">
            <Row className="p-3">
            <Row className="flex py-4 items-center">
            <Col lg={12} className="my-3 flex flex-col gap-y-6">
                <div className="relative h-[100px] justify-center flex flex-col items-center py-2 px-3 rounded-xl">
                    <div className="absolute inset-0 rounded-xl before:absolute before:top-0 before:left-0 before:w-16 before:h-16 before:border-t-4 before:border-l-4 before:border-[#292A71] before:rounded-tl-xl after:absolute after:bottom-0 after:right-0 after:w-16 after:h-16 after:border-b-4 after:border-r-4 after:border-[#292A71] after:rounded-br-xl"></div>
                    <div className="relative flex justify-center items-center border-[#292A71]" aria-label="title">
                        <h1 className="h1">درباره ما</h1>
                    </div>
                </div>
            </Col>
            </Row>
               <History/>
                <Row className="hover:!shadow-lg my-3 transition-all delay-200 hover:!cursor-pointer border-s-4 border-[#292A71] hover:border-opacity-90 !bg-gray-200 hover:rounded-xl rounded-e-xl p-3 !shadow-md">
                <h5 className="pt-2 text-justify h5">سهامداران ، هیئت مدیره ، مدیران:</h5>
                {data.map((item) => (
                        <Col md={3} key={item.id}>
                            <Managers {...item} />
                        </Col>
                    ))}
                </Row>
                <Adress/>
            </Row>
        </Container>
    );
}

export default About;