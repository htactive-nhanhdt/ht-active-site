import React, { useState } from "react"
import BannerAnim from "rc-banner-anim"
import QueueAnim from "rc-queue-anim"
import Slide1 from "../../data/images/slider-1.jpg"
import Slide2 from "../../data/images/slider-background.jpg"
import Slide3 from "../../data/images/slider-3.jpg"
import MacImg from "../../data/images/slider-2.png"
import BannerLeft from "./bannerLeft"
import ProgressBar from "./progressBar"

const { Element } = BannerAnim
const BgElement = Element.BgElement
const Banner = () => {
  const [showbar, setBar] = useState(true)
  const handleProgressBar = e => {
    if (e === "after") {
      setBar(true)
    } else { 
      setBar(false)
    }
  }

  const data = [
    {
      bg: `${Slide1}`,
      title: "HT Active - Professional Software Solutions",
      lead: "Provide Best Services+New Technology+Best Quality+Support 24/7",
      more: "And much more ...",
      img: "",
    },

    {
      bg: `${Slide2}`,
      title: "We Provide All You Need",
      lead: "Website Application+Windows Application+Mobile Application+Game",
      more: "And more software solutions...",
      img: `${MacImg}`,
    },
    {
      bg: `${Slide3}`,
      title: "Satisfaction Is What You Need",
      lead:
        "Clean and unique design+After sale support+Cross-Browser/ Cross-Platform Compatible+Young and Brilliant Team",
      more: "Dont miss out!",
      img: "",
    },
  ]
  return (
    <div className="banner">
      <BannerAnim
        autoPlay
        autoPlaySpeed={10000}
        autoPlayEffect={false}
        onChange={e => handleProgressBar(e)}
      >
        {data.map((item, index) => (
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
              {showbar && (
                <BannerLeft
                  title={item.title}
                  lead={item.lead}
                  more={item.more}
                />
              )}
            </QueueAnim>
            <div>
              
            </div>
            {item.img !== "" && (
              <img
                src={`${item.img}`}
                alt="mac"
                className="macImg fade-in-right-4"
              />
            )}
          </Element>
        ))}
      </BannerAnim >
      {showbar && <ProgressBar />}
    </div>
  )
}
export default Banner
