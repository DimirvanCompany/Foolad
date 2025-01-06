import Link from "next/link";
import { Col, Row } from "react-bootstrap";

function PracticaLinks() {
    return (
        <Col lg={2} md={4} className="flex flex-col !mt-12 gap-y-5">
            <ul className="flex flex-col gap-y-4">
                <Row className="text-[#292a71] mb-2 p-2">لینک های کاربردی</Row>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/"}
                        aria-label="وبلاگ"
                        title="وبلاگ"
                    >
                        <span>وبلاگ</span>
                    </Link>
                </li>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/"}
                        aria-label="خدمات"
                        title="خدمات"
                    >
                        <span>خدمات</span>
                    </Link>
                </li>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/"}
                        aria-label="درباره ما"
                        title="درباره ما"
                    >
                        <span>درباره ما</span>
                    </Link>
                </li>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/"}
                        aria-label="تماس با ما"
                        title="تماس با ما"
                    >
                        <span>تماس با ما</span>
                    </Link>
                </li>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/"}
                        aria-label="سوالات متداول"
                        title="سوالات متداول"
                    >
                        <span>سوالات متداول</span>
                    </Link>
                </li>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/"}
                        aria-label="قوانین مقررات"
                        title="قوانین مقررات"
                    >
                        <span>قوانین مقررات</span>
                    </Link>
                </li>
            </ul>
        </Col>
    );
}

export default PracticaLinks;