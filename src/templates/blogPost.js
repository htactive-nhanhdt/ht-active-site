import React,{useState, useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const BlogPost = (props) => {
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
    <Layout>
      <SEO title="Blog" />
      <section className={`main-container ${scrollY>182?"solveBlink":""}`}>
        <div className="container">
          <div className="row">
            {/* main start */}
            {/* ================ */}
            <div className="main col-md-8">
              {/* page-title start */}
              {/* ================ */}
              <h1 className="page-title">
                Những Material component tuyệt vời trong React Native.
              </h1>
              {/* page-title end */}
              {/* blogpost start */}
              <article className="clearfix blogpost full">
                <div className="blogpost-body">
                  <div className="side">
                    <div className="post-info">
                      <span className="day">15</span>
                      <span className="month">Jun 2018</span>
                    </div>
                    <div id="affix" className="affix-top">
                      <span className="share">Share this</span>
                      <div id="share" className="sharrre">
                        <ul className="social-links clearfix">
                          <li className="facebook">
                            <a href="/">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li className="twitter">
                            <a href="/">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li className="googleplus">
                            <a href="/">
                              <i className="fa fa-google-plus" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="blogpost-content">
                    <header>
                      <div className="submitted">
                        <i className="fa fa-user pr-5" /> by{" "}
                        <a href="/">Mạnh Nguyễn</a>
                      </div>
                    </header>
                    <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
                  </div>
                  {}
                </div>
              </article>
              {/* blogpost end */}
            </div>
            {/* main end */}
            {/* sidebar start */}
            <aside className="col-md-3 col-md-offset-1">
              <div className="sidebar">
                <div className="block clearfix">
                  <h3 className="title">Related posts</h3>
                  <div className="separator" />
                  <div className="image-box">
                    
                  </div>
                  <div className="image-box">
    
                    <div className="image-box-body">
                      <h3 className="title">
                        <a href="news-detail/2/huong-dan-assembly-64-bit">
                          Hướng dẫn Assembly 64bit.
                        </a>
                      </h3>
                      <p>
                        Suốt hàng ngàn năm, con người đã sử dụng các ngôn ngữ
                        lập trình để bắt máy tính phải “hiểu" mình và làm theo
                        mệnh lệnh của mình. Các bạn đừng bị thầy cô lừa dối, bởi
                        vì máy tính vốn chỉ hiểu một ngôn ngữ duy nhất, đó là
                        ngôn ngữ máy (machine code).
                      </p>
                      <a
                        href="news-detail/2/huong-dan-assembly-64-bit"
                        className="link"
                      >
                        <span>Read more</span>
                      </a>
                    </div>
                  </div>
                  <div className="image-box">
                    <div className="image-box-body">
                      <h3 className="title">
                        <a href="news-detail/3/huong-dan-assembly-64-bit-bai-2">
                          Hướng dẫn Assembly 64bit - Bài 2.
                        </a>
                      </h3>
                      <p>
                        Tiếp theo bài trước, sau khi các bác đã có 1 chương
                        trình hoàn chỉnh hiển thị dòng chữ “Hello World!”, bài
                        này sẽ hướng dẫn các bạn viết một hàm hoàn chỉnh trong
                        assembly nhằm mục đích mô-đun hoá ứng dụng.
                      </p>
                      <a
                        href="news-detail/3/huong-dan-assembly-64-bit-bai-2"
                        className="link"
                      >
                        <span>Read more</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            {/* sidebar end */}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPost
export const query = graphql`
query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
  }
}
`
