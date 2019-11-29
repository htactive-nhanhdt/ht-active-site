import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import CardPort from "./CardPort"

const PortfolioContent = ({ language, dataCategories }) => {
  const [active, setActive] = useState("all")

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/portfolio/card/" } } }
      ) {
        edges {
          node {
            frontmatter {
              card_portfolio {
                card_img
                card_lead
                card_slug
                card_title
                language
                tag_card
                cardId
              }
            }
          }
        }
      }
    }
  `)
  const dataFromQuery = data.allMarkdownRemark.edges
  const rawData = dataFromQuery.filter(
    item => item.node.frontmatter.card_portfolio.language === language
  )
  const cardData = rawData.map(item=> item.node.frontmatter.card_portfolio).sort((a,b)=> a.cardId- b.cardId)
  const filterData= active==="all"?cardData:cardData.filter(item=> item.tag_card===active)

  const categories = dataCategories.map(
    item => item.node.frontmatter.portfolio_category
  )
  

  return (
    <section className="main-container">
      <div className="container">
        <div className="row">
          {/* main start */}
          {/* ================ */}
          <div className="main col-md-12">
            <div className="shield"></div>
            <div className="filters">
              <ul className="nav nav-pills">
                <li 
                className={`${active === "all" ? "active" : " "}`}
                onClick={()=> setActive("all")}                
                >
                  <p>All</p>
                </li>
                {categories.map((item, index) => (
                  <li
                    key={index}
                    className={`${(active === item.tag_name )? "active" : " "}`}
                    onClick={()=> setActive(item.tag_name)}
                  >
                   <p>{item.category_title}</p> 
                  </li>
                ))}
              </ul>
            </div>
            {/* isotope filters end */}
            {/* portfolio items start */}
            <div
              className="image-boxes isotope-container row"
              style={{               
                position: "relative",
              }}
            >
              {filterData.map((item, index) => (
                <CardPort
                  key={index}
                  title={item.card_title}
                  image={item.card_img}
                  content={item.card_lead}
                  link={item.card_slug}
                  tag={item.tag_card}
                />
                ))}
             
            </div>
            {/* portfolio items end */}
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </section>
  )
}
export default PortfolioContent
