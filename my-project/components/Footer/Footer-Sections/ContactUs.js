import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
function ContactUs() {
    return (
        <Col lg={4} md={6} className="flex flex-col !mt-12 gap-y-5">
            <ul className="flex flex-col gap-y-4">
                <Row className="text-[#292a71] mb-2 p-2">ارتباط با ما</Row>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href="tel:03531453395"
                        aria-label="شماره تماس"
                        title="شماره تماس"
                    >
                        <span className="flex text-sm items-center gap-x-2">
                            <FaPhone size="20px" />
                            035-31453395
                        </span>
                    </Link>
                </li>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href="mailto:bcasco2023@gmail.com"
                        aria-label="ایمیل"
                        title="ایمیل"
                    >
                        <span className="flex text-sm items-center gap-x-1">
                            <MdEmail size="20px" />
                            bcasco2023@gmail.com
                        </span>
                    </Link>
                </li>
                <li className="hover:text-blue-900 transition duration-200 delay-100">
                    <Link
                        href={"/"}
                        aria-label="آدرس"
                        title="آدرس"
                    >
                        <span className="flex text-sm items-center gap-x-2">
                            <CiLocationOn size="20px" />
                            بافق - شهرک آهن شهر - روبروی تصفیه خانه آب - پلاک 395
                        </span>
                    </Link>
                </li>
            </ul>
        </Col>
    );
}

export default ContactUs;