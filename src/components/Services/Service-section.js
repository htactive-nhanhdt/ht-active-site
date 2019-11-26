import React from "react"
import Card from "./Card"
import { graphql, useStaticQuery } from "gatsby"

const ServiceSection = ({ language, title, lead, tag_name }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/services/card/" } } }
      ) {
        edges {
          node {
            frontmatter {
              card_services {
                card_img
                card_lead
                card_title
                tag_card
                language
              }
            }
          }
        }
      }
    }
  `)
  const dataFromQuery = data.allMarkdownRemark.edges
  const keyword = language === "vi" ? null : language
  const rawData = dataFromQuery.filter(
    item => item.node.frontmatter.card_services.language === keyword  )  
  const listCardData = rawData.map(item => item.node.frontmatter.card_services)
  const filterTagData= listCardData.filter(item=> item.tag_card===tag_name)
  console.log(filterTagData)
  return (
    <div className="main col-md-12">
      <h1 className="page-title">{title}</h1>
      <div className="separator-2"></div>
      <p className="lead">{lead}</p>
      <div
        className="image-boxes isotope-container row"
        style={{
          position: "relative",
        }}
      >
        {filterTagData.map((item, index) => (
          <Card          
            key={index}
            image={item.card_img}
            title={item.card_title}
            content={item.card_lead}
          />
        ))}
      </div>
      <div className="clearfix"></div>
    </div>
  )
}
export default ServiceSection
