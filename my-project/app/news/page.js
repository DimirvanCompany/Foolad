import { Col, Container, Row } from "react-bootstrap";
import Chart from "../../components/Chart/Chart";
import TopThreeNews from "../../components/news/TopThreeNews.js";
import NewsItem from "../../components/news/NewsItem.js";
import newsImage from "../../public/assets/images/Group.png"
import Link from 'next/link'
// import { Helmet } from 'react-helmet';
function News() {
    // export default const metadata = {
    //     title: 'اخبار امروز | سایت فولاد',
    //     description: 'تازه‌ترین اخبار و اطلاعیه‌ها',
    //   };
    const NewsData = [
        {
            id : 1,
            date : "شهریور 1404",
            title : "عنوان مقاله اول",
            image : "https://upload.wikimedia.org/wikipedia/commons/4/4f/Foolad_Mobarakeh7.jpg",
            category : "فولاد صنعت ایران",
            desc : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و باایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  استفاده از طراحان گرافیک است"
        },
        {
            id : 2,
            date : "دی 1403",
            title : "عنوان مقاله دوم",
            image : "https://upload.wikimedia.org/wikipedia/commons/4/4f/Foolad_Mobarakeh7.jpg",
            category : "فولاد مرکزی بافق",
            desc : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        },
        {
            id : 3,
            date : "تیر 1404",
            title : "عنوان مقاله سوم",
            image : "https://upload.wikimedia.org/wikipedia/commons/4/4f/Foolad_Mobarakeh7.jpg",
            category : "فولاد صنعت ایران",
            desc : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        }
        ,
        {
            id : 4,
            date : "فروردین 1404",
            title : "عنوان مقاله چهارم",
            image : "https://upload.wikimedia.org/wikipedia/commons/4/4f/Foolad_Mobarakeh7.jpg",
            category : "فولاد صنعت ایران",
            desc : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        },
        {
            id : 5,
            date : "اسفند 1403",
            title : "عنوان مقاله پنجم",
            image : "https://upload.wikimedia.org/wikipedia/commons/4/4f/Foolad_Mobarakeh7.jpg",
            category : "فولاد مرکزی بافق",
            desc : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاستلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاستلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاستلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاستلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاستلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاستلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاستلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاستلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاستلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاستلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفادهاستلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        },
    ];
    return (
        <Container className="m-auto mt-5">
                <Row className="my-3 m-auto flex flex-col gap-y-6">
                    <div className="relative h-[100px] justify-center flex flex-col items-center py-2 px-3 rounded-xl">
                        <div className="absolute inset-0 rounded-xl before:absolute before:top-0 before:left-0 before:w-16 before:h-16 before:border-t-4 before:border-l-4 before:border-[#292A71] before:rounded-tl-xl after:absolute after:bottom-0 after:right-0 after:w-16 after:h-16 after:border-b-4 after:border-r-4 after:border-[#292A71] after:rounded-br-xl"></div>
                        <div className="relative flex justify-center items-center border-[#292A71]" aria-label="title">
                            <h1 className="h1">اخبار</h1>
                        </div>
                    </div>
                </Row>
                <Row className="flex items-center justify-between">
                    <Col lg="6" className="my-5">
                        <Row className="flex flex-col gap-y-8">
                            <h1 className="h1">آخرین خبرها</h1>
                            <p className="text-justify">
                            لورم ایپسوم فارسی، تولید کننده متن ساختگی فارسی و انگلیسی برای طراحان وب و گرافیست ها همراه با امکان ایجاد متن تصادفی در طول‌های مختلف.
                            لورم ایپسوم فارسی، تولید کننده متن ساختگی فارسی و انگلیسی برای طراحان وب و گرافیست ها همراه با امکان ایجاد متن تصادفی در طول‌های مختلف.
                            </p>
                            <div className="flex justify-start w-full">
                                <Link href="#allNews" className="border-2 w-full !border-[#292a71] px-3 py-2 rounded-xl flex items-center justify-center gap-x-3 hover:!bg-[#292a71] hover:text-white duration-200">
                                    <span>دیدن همه خبرها</span>
                                </Link>
                            </div>
                        </Row>
                    </Col>
                    <Col lg="6" className="flex flex-col gap-y-6">
                        {
                            NewsData.slice(0 , 3).map( item => (
                                <TopThreeNews key={item.id} {...item} />
                            ) )
                        }
                    </Col>
                </Row>
                <Row id="allNews">
                    {
                        NewsData.map( item => (
                            <Col className="!mt-16" lg={4} key={item.id}>
                                <NewsItem {...item} />
                            </Col>
                        ) )
                    }
                </Row>
                <Row className="mt-5">
                    <Chart />
                </Row>
            </Container>
    );
}

export default News;