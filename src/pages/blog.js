import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogContent from "../components/Blog/blog-content"
const Blog = ({data}) => {
  const posts = data[`blog_${"en"}`].edges
  return (
    <Layout>
      <SEO title="Blog" />;
      <BlogContent posts={posts}/>
    </Layout>
  )
}
export const query = graphql`
query {
  blog_en: allMarkdownRemark(filter: {frontmatter: {author_en: {ne: null}}}) {
    edges {
      node {
        frontmatter {
          author_en
          blog_date_en
          blog_title_en
          blog_description_en
          thumbnail_en
        }
        fields {
          slug
        }
      }
    }
  }
}
`
export default Blog
