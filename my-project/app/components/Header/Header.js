"use client";
import { Col, Container, Row } from "react-bootstrap";
import { LuPhone } from "react-icons/lu";
import { TbMessages } from "react-icons/tb";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
export default function Header() {
  const textRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (textRef.current) {
      const text = textRef.current.textContent || "";
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        toast.success("شماره تماس کپی شد!", {
              position: "top-right",
              autoClose: 5000,
            });
        setTimeout(() => setCopied(false), 2000);
      })
    }
  };
  return (
    <div className="hidden xl:block bg-white !p-0 !m-0">
      {/* هدر سایت */}
      <Container className="py-4">
        <Row className="h-14">
          {/* لوگوی اصلی */}
          <Col lg={4} className="flex justify-center items-center">
            <h1 className="text-2xl font-bold" aria-label="فولاد مرکزی بافق">
              <span className="sr-only">صفحه اصلی فولاد الیاژی مرکزی بافق</span>
              فولاد الیاژی مرکزی بافق
            </h1>
          </Col>

          {/* منو ناوبری */}
          <Col lg={4} className="bg-[#F6F6F6] flex rounded-md justify-center items-center">
            <nav aria-label="منوی اصلی">
              <ul className="flex gap-x-4 font-bold">
                <li>
                  <a
                    href="/"
                    title="صفحه خانه"
                    aria-label="رفتن به صفحه خانه"
                    className="hover:text-[#292a71]"
                  >
                    خانه
                  </a>
                </li>
                <li>
                  <a
                    href="/news"
                    title="اخبار"
                    aria-label="مشاهده اخبار"
                    className="hover:text-[#292a71]"
                  >
                    اخبار
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    title="محصولات"
                    aria-label="مشاهده محصولات"
                    className="hover:text-[#292a71]"
                  >
                    محصولات
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    title="وبلاگ"
                    aria-label="مشاهده وبلاگ ها"
                    className="hover:text-[#292a71]"
                  >
                    وبلاگ
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    title="درباره ما"
                    aria-label="اطلاعات درباره ما"
                    className="hover:text-[#292a71]"
                  >
                    درباره ما
                  </a>
                </li>
              </ul>
            </nav>
          </Col>

          {/* شماره تماس و دکمه مشاوره */}
          <Col lg={4} className="flex justify-center items-center">
            {/* دکمه شماره تماس */}
            <div
              role="button"
              className="p-1 rounded-xl h-12 cursor-pointer"
              aria-label="تماس با شماره 09900175567"
              title="تماس"
            >
              <Row className="flex justify-center items-center">
                <Col onClick={handleCopy}>
                  <p className="text-[13px] text-gray-600">شماره تماس</p>
                  <p ref={textRef} className="font-bold text-[15px] -mx-3">
                  {copied ? "09900175567" : "09900175567"}
                  </p>
                </Col>
                <Col>
                  <LuPhone size={"22px"} aria-hidden="true" />
                </Col>
              </Row>
            </div>

            {/* دکمه مشاوره رایگان */}
            <button
              className="px-2 mx-3 bg-[#292a71] flex gap-x-2 p-1 h-12 rounded-xl justify-center items-center"
              aria-label="مشاوره رایگان"
              title="مشاوره رایگان"
            >
              <TbMessages className="text-gray-100" size={"30px"} aria-hidden="true" />
              <span className="text-gray-100">مشاوره رایگان</span>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
