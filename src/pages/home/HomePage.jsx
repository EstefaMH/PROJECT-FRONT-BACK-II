import Layout from "../layout/Layout";
import SliderHome from "./components/SliderHome/SliderHome";
import './components/SliderHome/SliderHome.css';

export default function HomePage() {
  return (
    <Layout>
      <section className="container">
          <h1>NayaSport</h1>
      </section>
      <SliderHome />
    </Layout>
  )
}

