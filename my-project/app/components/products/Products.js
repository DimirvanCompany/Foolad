import { Col, Row } from "react-bootstrap";
import { IoMdArrowBack } from "react-icons/io";

export default function Products() {

    const data = [
        {
            id: 1,
            title: "ورق",
            image: "https://yazdanfoolad.com/wp-content/uploads/2023/10/varagh.svg"
        },
        {
            id: 2,
            title: "هاش",
            image: "https://yazdanfoolad.com/wp-content/uploads/2023/10/milgerd-moshtaghat1.svg"
        },
        {
            id: 3,
            title: "ناودانی",
            image: "https://yazdanfoolad.com/wp-content/uploads/2023/10/aliyazhi.svg"
        },
        {
            id: 4,
            title: "میلگرد",
            image: "https://yazdanfoolad.com/wp-content/uploads/2023/10/milgerd.svg"
        },
        {
            id: 5,
            title: "لوله",
            image: "https://yazdanfoolad.com/wp-content/uploads/2023/10/lole1.svg"
        },
        {
            id: 6,
            title: "پروفیل",
            image: "https://yazdanfoolad.com/wp-content/uploads/2023/10/aliyazhi.svg"
        }
    ]




    return (
        <Row className="my-5 !px-0">
            <Row className="bg-white shadow-xl px-5 py-4 rounded-xl">
            <h3 className="text-3xl font-bold pb-4">دسته بندی محصولات</h3>
            <Row>
                {data.map((item) => (
                    <Col lg={2} key={item.id}>
                        <div className="bg-gray-200 rounded-tr-2xl rounded-bl-2xl text-center py-[35px]">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="img-fluid mx-auto h-16"
                            />
                            <p className="my-2">{item.title}</p>
                            <a href="#" className="flex items-center justify-center gap-x-2">
                                <span>مشاهده لیست قیمت</span>
                                <span>
                                    <IoMdArrowBack
                                        className="text-gray-900"
                                        size={"20px"}
                                        aria-hidden="true"
                                    />
                                </span>
                            </a>
                        </div>
                    </Col>
                ))}
            </Row>
            </Row>
        </Row>
    )
}