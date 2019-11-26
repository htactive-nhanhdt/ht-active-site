import React from "react"

import {graphql, useStaticQuery} from "gatsby"
import { connect } from "react-redux";



const WebApp = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark(filter: {fields: {slug: {regex: "/en/services/card/"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            card_services {
              card_img
              card_lead
              tag_card
            }
          }
        }
      }
    }
  }
  `)
  return (
    <section className="main-container" style={{ marginTop: "0px" }}>
      <div className="container">
        <div className="row">
        {console.log(data)}
        </div>
      </div>
    </section>
  )
}
const mapStateToProps = ({ language }) => {
  return { language }
}

export default connect(mapStateToProps)(WebApp)
