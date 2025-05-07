import Image from "next/image";
function StartStoryImage({ image }) {
    return (
        <div className="select-none image flex justify-center items-center">
            <Image
                src={image}
                alt="تصویری از محصولات فولادی - کیفیت و استحکام"
                className="rounded-full border-t-4 border-[#292a71] object-cover size-[400px]"
                width={400}
                height={350}
            />
        </div>
    );
}

export default StartStoryImage;