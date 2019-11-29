import React,{useState, useEffect} from "react"
import CardBlog from "./blog-card"
import { ModalProvider } from "react-modal-hook"

const BlogContent = ({posts}) => {
  const [scrollY, setScrollY] = useState(0)
  const logit = () => {
    setScrollY(window.pageYOffset)
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  }, [])
  
  return (
    <ModalProvider>
      <section className={`main-container ${scrollY>182?"solveBlink":""} `} style={{ marginTop: "10px" }}>
        <div className="container">
          <div className="row">
            {/* main start */}
            {/* ================ */}
            <div className="main col-md-12">
              <div className="masonry-grid row">
                {posts.map((item, index) => (
                  <CardBlog
                    key={index}
                    src={item.node.frontmatter[`thumbnail_${"en"}`]}
                    postday={item.node.frontmatter[`blog_date_${"en"}`].substring(8,10)}
                    postmonth={item.node.frontmatter[`blog_date_${"en"}`].substring(5,7)}
                    postyear={item.node.frontmatter[`blog_date_${"en"}`].substring(0,4)}
                    cardTitle={item.node.frontmatter[`blog_title_${"en"}`]}
                    author={item.node.frontmatter[`author_${'en'}`]}
                    cardContent={item.node.frontmatter[`blog_description_${'en'}`]}
                    linkImg={item.node.frontmatter[`thumbnail_${'en'}`]}
                    linkBlog={item.node.fields.slug}
                  />
                ))}
              </div>
              {/* masonry grid end */}
            </div>
          </div>
        </div>
      </section>
    </ModalProvider>
  )
}
export default BlogContent
