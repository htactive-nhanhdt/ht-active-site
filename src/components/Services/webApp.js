import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ServiceSection from "./Service-section"


const WebApp = ({ language }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/services/categories/" } } }
      ) {
        edges {
          node {
            frontmatter {
              service_category {
                category_lead
                category_title
                language
                tag_name
                id
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
  console.log(keyword)
  const categories = rawData.map(item => item.node.frontmatter.service_category).sort((a,b)=>a.id-b.id)
  return (
    <section className="main-container" style={{ marginTop: "0px" }}>
      <div className="container">
        <div className="row">
          {categories.map((item, index) => (
            <ServiceSection
              key={index}
              title={item.category_title}
              lead={item.category_lead !== "empty" ? item.category_lead : ""}
              language={language}
              tag_name={item.tag_name}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WebApp
