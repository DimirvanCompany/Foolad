import { Row , Col } from "react-bootstrap";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
function Adress() {
    const position = [35.6892, 51.3890]; // تهران
    return (
        <Row className="hover:!shadow-lg my-3 transition-all delay-200 hover:!cursor-pointer border-s-4 border-[#292A71] hover:border-opacity-90 !bg-gray-200 hover:rounded-xl rounded-e-xl p-3 !shadow-md">
                    <h5 className="pt-2 text-justify h5">آدرس:</h5>
                    <Col lg={12}>
                      <div className="my-4">
                      <p className="text-justify">
                      بافق - شهرک آهن شهر - پلاک 495
                      </p>
                      </div>
                      <div className="my-4">
                        {/* <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
                          <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                          <Marker position={position}>
                            <Popup>
                              <a
                                href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                مشاهده در گوگل مپ
                              </a>
                            </Popup>
                          </Marker>
                        </MapContainer> */}
                      </div>
                    </Col>
                </Row>
    );
}
export default Adress;