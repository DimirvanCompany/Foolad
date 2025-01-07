import { Col, Form, Row , Container } from "react-bootstrap";
import styles from "./ContactForm.module.css"
import Link from "next/link";
import Image from "next/image";
import contact from "../../../public/assets/images/contact.png"
function ContactForm() {
    return (
        <Container className="!px-0">
            <Row className="py-2 border-2 !border-[#292a71] !mt-[350px] bg-gray-100 px-3 mx-2 rounded-xl flex items-center justify-center">
            <Col lg={6} className="flex flex-col mt-[-200px] items-center">
                <Image
                    src={contact}
                    alt="قطعات فولادی" className="mb-6 select-none"
                    width={400}
                    height={400}
                />
            </Col>
            <Col lg={6} className="border-2 !border-[#292a71] bg-gray-100 mt-[-300px] shadow-md rounded-xl !p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">فرم تماس سریع</h2>
                <p className="text-gray-600 text-sm mb-6">برای راحتی شما عزیزان می‌توانید اطلاعات خود را در کادر زیر وارد کنید تا کارشناسان آژگون فولاد با شما تماس بگیرند.</p>
                <Form action="#" method="POST">
                    <div className="mb-4">
                        <label required htmlFor="name" className="text-gray-700 px-2 text-sm mb-2">نام کامل</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#292a71]" placeholder="نام کامل خود را وارد کنید" />
                    </div>
                    <div className="mb-4">
                        <label required htmlFor="phone" className="text-gray-700 px-2 text-sm mb-2">شماره تماس</label>
                        <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#292a71]" placeholder="شماره تماس خود را وارد کنید" />
                    </div>
                    <div className="mb-4">
                        <label required htmlFor="time" className="text-gray-700 px-2 text-sm mb-2">تعیین ساعت تماس</label>
                        <select id="time" name="time" className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#292a71]">
                            <option value="morning">صبح</option>
                            <option value="afternoon">بعدازظهر</option>
                            <option value="evening">عصر</option>
                        </select>
                    </div>
                    <div className="btns w-full mt-3 flex gap-x-2 items-center">
                        <a
                            href="#"
                            className="bg-[#292a71] group transition delay-100 hover:bg-[#1c1d61] z-10 w-full flex gap-x-2 p-1 text-[12px] sm:text-[16px] h-12 rounded-xl justify-center items-center"
                            aria-label="ارسال"
                            title="ارسال"
                        >
                            <span className="text-gray-100">ارسال</span>
                        </a>
                    </div>
                </Form>
                <Row className="my-3 text-[#292a71] text-center py-4 px-6 rounded-xl flex items-center">
                    <Col lg={6} className={`${styles.Experts} flex items-center justify-center border-2 !border-[#292a71] h-[100px]`}>
                        <p className="text-[14px] font-bold">کارشناسان فولاد مرکزی بافق در کنار شما هستند!</p>
                    </Col>
                    <Col lg={6} className={`justify-center border-2 !border-[#292a71] flex items-center h-[100px] ${styles.ExpertsTel}`}>
                        <p className="text-sm mt-2">تماس با کارشناسان: <Link href={`tel:${3538202020}`} className="font-bold">035-8202020</Link></p>
                    </Col>
                </Row>
            </Col>
        </Row>
        </Container>
    );
}
export default ContactForm;