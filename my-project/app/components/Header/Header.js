import { Col, Container, Row } from "react-bootstrap";

export default function Header() {
  return (
    <Container>
      <Row className="h-14">
        <Col lg={4} className="bg-red-500 flex justify-center items-center">
          <h1 className="text-2xl font-bold">فولاد مرکزی بافق</h1>
        </Col>
        <Col lg={4} className="bg-green-500 flex justify-center items-center">
          <ul className="flex gap-x-4 font-bold">
            <li>
              <a href="/" title="صفحه خانه" aria-label="صفحه خانه">
                خانه
              </a>
            </li>
            <li>
              <a href="/news" title="اخبار" aria-label="اخبار">
                اخبار
              </a>
            </li>
            <li>
              <a href="/products" title="محصولات" aria-label="محصولات">
                محصولات
              </a>
            </li>
            <li>
              <a href="/weight-table" title="جدول وزنی" aria-label="جدول وزنی">
                جدول وزنی
              </a>
            </li>
            <li>
              <a href="/about" title="درباره ما" aria-label="درباره ما">
                درباره ما
              </a>
            </li>
          </ul>
        </Col>
        <Col lg={4} className="bg-yellow-500 flex justify-center items-center">
          <button>
            <Row>
                <Col>
                    <p>شماره تماس</p>
                    <p>09900175567</p>
                </Col>
                <Col></Col>
            </Row>
          </button>
        </Col>
      </Row>
    </Container>
  );
}
