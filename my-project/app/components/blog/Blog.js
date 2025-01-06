import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { IoMdArrowBack } from "react-icons/io";
export default function Blog(){
    return(
        <div>
            <Container>
                <div>
                    <Row>
                        <Col lg={6} className="flex items-center">
                            <h1 className="text-3xl font-bold">وبلاگ</h1>
                        </Col>
                        <Col lg={6} className="flex justify-end !p-0">
                            <button
                        className="px-2 bg-[#292a71] flex gap-x-2 p-1 h-12 rounded-xl justify-center items-center"
                        aria-label="بیشتر بخوانید"
                        title="بیشتر بخوانید"
                        >
                        <span className="!text-white">بیشتر بخوانید</span>
                        <IoMdArrowBack
                            className=" !text-white"
                            size={"25px"}
                            aria-hidden="true"
                        />
                        </button>
                        </Col>
                    </Row>
                    <Row className="my-4">
                        <Col lg={7}>
                            <div className="bg-gray-200 rounded-lg p-2 felx justify-center item-center">
                                <img className="img-fluid m-auto rounded-xl my-3" src='https://yazdanfoolad.com/wp-content/uploads/2025/01/%D8%AA%D8%A7%D8%AB%DB%8C%D8%B1-%D8%B6%D8%AE%D8%A7%D9%85%D8%AA-%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84-%D8%A8%D8%B1-%D9%85%D9%82%D8%A7%D9%88%D9%85%D8%AA-%D8%B3%D8%A7%D8%B2%D9%87.jpg' />
                                <div className="mx-2">
                                <p className="my-3 text-lg font-bold">متن پیش فرض یک در این قسمت قرار میگیرد</p>
                                <p className="my-3 text-md">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                                </div>
                            </div>

                        </Col>
                        <Col lg={5}  >
                            <Row>
                                <Col lg={12} className="bg-gray-200 mb-[13px] rounded-lg p-3">
                                 <div className="flex items-center">
                                        <img className="img-fluid h-[130px] rounded-xl" src="https://yazdanfoolad.com/wp-content/uploads/2025/01/%D8%AA%D8%A7%D8%AB%DB%8C%D8%B1-%D8%B6%D8%AE%D8%A7%D9%85%D8%AA-%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84-%D8%A8%D8%B1-%D9%85%D9%82%D8%A7%D9%88%D9%85%D8%AA-%D8%B3%D8%A7%D8%B2%D9%87.jpg"/>
                                        <p className="my-3 text-lg mr-2 font-bold">متن پیش فرض یک در این قسمت قرار میگیرد</p>
                                    </div>   
                                </Col>
                                <Col lg={12} className="bg-gray-200 mb-[13px] rounded-lg p-3">
                                 <div className="flex items-center">
                                        <img className="img-fluid h-[130px] rounded-xl" src="https://yazdanfoolad.com/wp-content/uploads/2025/01/%D8%A2%D8%B4%D9%86%D8%A7%DB%8C%DB%8C-%D8%A8%D8%A7-%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84%E2%80%8C%D9%87%D8%A7%DB%8C-%D9%81%D9%88%D9%84%D8%A7%D8%AF%DB%8C-%D8%A2%D9%84%DB%8C%D8%A7%DA%98%DB%8C-%D9%88-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF-%D8%A2%D9%86%E2%80%8C%D9%87%D8%A7.jpg"/>
                                        <p className="my-3 text-lg mr-2 font-bold">متن پیش فرض یک در این قسمت قرار میگیرد</p>
                                    </div>   
                                </Col>
                                <Col lg={12} className="bg-gray-200 mb-[13px] rounded-lg p-3">
                                 <div className="flex items-center">
                                        <img className="img-fluid h-[130px] rounded-xl" src="https://yazdanfoolad.com/wp-content/uploads/2025/01/%D9%85%D8%B4%DA%A9%D9%84%D8%A7%D8%AA-%D8%B1%D8%A7%DB%8C%D8%AC-%D8%AF%D8%B1-%D8%B3%D8%A7%D8%AE%D8%AA-%D8%B3%D8%A7%D8%B2%D9%87%E2%80%8C%D9%87%D8%A7%DB%8C-%D9%81%D9%84%D8%B2%DB%8C-%D9%88-%D8%B1%D8%A7%D9%87%DA%A9%D8%A7%D8%B1%D9%87%D8%A7%DB%8C-%D8%B1%D9%81%D8%B9-%D8%A2%D9%86%E2%80%8C%D9%87%D8%A7.jpg"/>
                                        <p className="my-3 text-lg mr-2 font-bold">متن پیش فرض یک در این قسمت قرار میگیرد</p>
                                    </div>   
                                </Col>
                                <Col lg={12} className="bg-gray-200 mb-[13px] rounded-lg p-3">
                                 <div className="flex items-center">
                                        <img className="img-fluid h-[130px] rounded-xl" src="https://yazdanfoolad.com/wp-content/uploads/2025/01/%D8%B1%D9%88%D8%B4%E2%80%8C%D9%87%D8%A7%DB%8C-%D8%AA%D8%B3%D8%AA-%D9%88-%DA%A9%D9%86%D8%AA%D8%B1%D9%84-%DA%A9%DB%8C%D9%81%DB%8C%D8%AA-%D9%BE%D8%B1%D9%88%D9%81%DB%8C%D9%84.jpg"/>
                                        <p className="my-3 text-lg mr-2 font-bold">متن پیش فرض یک در این قسمت قرار میگیرد</p>
                                    </div>   
                                </Col>
                                
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}