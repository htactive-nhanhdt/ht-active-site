import React from "react"
import { graphql } from "gatsby"
import Home2nd from "../components/Home/Home2nd/Home2nd"
import Home3rd from "../components/Home/Home3rd/Home3rd"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FooterTop from "../components/FooterTop/FooterTop"
import Banner from "../components/Home/banner"
import BannerHome from "../components/BannerHome/BannerHome"
import PageTop from "../components/Home/pageTop"
import Services from "../components/Home/Home1st/Home1st"
import { connect } from "react-redux"
import Helmet from "react-helmet"

const IndexPage = ({ data, color, footer }) => {
  return (
    <Layout footer={footer}>
      <Helmet></Helmet>
      <SEO title="Home" color={color} />
      <Banner></Banner>
      <PageTop />
      <Services color={color} />
      {/* <Home2nd test={data} color={color} />
      <BannerHome />
      <Home3rd test={data} /> */}
      <FooterTop />
    </Layout>
  )
}

const mapStateToProps = ({ color, footer }) => {
  return { color, footer }
}
export default connect(mapStateToProps, null)(IndexPage)

export const query = graphql`
  query {
    why: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            home_why_vn {
              tab1_vn {
                tab_desc_vn
                tab_img_vn
                tab_title_vn
              }
              tab2_vn {
                tab_desc_vn
                tab_img_vn
                tab_title_vn
              }
              tab3_vn {
                tab_desc_vn
                tab_img_vn
                tab_title_vn
              }
              tab4_vn {
                tab_desc_vn
                tab_img_vn
                tab_title_vn
              }
            }
          }
        }
      }
    }
    about: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            home_about_vn {
              panel_vn1 {
                home_box_desc_vn
                home_box_title_vn
                home_boxe_icon_vn
              }
              panel_vn2 {
                home_box_desc_vn
                home_box_title_vn
                home_boxe_icon_vn
              }
              panel_vn3 {
                home_box_desc_vn
                home_box_title_vn
                home_boxe_icon_vn
              }
              panel_vn4 {
                home_box_desc_vn
                home_box_title_vn
                home_boxe_icon_vn
              }
            }
          }
        }
      }
    }
  }
`
