import { Row , Col } from "react-bootstrap";
// import dynamic from 'next/dynamic';

// const MapLeaflet = dynamic(() => import('./MapLeaflet.js'), {
//   ssr: true,
// });
function Adress() {
    
    return (
        <Row className="hover:!shadow-lg m-auto my-5 transition-all delay-200 hover:!cursor-pointer border-s-4 border-[#292A71] hover:border-opacity-90 !bg-gray-200 hover:rounded-xl rounded-e-xl p-3 !shadow-md">
          <h5 className="pt-2 text-justify h5">آدرس:</h5>
          <Col lg={12}>
            <div className="my-4">
            <p className="text-justify">
            بافق - شهرک آهن شهر - روبروی تصفیه خانه آب - پلاک 395
            </p>
            </div>
            <div style={{ width: '100%', height: '400px' }}>
            <iframe
              src="https://www.google.com/maps?q=31.616459,55.431743&hl=fa&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
          </Col>
        </Row>
    );
}
export default Adress;