import React from "react"
import CardBlog from "./blog-card"
import { ModalProvider } from "react-modal-hook"

const BlogContent = () => {
  const data = [
    {
      src:
        "https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png",
      postday: "15",
      postmonth: "Jun 2018",
      cardTitle: " Những Material component tuyệt vời trong React Native.",
      author: "Mạnh Nguyễn",
      cardContent: "Những Material component tuyệt vời trong React Native.",
      commend: "22 comment",
      tag: "tag1",
      linkImg:
        "https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png",
      linkBlog: "/blogPost",
    },
    {
      src:
        "https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png",
      postday: "15",
      postmonth: "Jun 2018",
      cardTitle: " Những Material component tuyệt vời trong React Native.",
      author: "Mạnh Nguyễn",
      cardContent: "Những Material component tuyệt vời trong React Native.",
      commend: "22 comment",
      tag: "tag1",
      linkImg:
        "https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png",
      linkBlog: "/blogPost",
    },
    {
      src:
        "https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png",
      postday: "15",
      postmonth: "Jun 2018",
      cardTitle: " Những Material component tuyệt vời trong React Native.",
      author: "Mạnh Nguyễn",
      cardContent: "Những Material component tuyệt vời trong React Native.",
      commend: "22 comment",
      tag: "tag1",
      linkImg:
        "https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png",
      linkBlog: "/blogPost",
    },
    {
      src:
        "https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png",
      postday: "15",
      postmonth: "Jun 2018",
      cardTitle: " Những Material component tuyệt vời trong React Native.",
      author: "Mạnh Nguyễn",
      cardContent: "Những Material component tuyệt vời trong React Native.",
      commend: "22 comment",
      tag: "tag1",
      linkImg:
        "https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png",
      linkBlog: "/blogPost",
    },
    {
      src:
        "https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png",
      postday: "15",
      postmonth: "Jun 2018",
      cardTitle: " Những Material component tuyệt vời trong React Native.",
      author: "Mạnh Nguyễn",
      cardContent: "Những Material component tuyệt vời trong React Native.",
      commend: "22 comment",
      tag: "tag1",
      linkImg:
        "https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png",
      linkBlog: "/blogPost",
    },
  ]
  return (
    <ModalProvider>
      <section className="main-container" style={{ marginTop: "10px" }}>
        <div className="container">
          <div className="row">
            {/* main start */}
            {/* ================ */}
            <div className="main col-md-12">
              <div className="masonry-grid row">
                {data.map((item, index) => (
                  <CardBlog
                    key={index}
                    src={item.src}
                    postday={item.postday}
                    postmonth={item.postmonth}
                    cardTitle={item.cardTitle}
                    author={item.author}
                    cardContent={item.cardContent}
                    commend={item.commend}
                    tag={item.tag}
                    linkImg={item.linkImg}
                    linkBlog={item.linkBlog}
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
