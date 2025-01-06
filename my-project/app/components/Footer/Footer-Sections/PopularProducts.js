import Link from "next/link";
import { Col, Row } from "react-bootstrap";

function PopularProducts() {
    return (
        <Col lg={2} md={4} className="flex !mt-12 flex-col gap-y-5">
            <ul className="flex flex-col gap-y-4">
                <Row className="text-[#292a71] mb-2 p-2">محصولات پرطرفدار</Row>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/"}
                        aria-label="تیرآهن"
                        title="تیرآهن"
                    >
                        <span>تیرآهن</span>
                    </Link>
                </li>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/"}
                        aria-label="ورق"
                        title="ورق"
                    >
                        <span>ورق</span>
                    </Link>
                </li>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/"}
                        aria-label="میلگرد"
                        title="میلگرد"
                    >
                        <span>میلگرد</span>
                    </Link>
                </li>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/"}
                        aria-label="مشتقات میلگرد"
                        title="مشتقات میلگرد"
                    >
                        <span>مشتقات میلگرد</span>
                    </Link>
                </li>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/"}
                        aria-label="لوله"
                        title="لوله"
                    >
                        <span>لوله</span>
                    </Link>
                </li>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/"}
                        aria-label="فولاد آلیاژی"
                        title="فولاد آلیاژی"
                    >
                        <span>فولاد آلیاژی</span>
                    </Link>
                </li>
            </ul>
        </Col>
    );
}

export default PopularProducts;