import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ServiceSection from "./Service-section"


const WebApp = ({ language }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/categories/" } } }
      ) {
        edges {
          node {
            frontmatter {
              service_category {
                category_lead
                category_title
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
    item => item.node.frontmatter.service_category.language === keyword
  )
  const categories = rawData.map(item => item.node.frontmatter.service_category)
  return (
    <section className="main-container" style={{ marginTop: "0px" }}>
      <div className="container">
        <div className="row">
          {categories.map((item, index) => (
            <ServiceSection
              key={index}
              title={item.category_title}
              lead={item.category_lead !== "1" ? item.category_lead : ""}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WebApp
