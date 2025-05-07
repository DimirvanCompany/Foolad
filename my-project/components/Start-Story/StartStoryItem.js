import { Col } from "react-bootstrap";

function StartStoryItem({ title, icon }) {
    return (
        <Col md={6} className="!text-[#292a71]">
            <div aria-labelledby={title} className="flex justify-start hover:text-gray-100 cursor-default hover:bg-[#292a71] transition delay-75 my-2 group gap-x-4 items-center p-6 bg-gray-100 rounded-xl">
                <div aria-hidden="true">{icon}</div>
                <p className="font-bold text-[14px]" aria-label={title}>{title}</p>
            </div>
        </Col>
    );
}

export default StartStoryItem;