"use client";
import { Col, Container, Row } from "react-bootstrap";
import { LuPhone } from "react-icons/lu";
import { TbMessages } from "react-icons/tb";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import styles from './page.module.css';

export default function Header() {
  const textRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      });
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* هدر اصلی برای دسکتاپ (بزرگ‌تر از 768px) */}
      <div className="xl:block hidden bg-white !p-0 !m-0">
        <Container className="py-4">
          <Row className="h-14">
            <Col lg={4} className="flex justify-center items-center">
              <h1 className="text-md font-bold" aria-label="فولاد مرکزی بافق">
                <span className="sr-only">صفحه اصلی فولاد الیاژی مرکزی بافق (سهامی خاص)</span>
                فولاد الیاژی مرکزی بافق (سهامی خاص)
              </h1>
            </Col>
            <Col lg={4} className="bg-[#F6F6F6] flex rounded-md justify-center items-center">
              <nav aria-label="منوی اصلی">
                <ul className="flex gap-x-4 font-bold">
                  <li>
                    <Link
                      href="/"
                      title="صفحه خانه"
                      aria-label="رفتن به صفحه خانه"
                      className="hover:text-[#292a71]"
                    >
                      خانه
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news"
                      title="اخبار"
                      aria-label="مشاهده اخبار"
                      className="hover:text-[#292a71]"
                    >
                      اخبار
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Documents"
                      title="اسناد مناقصه و مزایده"
                      aria-label="اسناد مناقصه و مزایده"
                      className="hover:text-[#292a71]"
                    >
                      اسناد مناقصه و مزایده
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      title="وبلاگ"
                      aria-label="مشاهده وبلاگ ها"
                      className="hover:text-[#292a71]"
                    >
                      وبلاگ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      title="درباره ما"
                      aria-label="اطلاعات درباره ما"
                      className="hover:text-[#292a71]"
                    >
                      درباره ما
                    </Link>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col lg={4} className="flex justify-center items-center">
              <div
                role="button"
                className="p-1 rounded-xl h-12 cursor-pointer flex items-center phoneContainer"
                aria-label="تماس با شماره 09940970918"
                title="تماس"
              >
                <div className="flex justify-center items-center gap-x-6">
                  <div onClick={handleCopy} className="flex items-center justify-center">
                    <p className="text-[13px] font-bold">شماره تماس</p>
                  </div>
                  <div className="flex items-center gap-x-6 justify-center">
                    <p ref={textRef} className="font-bold text-[15px] -mx-3">
                      {copied ? "09940970918" : "09940970918"}
                    </p>
                    <LuPhone size={"20px"} aria-hidden="true" />
                  </div>
                </div>
              </div>
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

      {/* هدر برای تبلت و موبایل (زیر 768px) */}
      <div className="xl:hidden flex justify-around items-center p-4">
      <div className="flex justify-start items-center gap-x-4">
        {/* دکمه همبرگری */}
        <button onClick={toggleSidebar} aria-label="باز کردن منو">
          <FiMenu size={30} />
        </button>
        <h1 className="text-[12px] flex gap-y-2 flex-col font-bold" aria-label="فولاد مرکزی بافق">
          <span className="sr-only">صفحه اصلی فولاد الیاژی مرکزی بافق (سهامی خاص)</span>
          فولاد الیاژی مرکزی بافق <br/> <span>(سهامی خاص)</span>
        </h1>
      </div>
        {/* شماره تماس */}
        <div className="flex flex-col gap-y-2 phoneContainer">
          <div
            role="button"
            className="p-2 rounded-xl cursor-pointer"
            aria-label="تماس با شماره 09940970918"
            title="تماس"
          >
            <Row className="flex items-center">
              <Col onClick={handleCopy}>
                <p className="text-[13px] text-gray-600">شماره تماس</p>
                <p ref={textRef} className="font-bold text-[15px]">
                  {copied ? "09940970918" : "09940970918"}
                </p>
              </Col>
              <Col>
                <LuPhone size={"22px"} aria-hidden="true" />
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/* سایدبار برای تبلت و موبایل (زیر 768px) */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        <Container>
          <Row className="h-auto">
            <Col className="p-4">
              {/* دکمه بستن سایدبار */}
              <div className="flex justify-between items-center mb-4">
              <h1 className="text-[12px] flex gap-y-2 flex-col font-bold" aria-label="فولاد مرکزی بافق">
                <span className="sr-only">صفحه اصلی فولاد الیاژی مرکزی بافق (سهامی خاص)</span>
                فولاد الیاژی مرکزی بافق <br/> <span>(سهامی خاص)</span>
              </h1>
                <button onClick={closeSidebar} aria-label="بستن منو">
                  <FiX size={30} />
                </button>
              </div>
              <nav aria-label="منوی اصلی">
                <ul className="flex flex-col gap-y-2 font-bold">
                  <li>
                    <Link
                      href="/"
                      title="صفحه خانه"
                      aria-label="رفتن به صفحه خانه"
                      className="hover:text-[#292a71]"
                      onClick={closeSidebar}
                    >
                      خانه
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news"
                      title="اخبار"
                      aria-label="مشاهده اخبار"
                      className="hover:text-[#292a71]"
                      onClick={closeSidebar}
                    >
                      اخبار
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Documents"
                      title="اسناد مناقصه و مزایده"
                      aria-label="اسناد مناقصه و مزایده"
                      className="hover:text-[#292a71]"
                      onClick={closeSidebar}
                    >
                      اسناد مناقصه و مزایده
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      title="وبلاگ"
                      aria-label="مشاهده وبلاگ ها"
                      className="hover:text-[#292a71]"
                      onClick={closeSidebar}
                    >
                      وبلاگ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      title="درباره ما"
                      aria-label="اطلاعات درباره ما"
                      className="hover:text-[#292a71]"
                      onClick={closeSidebar}
                    >
                      درباره ما
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="mt-4 flex flex-col gap-y-4">
                <button
                  className="px-2 bg-[#292a71] flex gap-x-2 p-2 rounded-xl justify-center items-center"
                  aria-label="مشاوره رایگان"
                  title="مشاوره رایگان"
                >
                  <TbMessages className="text-gray-100" size={"30px"} aria-hidden="true" />
                  <span className="text-gray-100">مشاوره رایگان</span>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Overlay برای بستن سایدبار با کلیک روی پس‌زمینه */}
      {isSidebarOpen && (
        <div
          className={styles.overlay}
          onClick={closeSidebar}
          aria-label="بستن سایدبار"
        />
      )}
    </>
  );
}