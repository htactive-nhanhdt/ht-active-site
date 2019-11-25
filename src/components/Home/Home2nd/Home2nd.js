import React from "react"
import "../Home2nd/Home2nd.css"
import ParagraphLeft from "../Home2nd/ParagraphLeft/ParagraphLeft"
import { Collapse } from "antd"
import QueueAnim from "rc-queue-anim"
import TextCenter from "../TextCenter/TextCenter"
const { Panel } = Collapse
export default ({ color, test }) => {
  const dataUse = test.about.edges[1].node.frontmatter.home_about_vn || {}
  const dataArr = Object.values(dataUse).map(item => item) || []
  const fontAwesome = [
    "fa fa-gavel customwidth",
    "fa fa-star customwidth",
    "fa fa-usd customwidth",
    "fa fa-weixin customwidth",
  ]
  const extraNode = index => <i className={fontAwesome[index]}></i>
  const dataRender = dataArr.map((item, index) => (
    <Panel
      header={item.home_box_title_vn}
      key={index + 1}
      extra={extraNode(index)}
      showArrow={false}
    >
      <p>{item.home_box_desc_vn}</p>
    </Panel>
  ))
  return (
    <section className="main-container">
      <div className="container">
        <TextCenter 
        head="ABOUT HT ACTIVE" 
        description="HT Active is the team of Young and Brilliant people. We will help and support all you need about Software Solutions. We’re developers, designers, support specialists and gamers. We have all you needs." />
        <div className="row home2nd">
          <ParagraphLeft color={color} />
          <div className="col-lg-6 col-md-12">
            <div>
              <QueueAnim className="demo-content">
                <Collapse className="panel-group" accordion
                defaultActiveKey={1}>
                  {dataRender}
                </Collapse>
              </QueueAnim>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
