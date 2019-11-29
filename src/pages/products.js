import React from "react"
import {connect} from "react-redux"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Portfolio/banner"
import PortfolioContent from "../components/Portfolio/portfolioContent"

const PortfolioPage = ({language, data}) => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Banner language={language} />
      <PortfolioContent  language={language} dataCategories={data.allMarkdownRemark.edges}/>
    </Layout>
  )
}
const mapStateToProps = ({ language }) => {
  return { language }
}
export const query=graphql`
{
  allMarkdownRemark(filter: {fields: {slug: {regex: "/en/portfolio/categories/"}}}) {
    edges {
      node {
        frontmatter {
          portfolio_category {
            category_title
            id
            language
            tag_name
          }
        }
      }
    }
  }
}
`
export default connect(mapStateToProps)(PortfolioPage)

