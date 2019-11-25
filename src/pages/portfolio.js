import React from "react"
import { Parallax } from "react-parallax"
import PortfolioBanner from "../data/images/portfolio-3.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Portfolio/banner"
import PortfolioContent from "../components/Portfolio/portfolioContent"
const PortfolioPage = () => (
 <Layout>
   <SEO title="Portfolio" />
   <Parallax bgImage={PortfolioBanner} strength={500}>
     <div style={{ height: 400 }}>
       <Banner />
     </div>
   </Parallax>
   <PortfolioContent />
 </Layout>
)
export default PortfolioPage