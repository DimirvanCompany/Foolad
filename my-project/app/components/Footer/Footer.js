import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import logo from "../../../public/assets/images/Logo.png"
import group from "../../../public/assets/images/Group.png"
import PopularProducts from "./Footer-Sections/PopularProducts";
import PracticaLinks from "./Footer-Sections/PracticaLinks";
import ContactUs from "./Footer-Sections/ContactUs";
// import { useTranslation } from 'react-i18next';

function Footer() {
    // const { t } = useTranslation();
    return (
        <Container fluid className="max-w-full mt-[200px] pt-20 pb-3 bg-[#292a71] border-2 !border-[#292a71] rounded-t-[250px]">
            <Container className="mt-[-200px]">
                <Row className="flex items-top bg-gray-100 border-2 rounded-[50px] p-4 !border-[#292a71]">
                    <Col lg={6} className="flex flex-col gap-y-6">
                        <Image
                            src={logo}
                            alt="لوگو فولاد مرکزی بافق"
                            className="object-cover size-[200px]"
                            width={400}
                            height={350}
                        />
                        <p className="text-justify leading-9 pe-16">
                            {/* {t('foolad_footer_text')} */}
                        </p>
                        <Row className="flex items-center">
                            <Col lg={12} className="flex justify-center items-center gap-x-6">
                                <h5 className="h5 font-semibold">
                                    نماد های اعتماد
                                </h5>
                                <Image
                                    src={group}
                                    alt="نماد های اعتماد"
                                    className="object-cover size-[auto]"
                                /></Col>
                        </Row>
                    </Col>
                    {/* <PopularProducts /> */}
                    <PracticaLinks />
                    <ContactUs />
                </Row>
            </Container>
        </Container>
    );
}

export default Footer;