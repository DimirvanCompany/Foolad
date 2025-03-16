import { Col, Container, Row } from "react-bootstrap";
import BlogItem from "./BlogItem";


export default function Blog(){

    const Items = [
        {
          id: 1,
          image : 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Foolad_Mobarakeh7.jpg',
          title: "فواید شگفت‌انگیز خوردن سیر با معده خالی",
          desc: "روزی مهندسی سیگاری عاشق پرستاری شد پرستار شرط ازدواج با او را ترک سیگار گذاشت مرد قبول کرد . در دوران نامزدیشان از شوق و شور ازدواج مرد سیگار را ترک کرد ولی بعد از ازدواج مشکلات زیادی سر راه آنها قرار گرفت که مرد باره دیگر به",
        },
        {
          id: 2,
          image : 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Foolad_Mobarakeh7.jpg',
          title: "فواید شگفت‌انگیز خوردن سیر با معده خالی",
          desc: "همه شما از خواص سیر آگاهید و می‌دانید سیر یکی از پر خاصیت‌ترین سبزی‌ها به شمار می‌رود. از جمله مصارف سیر به صورت خام، چاشنی در غذاها و ترشی است. اما آیا سیر را با معده‌ خالی میل کرده اید؟ آیا از خواص سیر ناشتا چیزی می‌دانید؟ بی شک",
        },
        {
          id: 3,
          image : 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Foolad_Mobarakeh7.jpg',
          title: "فواید شگفت‌انگیز خوردن سیر با معده خالی",
          desc: "همه شما از خواص سیر آگاهید و می‌دانید سیر یکی از پر خاصیت‌ترین سبزی‌ها به شمار می‌رود. از جمله مصارف سیر به صورت خام، چاشنی در غذاها و ترشی است. اما آیا سیر را با معده‌ خالی میل کرده اید؟ آیا از خواص سیر ناشتا چیزی می‌دانید؟ بی شک",
        },
        {
          id: 4,
          image : 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Foolad_Mobarakeh7.jpg',
          title: "فواید شگفت‌انگیز خوردن سیر با معده خالی",
          desc: "همه شما از خواص سیر آگاهید و می‌دانید سیر یکی از پر خاصیت‌ترین سبزی‌ها به شمار می‌رود. از جمله مصارف سیر به صورت خام، چاشنی در غذاها و ترشی است. اما آیا سیر را با معده‌ خالی میل کرده اید؟ آیا از خواص سیر ناشتا چیزی می‌دانید؟ بی شک",
        },
        {
          id: 5,
          image : 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Foolad_Mobarakeh7.jpg',
          title: "فواید شگفت‌انگیز خوردن سیر با معده خالی",
          desc: "همه شما از خواص سیر آگاهید و می‌دانید سیر یکی از پر خاصیت‌ترین سبزی‌ها به شمار می‌رود. از جمله مصارف سیر به صورت خام، چاشنی در غذاها و ترشی است. اما آیا سیر را با معده‌ خالی میل کرده اید؟ آیا از خواص سیر ناشتا چیزی می‌دانید؟ بی شک",
        },
        {
          id: 6,
          image : 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Foolad_Mobarakeh7.jpg',
          title: "فواید شگفت‌انگیز خوردن سیر با معده خالی",
          desc: "همه شما از خواص سیر آگاهید و می‌دانید سیر یکی از پر خاصیت‌ترین سبزی‌ها به شمار می‌رود. از جمله مصارف سیر به صورت خام، چاشنی در غذاها و ترشی است. اما آیا سیر را با معده‌ خالی میل کرده اید؟ آیا از خواص سیر ناشتا چیزی می‌دانید؟ بی شک",
        },
        {
          id: 7,
          image : 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Foolad_Mobarakeh7.jpg',
          title: "فواید شگفت‌انگیز خوردن سیر با معده خالی",
          desc: "همه شما از خواص سیر آگاهید و می‌دانید سیر یکی از پر خاصیت‌ترین سبزی‌ها به شمار می‌رود. از جمله مصارف سیر به صورت خام، چاشنی در غذاها و ترشی است. اما آیا سیر را با معده‌ خالی میل کرده اید؟ آیا از خواص سیر ناشتا چیزی می‌دانید؟ بی شک",
        },
        {
          id: 8,
          image : 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Foolad_Mobarakeh7.jpg',
          title: "فواید شگفت‌انگیز خوردن سیر با معده خالی",
          desc: "همه شما از خواص سیر آگاهید و می‌دانید سیر یکی از پر خاصیت‌ترین سبزی‌ها به شمار می‌رود. از جمله مصارف سیر به صورت خام، چاشنی در غذاها و ترشی است. اما آیا سیر را با معده‌ خالی میل کرده اید؟ آیا از خواص سیر ناشتا چیزی می‌دانید؟ بی شک",
        },
        {
          id: 9,
          image : 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Foolad_Mobarakeh7.jpg',
          title: "فواید شگفت‌انگیز خوردن سیر با معده خالی",
          desc: "همه شما از خواص سیر آگاهید و می‌دانید سیر یکی از پر خاصیت‌ترین سبزی‌ها به شمار می‌رود. از جمله مصارف سیر به صورت خام، چاشنی در غذاها و ترشی است. اما آیا سیر را با معده‌ خالی میل کرده اید؟ آیا از خواص سیر ناشتا چیزی می‌دانید؟ بی شک",
        },
      ];

    return (
        <Container className="m-auto mt-5">
        <Row>
        <Col lg={12} className="my-3 px-5 flex flex-col gap-y-6">
                <div className="relative h-[100px] justify-center flex flex-col items-center py-2 px-3 rounded-xl">
                    <div className="absolute inset-0 rounded-xl before:absolute before:top-0 before:left-0 before:w-16 before:h-16 before:border-t-4 before:border-l-4 before:border-[#292A71] before:rounded-tl-xl after:absolute after:bottom-0 after:right-0 after:w-16 after:h-16 after:border-b-4 after:border-r-4 after:border-[#292A71] after:rounded-br-xl"></div>
                    <div className="relative flex justify-center items-center border-[#292A71]" aria-label="title">
                        <h1 className="h1">وبلاگ</h1>
                    </div>
                </div>
            </Col>
          {Items.map((item) => (
            <Col md={6} lg={4} key={item.id}>
              <BlogItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    );
}