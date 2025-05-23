import SwiperComponent from "../components/Section1_Slider/SwiperComponent";
import styles from "./page.module.css";
import Products from "../components/products/Products";
import Blog from "../components/blog/Blog";
import Services from "../components/Services/Services";
import StartStory from "../components/Start-Story/StartStory";
import ContactForm from "../components/Contact-Form/ContactForm";
import { Container } from "react-bootstrap";
import Chart from "../components/Chart/Chart";
export default function Home() {
  return (
    <>
      <SwiperComponent />
      <Container>
        <Products />
        <Services />
        <StartStory />
        <Chart/>
        <ContactForm />
        <Blog />
      </Container>
    </>
  );
}
