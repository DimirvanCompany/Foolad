import { Container } from "react-bootstrap";
import SwiperComponent from "./components/Section1_Slider/SwiperComponent";
import styles from "./page.module.css";
import Products from "./components/products/Products";
import Blog from "./components/blog/Blog";
export default function Home() {
  return (
      <div>
        <SwiperComponent />
        <Products />
        <Blog />
      </div>
  );
}
