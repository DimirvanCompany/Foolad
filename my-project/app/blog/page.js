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
        <Container className="m-auto !px-0 mt-5">
        <Row className="">
          <p className="text-center text-2xl my-2 font-bold text-gray-900">
            بلاگ های ما
          </p>
          <hr className="text-gray-300" />
          {Items.map((item) => (
            <Col md={6} lg={4} key={item.id}>
              <BlogItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    );
}