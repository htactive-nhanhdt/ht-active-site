import React, { useState, useEffect } from "react"
import BannerAnim from "rc-banner-anim"
import QueueAnim from "rc-queue-anim"


import MacImg from "../../data/images/slider-2.png"
import BannerLeft from "./bannerLeft"
import ProgressBar from "./progressBar"

const { Element } = BannerAnim
const BgElement = Element.BgElement
const Banner = ({ data, language, changeSlug }) => {
  const dataUse = data.frontmatter[`slide_${language}`] || {}
  const dataArr = Object.values(dataUse).map(item => item) || []
  
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

  const [showbar, setBar] = useState(true)
  const handleProgressBar = e => {
    if (e === "after") {
      setBar(true)
    } else {
      setBar(false)
    }
  }

  const data2 = [
    {
      bg: dataArr[6],
      title: dataArr[0],
      lead: dataArr[3][0],
      img: "",
    },

    {
      bg: dataArr[7],
      title: dataArr[1],
      lead: dataArr[4][0],
      img: `${MacImg}`,
    },
    {
      bg: dataArr[8],
      title: dataArr[2],
      lead: dataArr[5][0],
      img: "",
    },
  ]
  return (
    <div className={`banner ${scrollY>182?"solveBlink":""}`}>
      <BannerAnim
        autoPlay
        autoPlaySpeed={10000}
        autoPlayEffect={false}
        onChange={e => handleProgressBar(e)}
      >
        {data2.map((item, index) => (
          <Element
            key={index}
            prefixCls="banner-user-elem"
            className="container"
          >
            <BgElement
              key="bg"
              className="bg"
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${item.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            />
            <QueueAnim
              name="QueueAnim"
              className={`col-sm-10 banner-left-wrapper`}
            >
              {showbar && <BannerLeft title={item.title} lead={item.lead} />}
            </QueueAnim>
            <div></div>
            {item.img !== "" && (
              <img
                src={`${item.img}`}
                alt="mac"
                className="macImg fade-in-right-4"
              />
            )}
          </Element>
        ))}
      </BannerAnim>
      {showbar && <ProgressBar />}
    </div>
  )
}

export default Banner




