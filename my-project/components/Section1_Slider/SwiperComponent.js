// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { Pagination, Autoplay } from "swiper/modules";
// import { Col, Row } from "react-bootstrap";
// import Image from "next/image";
// import { TbMessages } from "react-icons/tb";
// import { IoMdArrowBack } from "react-icons/io";
// import slider1 from "@/public/assets/images/slider1.jpg"
// import slider2 from "@/public/assets/images/slider2.jpg"
// export default function SwiperComponent() {
//   const data = [
//     {
//       id: 1,
//       image: slider1,
//       title: "Slide 1",
//       description: "تصویر محصولات فولادی صنعتی و ساختمانی", // توضیح برای تصویر
//     },
//     {
//       id: 2,
//       image: slider2,
//       title: "Slide 2",
//       description: "تصویر محصولات فولادی صنعتی و ساختمانی شماره ۲", // توضیح برای تصویر
//     },
//   ];

//   return (
//     <div className="relative bg-white">
//       <Swiper
//         pagination={{
//           dynamicBullets: true,
//         }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper absolute"
//       >
//         {data.map((item) => (
//           <SwiperSlide key={item.id} className="h-16">
//             <section aria-labelledby={`slide-title-${item.id}`}>
//               <Row>
//                 <Col lg={6} className="lg:bg-[#292a71] xs:hidden lg:flex lg:justify-end ">
//                 <img
//                       src="@/public/assets/images/slider1.jpg"
//                       alt="Picture of the author"
//                       className="lg:-ml-[170px] sm:ml-0 img-fluid h-[700px]"
//                 />
//                 </Col>
//                 <Col lg={6} className="flex flex-col items-center">
//                   <h2
//                     id={`slide-title-${item.id}`}
//                     className="mt-[150px] mb-[30px] xs:text-3xl text-[50px] w-[400px] text-center"
//                   >
//                     تهیه و توزیع محصولات فولادی{" "}
//                     <span className="font-bold">صنعتی و ساختمانی</span>
//                   </h2>
//                   <div className="flex">
//                     <button
//                       className="px-2 mx-3 bg-[#292a71] flex gap-x-2 p-1 h-12 rounded-xl justify-center items-center"
//                       aria-label="مشاوره رایگان"
//                       title="مشاوره رایگان"
//                     >
//                       <TbMessages
//                         className="text-gray-100"
//                         size={"30px"}
//                         aria-hidden="true"
//                       />
//                       <span className="text-gray-100">مشاوره رایگان</span>
//                     </button>
//                     <button
//                       className="px-2 mx-3 bg-[#F6F6F6] flex gap-x-2 p-1 h-12 rounded-xl justify-center items-center"
//                       aria-label="بیشتر بخوانید"
//                       title="بیشتر بخوانید"
//                     >
//                       <span className="text-gray-900">بیشتر بخوانید</span>
//                       <IoMdArrowBack
//                         className=" text-gray-900"
//                         size={"25px"}
//                         aria-hidden="true"
//                       />
//                     </button>
//                   </div>
//                 </Col>
//               </Row>
//             </section>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
// //اضافع کردن brack point xs
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { TbMessages } from "react-icons/tb";
import { IoMdArrowBack } from "react-icons/io";

import slider1 from "@/public/assets/images/slider1.jpg";
import slider2 from "@/public/assets/images/slider2.jpg";

export default function SwiperComponent() {
  const data = [
    {
      id: 1,
      image: slider1,
      title: "Slide 1",
      description: "تصویر محصولات فولادی صنعتی و ساختمانی",
    },
    {
      id: 2,
      image: slider2,
      title: "Slide 2",
      description: "تصویر محصولات فولادی صنعتی و ساختمانی شماره ۲",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper absolute"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <section aria-labelledby={`slide-title-${item.id}`}>
              <Row className="m-5">
                <Col
                  lg={6}
                  className="hidden lg:flex lg:justify-end"
                >
                  <Image
                    src={item.image}
                    alt={item.description}
                    className="object-cover h-full w-full rounded-xl"
                    width={700}
                    height={700}
                    priority
                  />
                </Col>
                <Col lg={6} className="flex flex-col items-center">
                  <h2
                    id={`slide-title-${item.id}`}
                    className="mt-[150px] mb-[30px] text-[32px] md:text-[50px] w-[90%] text-center"
                  >
                    تهیه و توزیع محصولات فولادی{" "}
                    <span className="font-bold">صنعتی و ساختمانی</span>
                  </h2>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button
                      className="px-4 bg-[#292a71] flex gap-x-2 p-1 h-12 rounded-xl justify-center items-center"
                      aria-label="مشاوره رایگان"
                      title="مشاوره رایگان"
                    >
                      <TbMessages
                        className="text-gray-100"
                        size={30}
                        aria-hidden="true"
                      />
                      <span className="text-gray-100">مشاوره رایگان</span>
                    </button>
                    <button
                      className="px-4 bg-[#F6F6F6] flex gap-x-2 p-1 h-12 rounded-xl justify-center items-center"
                      aria-label="بیشتر بخوانید"
                      title="بیشتر بخوانید"
                    >
                      <span className="text-gray-900">بیشتر بخوانید</span>
                      <IoMdArrowBack
                        className="text-gray-900"
                        size={25}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Col>
              </Row>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
