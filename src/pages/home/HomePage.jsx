import Layout from "../layout/Layout";
import SliderHome from "./components/SliderHome/SliderHome";
import './components/SliderHome/SliderHome.css'
import videoo from '../../assets/DEPORTES.mp4'

import { Animated } from "react-animated-css";


export default function HomePage() {

  /*
          <Animated animationIn="fadeInDown" animationInDuration={1400} isVisible={true}>
            </Animated>
          */
  return (

    <Layout>


      <section className="cont">

          <h1>NayaSport</h1>
      
      </section>

      <SliderHome />

    </Layout>

  )
}

