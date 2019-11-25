import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogContent from "../components/Blog/blog-content"
const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />;
      <BlogContent/>
    </Layout>
  )
}

export default Blog
