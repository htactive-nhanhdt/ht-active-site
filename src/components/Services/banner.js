import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Banner = ({ language }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fields: { slug: { regex: "/banner/" } } }) {
        edges {
          node {
            frontmatter {
              banner_services {
                banner_lead
                banner_title
                language
              }
            }
          }
        }
      }
    }
  `)
  const dataFromQuery= data.allMarkdownRemark.edges
  const keyword= language==="vi"?null:language;
  const rawData= dataFromQuery.find((item)=>item.node.frontmatter.banner_services.language===keyword);
  const bannerData=rawData.node.frontmatter.banner_services
  return (
    <div
      className="banner-page"
      style={{
        backgroundImage: `${bannerData.banner_img}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="shield"></div>
      <div className="container banner-lead">
        <div className="space-top"></div>
        <h1>{bannerData.banner_title}</h1>
        <div className="separator-2"></div>
        <p className="lead">
         {bannerData.banner_lead.split(".")[0]}.
         <br/>
         {bannerData.banner_lead.split(".")[1]}.
         <br/>
         {bannerData.banner_lead.split(".")[2]}.
         <br/>

        </p>
      </div>
    </div>
  )
}
export default Banner
