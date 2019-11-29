import React from "react"
import { connect } from "react-redux"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Services/banner"
import WebApp from "../components/Services/webApp"

const Services = ({ language }) => {
  return (
    <Layout>
      <SEO title="Services" />
      <Banner language={language} />
      <WebApp language={language} />
    </Layout>
  )
}
const mapStateToProps = ({ language }) => {
  return { language }
}

export default connect(mapStateToProps)(Services)
