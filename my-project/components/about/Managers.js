import { FaMinus } from "react-icons/fa";
function Managers({image , semat , title , text}) {
    return (
            <div className="my-3 relative p-4 rounded-2xl bg-gray-300">
                <div className="absolute inset-0 rounded-xl before:absolute before:top-0 before:left-0 before:w-16 before:h-16 before:border-t-4 before:border-l-4 before:border-[#292A71] before:rounded-tl-xl after:absolute after:bottom-0 after:right-0 after:w-16 after:h-16 after:border-b-4 after:border-r-4 after:border-[#292A71] after:rounded-br-xl"></div>
                <div className="relative flex justify-center items-center mb-4" aria-label="تصویر مدیران ، سهامداران ، هیئت مدیران">
                <img className="rounded-lg" src={image} />
                </div>
                <h4 className="py-2 relative flex justify-start items-center gap-x-2 h4 text-[18px] font-bold" aria-label={title}>
                <FaMinus/> {title}
                </h4>
                <p className="py-2 relative flex justify-start items-center gap-x-2 text-[14px]" aria-label={semat}>
                <FaMinus/>  سمت : {semat}</p>
                <h5 className="py-2 relative flex justify-start items-center gap-x-2 h5 text-[14px]" aria-label={text}><FaMinus/> {text}</h5>
            </div>
    );
}
export default Managers;