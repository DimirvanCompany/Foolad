import Link from "next/link";
import { Col, Row } from "react-bootstrap";

function PracticaLinks() {
    return (
        <Col lg={3} md={6} className="flex flex-col !mt-12 gap-y-5">
            <ul className="flex flex-col gap-y-4">
                <Row className="text-[#292a71] mb-2 p-2">لینک های کاربردی</Row>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/news"}
                        aria-label="اخبار"
                        title="اخبار"
                    >
                        <span>اخبار</span>
                    </Link>
                </li>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/Documents"}
                        aria-label="اسناد مناقصه و مزایده"
                        title="اسناد مناقصه و مزایده"
                    >
                        <span>اسناد مناقصه و مزایده</span>
                    </Link>
                </li>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/blog"}
                        aria-label="وبلاگ"
                        title="وبلاگ"
                    >
                        <span>وبلاگ</span>
                    </Link>
                </li>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/about"}
                        aria-label="درباره ما"
                        title="درباره ما"
                    >
                        <span>درباره ما</span>
                    </Link>
                </li>
            </ul>
        </Col>
    );
}

export default PracticaLinks;