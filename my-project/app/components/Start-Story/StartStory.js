import { Row, Col , Container } from "react-bootstrap";
import { HiArrowLongLeft } from "react-icons/hi2";
import StartStoryItem from "./StartStoryItem";
import StartStoryImage from "./StartStoryImage";
import { data, images } from "./Datas";
function StartStory() {
    return (
        <Container>
            <Row className="flex py-4 px-3 items-center justify-between">
            <Col lg={5} className="my-4 flex flex-col gap-y-12">
                <div className="foolad-images-container flex gap-x-4">
                    {
                        images.map(item => (
                            <StartStoryImage key={item.id} {...item} />
                        ))
                    }
                </div>
                <div className="experience">
                    <Row className="flex items-center justify-center">
                        <Col md={6}>
                            <h3 className="h3 flex flex-col">
                                <span className="text-gray-800 font-bold mb-2">+ 11</span>
                                <span className="text-gray-700">سال تجربه کار در این زمینه</span>
                            </h3>
                        </Col>
                        <Col md={6}>
                            <p className="text-justify">
                                امید است با عنایت خداوند متعال و همت کارکنان مجموعه یزدان فولاد و با بهره مندی از نیروی جوان بتوانیم نقش شایانی در چرخه اقتصادی نظام جمهوری اسلامی ایران داشته باشیم
                            </p>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col lg={6} className="my-4 flex flex-col gap-y-2">
                <h2 className="h2 leading-[50px]">
                    داستان <span className="font-bold">شروع</span> و <span className="font-bold">تجربه های</span> فولاد مرکزی بافق در سال های اخیر
                </h2>
                <p>
                    شرکت آرگون فولاد مرکزی بافق با هدف تهیه و توزیع انواع مقاطع فولادی، صنعتی و ساختمانی همراه کادر مدیریتی مجرب با تکیه بر جوانان ایرانی و تجربه ای افزون بر 30 سال آماده خدمت رسانی به شما مشتریان و همراهان گرامی می باشد.
                </p>
                <div className="btns w-full mt-3 flex gap-x-2 items-center">
                    <a
                        href="#"
                        className="bg-[#292a71] group transition delay-100 hover:bg-[#1c1d61] z-10 w-full flex gap-x-2 p-1 text-[12px] sm:text-[16px] h-12 rounded-xl justify-center items-center"
                        aria-label="مشاهده محصولات"
                        title="مشاهده محصولات"
                    >
                        <span className="text-gray-100">مشاهده محصولات</span>
                    </a>
                    <a
                        href="#"
                        className="w-full group z-10 bg-gray-100 hover:bg-[#292a71] text-[#292a71] hover:text-gray-200 flex gap-x-2 p-1 text-[12px] sm:text-[16px] h-12 rounded-xl justify-center transition delay-100 items-center"
                        aria-label="بیشتر بخوانید"
                        title="بیشتر بخوانید"
                    >
                        <span>بیشتر بخوانید</span>
                        <HiArrowLongLeft size="30px" aria-hidden="true" />
                    </a>
                </div>
                <Row className="different-from-everyone">
                    <div className="mt-3 mb-2 relative flex flex-col items-center p-3 bg-gray-100 rounded-xl shadow-md">
                        <div className="absolute inset-0 rounded-xl border border-gray-300 before:absolute before:top-0 before:left-0 before:w-6 before:h-6 before:border-t-4 before:border-l-4 before:border-[#292A71] before:rounded-tl-xl after:absolute after:bottom-0 after:right-0 after:w-6 after:h-6 after:border-b-4 after:border-r-4 after:border-[#292A71] after:rounded-br-xl"></div>
                        <h5 className="relative font-bold h5 text-[#292a71]" aria-label="ما با بقیه فرق داریم">ما با بقیه فرق داریم</h5>
                    </div>
                </Row>
                <Row className="!rounded-xl shadow-md border bg-gray-100 border-gray-300">
                    {
                        data.map(item => (
                            <StartStoryItem key={item.id} {...item} />
                        ))
                    }
                </Row>
            </Col>
        </Row>
        </Container>
    );
}

export default StartStory;