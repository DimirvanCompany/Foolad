import { FiTruck } from "react-icons/fi";
import { BsLayersHalf } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa6";
import { MdHighQuality } from "react-icons/md";
import carpenter from "../../../public/image/carpenter.jpg"
import Glassblower from "../../../public/image/glassblower.png"
import wearingHard from "../../../public/image/wearing-hard.png"
export const data = [
    {
        id: 1,
        title: "تامین اجناس با بهترین کیفیت",
        icon: <MdHighQuality size="30px" color="#aac5db" aria-hidden="true" />
    },
    {
        id: 2,
        title: "حمل ونقل مطمئن و سریع",
        icon: <FiTruck size="30px" color="#aac5db" aria-hidden="true" />
    },
    {
        id: 3,
        title: "فروش بدون واسطه",
        icon: <BsLayersHalf size="30px" color="#aac5db" aria-hidden="true" />
    },
    {
        id: 4,
        title: "نازلترین قیمت بازار",
        icon: <FaHandshake size="30px" color="#aac5db" aria-hidden="true" />
    },
]
export const images = [
    {
        id: 1,
        image: carpenter
    },
    {
        id: 2,
        image: Glassblower
    },
    {
        id: 3,
        image: wearingHard
    },
]