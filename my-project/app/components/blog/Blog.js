import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { IoMdArrowBack } from "react-icons/io";
export default function Blog(){
    return(
        <div>
            <Container>
                <div>
                    <Row>
                        <Col lg={6} className="bg-red-600 flex">
                            <h1 className="text-3xl font-bold">وبلاگ</h1>
                        </Col>
                        <Col lg={6} className="bg-yellow-600">
                            <button
                        className="px-2 mx-3 bg-[#F6F6F6] flex gap-x-2 p-1 h-12 rounded-xl justify-center items-center"
                        aria-label="بیشتر بخوانید"
                        title="بیشتر بخوانید"
                        >
                        <span className="text-gray-900">بیشتر بخوانید</span>
                        <IoMdArrowBack
                            className=" text-gray-900"
                            size={"25px"}
                            aria-hidden="true"
                        />
                        </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8}>

                        </Col>
                        <Col lg={4}></Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}