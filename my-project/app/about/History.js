import { Row } from "react-bootstrap";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

function History() {
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        slides: { perView: 1, spacing: 10 },
        breakpoints: {
          "(min-width: 640px)": { slides: { perView: 2, spacing: 15 } },
          "(min-width: 768px)": { slides: { perView: 3, spacing: 20 } },
          "(min-width: 1024px)": { slides: { perView: 4, spacing: 25 } },
        },
      });
      useEffect(() => {
        if (!slider) return;
        const interval = setInterval(() => {
          slider.current?.next(); // اسلاید بعدی را نمایش می‌دهد
        }, 3000); // تغییر اسلاید هر ۳ ثانیه
    
        return () => clearInterval(interval); // پاک کردن تایمر هنگام خروج از کامپوننت
      }, [slider]);
    return (
        <Row className="hover:!shadow-lg my-3 transition-all delay-200 hover:!cursor-pointer border-s-4 border-[#292A71] hover:border-opacity-90 !bg-gray-200 hover:rounded-xl rounded-e-xl p-3 !shadow-md">
        <h5 className="pt-2 text-justify h5">تاریخچه و افتخارات:</h5>
        <p className="pt-3 text-justify">تأسیس شرکت سهامی خاص فولاد آلیاژی مرکزی بافق در تاریخ ۱۴۰۱/۰۵/۰۲ به شماره ثبت ۱۷۰ و شناسه ملی ۱۴۰۱۰۴۴۴۲۴۴ ثبت و امضا ذیل دفاتر تکمیل گردیده که خلاصه آن جهت اطلاع عموم آگهی می‌گردد.
        موضوع فعالیت: تولید، ساخت و بسته‌بندی و خرید و فروش و پخش و توزیع کلیه کالاهای مجاز اعم از انواع فولاد و سوپر آلیاژ و روی، انواع محصولات پتروشیمی، پالایشی، شیمیایی، معدنی و فلزی و مواد معدنی، قطعات صنعتی، خدمات فنی و مهندسی، حمل و نقل و فنی و بازرگانی داخلی و بین‌المللی و صادرات و واردات ماشین‌آلات لازم، همچنین تولید لوازم مصرفی موردنیاز در کارخانجات داخل و خارج از کشور. 
        اختصاص شرکت به صادرات و واردات انواع کالا و محصول به سفارش اشخاص و شرکت‌های داخلی و خارجی با ارائه اختصاصی سفارش، خرید عمده و خرد مواد اولیه، انواع کالا، خدمات پس از فروش، گارانتی، ترخیص کالا، صادرات و واردات کلیه کالاهای مجاز بازرگانی، اخذ و اعطای نمایندگی داخلی و خارجی، کلیه فعالیت‌های الکترونیکی، مشارکت و اخذ و اعطای نمایندگی با اشخاص حقیقی و حقوقی داخلی و خارجی، خرید و فروش کلیه معادن و موادمعدنی و پیمان‌های مرتبط. 

        اخذ تسهیلات ریالی و ارزی از بانک‌های دولتی و غیردولتی داخلی و خارجی، کلیه خدمات و فعالیت‌های مرتبط با موضوع فعالیت. درصورت لزوم پس از اخذ مجوزهای لازم از مراجع ذی‌ربط.
        مدت فعالیت: از تاریخ ثبت به مدت نامحدود. مرکز اصلی: استان یزد، شهرستان بافق، شهرک صنعتی، بلوک ۶۶ طبقه همکف کدپستی ۷۸۳۱۷۵۵۳۹۹.
        سرمایه شخص حقوقی: مبلغ ۳۰۰,۰۰۰,۰۰۰ ریال منقسم به ۳۰۰,۰۰۰ سهم ۱,۰۰۰ ریالی که تماما پرداخت شده است.
        <br/>
        اعضا هیئت مدیره:<br/>
        - محمد مصطفی کریمی به شماره ملی ۱۸۰۲۳۶۹۸۰۹ به سمت رئیس هیئت مدیره به مدت ۳ سال<br/>
        - حمید رضا محمدی به شماره ملی ۱۴۰۰۳۲۶۴۳۲ به سمت عضو هیئت مدیره به مدت ۳ سال<br/>
        - نور محمد کرمی به شماره ملی ۰۹۱۴۹۴۳۲۳۸ به سمت عضو هیئت مدیره به مدت ۳ سال<br/>
        - علی رضا رضایی به شماره ملی ۵۷۱۹۱۷۴۵۶ به سمت مدیرعامل به مدت ۳ سال<br/>
        حق امضا: کلیه اوراق و اسناد بهادار و تعهدآور شرکت با امضای مدیرعامل و یکی از اعضای هیئت مدیره و مهر شرکت معتبر می‌باشد.
        <br/>
        طبق اساسنامه اولین مدیران و بازرسین برای مدت ۲ سال انتخاب گردیدند.
        <br/>
        شماره پیگیری: ۲۳۰۵۳۹۵۰۲۲۱۳۲۸</p>
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
    </Row>
    );
}
export default History;