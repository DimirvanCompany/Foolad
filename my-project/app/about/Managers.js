function Managers({image , semat , title}) {
    return (
            <div className="my-3 relative flex  flex-col gap-y-4 justify-center items-center p-12 bg-gray-200 rounded-2xl shadow-lg">
                <div className="absolute inset-0 rounded-xl  before:absolute before:top-0 before:left-0 before:w-16 before:h-16 before:border-t-4 before:border-l-4 before:border-[#292A71] before:rounded-tl-xl after:absolute after:bottom-0 after:right-0 after:w-16 after:h-16 after:border-b-4 after:border-r-4 after:border-[#292A71] after:rounded-br-xl"></div>
                <div className="relative flex justify-center items-center mb-4 border-b-2 border-[#292A71]" aria-label="تصویر مدیران ، سهامداران ، هیئت مدیران">
                <img className="rounded-lg" src={image} />
                </div>
                <h4 className="relative text-[14px] font-bold" aria-label={title}>{title}</h4>
                <p className="relative text-[13.5px] text-justify text-gray-600" aria-label={semat}>{semat}</p>
            </div>
    );
}
export default Managers;