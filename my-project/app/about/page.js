"use client";
import { Container, Row } from "react-bootstrap";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
function About() {
    const [sliderRef] = useKeenSlider({
        loop: true,
        slides: { perView: 1, spacing: 10 }, // تنظیم پیش‌فرض (موبایل)
    
        breakpoints: {
          "(min-width: 640px)": { slides: { perView: 2, spacing: 15 } }, // برای تبلت کوچک (۲ اسلاید)
          "(min-width: 768px)": { slides: { perView: 3, spacing: 20 } }, // برای تبلت (۳ اسلاید)
          "(min-width: 1024px)": { slides: { perView: 4, spacing: 25 } }, // برای لپ‌تاپ (۴ اسلاید)
        },
      });
    return (
        <Container className="!px-4 my-3">
            <Row className="p-3">
                <h2 className="!border-s-4 !border-[#292A71] p-3 my-4">درباره ما</h2>
                <div className="hover:!shadow-lg my-3 transition-all delay-200 hover:!cursor-pointer border-s-4 border-[#292A71] hover:border-opacity-90 !bg-gray-200 hover:rounded-xl rounded-e-xl p-3 !shadow-md">
                    <h5 className="pt-2 text-justify h5">تاریخچه و افتخارات</h5>
                    <p className="pt-3 text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                    <div ref={sliderRef} className="keen-slider !mt-12 flex items-center">
                    <div className="keen-slider__slide w-[200px] h-auto">
                        <img className="rounded-xl" src="https://yazdanfoolad.com/wp-content/uploads/2023/10/MX-M264N_20231017_150635_003-min-scaled.webp" />
                    </div>
                    <div className="keen-slider__slide w-[200px] h-auto">
                        <img className="rounded-xl" src="https://yazdanfoolad.com/wp-content/uploads/2023/10/MX-M264N_20231017_150933_001-min-scaled.webp" />
                    </div>
                    <div className="keen-slider__slide w-[200px] h-auto">
                        <img className="rounded-xl" src="https://yazdanfoolad.com/wp-content/uploads/2023/10/1697529009167-min.webp" />
                    </div>
                    <div className="keen-slider__slide w-[200px] h-auto">
                        <img className="rounded-xl" src="https://yazdanfoolad.com/wp-content/uploads/2023/10/MX-M264N_20231017_150412_001-min-scaled.webp" />
                    </div>
                </div>
                </div>
                <div className="!border-s-4 !border-[#292A71] mt-2 mb-4 shadow-md hover:rounded-xl transition-all delay-150 hover:shadow-lg p-4 rounded-e-xl bg-gray-100">
                <h5 className="pt-2 text-justify h5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم؟</h5>
                <p className="pt-3 text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                </div>
                <div className="hover:!shadow-lg my-3 transition-all delay-200 hover:!cursor-pointer border-s-4 border-[#292A71] hover:border-opacity-90 !bg-gray-200 hover:rounded-xl rounded-e-xl p-3 !shadow-md">
                    <h5 className="pt-2 text-justify h5">آدرس</h5>
                    <p className="pt-3 text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشدلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                </div>
                
            </Row>
        </Container>
    );
}

export default About;