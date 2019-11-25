import React from "react"
import { Parallax } from "react-parallax"
import ServiceBanner from "../data/images/portfolio-5.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Services/banner"
import WebApp from "../components/Services/webApp"
const Services = () => (
 <Layout>
   <SEO title="Services" />
   <Parallax bgImage={ServiceBanner} strength={500}>
     <div style={{ height: 400 }}>
       <Banner />
     </div>
   </Parallax>
   <WebApp />
 </Layout>
)
export default Services