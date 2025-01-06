function ServiceItem({ icon, title, text }) {
    return (
        <div className="my-3 h-[250px] relative flex flex-col items-center p-12 bg-white rounded-xl shadow-md">
            <div className="absolute inset-0 rounded-xl border border-gray-300 before:absolute before:top-0 before:left-0 before:w-16 before:h-16 before:border-t-4 before:border-l-4 before:border-[#292A71] before:rounded-tl-xl after:absolute after:bottom-0 after:right-0 after:w-16 after:h-16 after:border-b-4 after:border-r-4 after:border-[#292A71] after:rounded-br-xl"></div>
            <div className="relative flex justify-center items-center w-12 h-12 mb-4 rounded-full border-b-2 border-[#292A71]" aria-label="آیکن خدمات">
                {icon}
            </div>
            <h4 className="relative text-[14px] font-bold" aria-label={title}>{title}</h4>
            <p className="relative text-[10px] text-gray-600 text-center mt-4" aria-label={text}>{text}</p>
        </div>
    );
}

export default ServiceItem;