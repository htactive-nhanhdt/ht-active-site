import React, { useState } from "react"
import CardPort from "./CardPort"

import Img1 from "../layoutCss/assets/voc/images/max-market.jpg"

const PortfolioContent = () => {
  const data = [
    {
      image: Img1,
      title: "Max Market",
      content:
        "Max Market is the best website to advertise, buy and sell goods. User can post their notice, and search for products",
      link: "/subPortfolio",
      tag: "web",
    },
    {
      image: Img1,
      title: "Max Market",
      content:
        "Max Market is the best website to advertise, buy and sell goods. User can post their notice, and search for products",
      link: "/subPortfolio",
      tag: "web",
    },
    {
      image: Img1,
      title: "Max Market",
      content:
        "Max Market is the best website to advertise, buy and sell goods. User can post their notice, and search for products",
      link: "/subPortfolio",
      tag: "mobile-app",
    },
    {
      image: Img1,
      title: "Max Market",
      content:
        "Max Market is the best website to advertise, buy and sell goods. User can post their notice, and search for products",
      link: "product-detail/2/max-market",
      tag: "web",
    },
    {
      image: Img1,
      title: "Max Market",
      content:
        "Max Market is the best website to advertise, buy and sell goods. User can post their notice, and search for products",
      link: "/subPortfolio",
      tag: "mobile-game",
    },
    {
      image: Img1,
      title: "Max Market",
      content:
        "Max Market is the best website to advertise, buy and sell goods. User can post their notice, and search for products",
      link: "/subPortfolio",
      tag: "mobile-app",
    },
  ]
  const [products, setProducts] = useState(data)
  const [active, setActive] = useState(1)
  const handleFilter = value => {
    setActive(value)
    if (value === "all") {
      setProducts(data)
    } else {
      let dataFilter = data.filter(item => item.tag === value)
      setProducts(dataFilter)
    }

    return
  }

  return (
    <section className="main-container">
      <div className="container"> 
        <div className="row">
          {/* main start */}
          {/* ================ */}
          <div className="main col-md-12">
          <div className="shield"></div>
            <div className="filters">
              <ul className="nav nav-pills">
                <li
                  className={`${active === "all" ? "active" : " "}`}
                  onClick={() => handleFilter("all")}
                >
                  <p>All</p>
                </li>
                <li
                  className={`${active === "web" ? "active" : " "}`}
                  onClick={() => handleFilter("web")}
                >
                  <p>Web</p>
                </li>
                <li
                  className={`${active === "mobile-app" ? "active" : " "}`}
                  onClick={() => handleFilter("mobile-app")}
                >
                  <p>Mobile Application</p>
                </li>
                <li
                  className={`${active === "mobile-game" ? "active" : " "}`}
                  onClick={() => handleFilter("mobile-game")}
                >
                  <p>Mobile Game</p>
                </li>
              </ul>
            </div>
            {/* isotope filters end */}
            {/* portfolio items start */}
            <div
              className="image-boxes isotope-container row"
              style={{
                display: "block",
                position: "relative",
              }}
            >
              {products.map((item, index) => (
                <CardPort
                  key={index}
                  title={item.title}
                  image={item.image}
                  content={item.content}
                  link={item.link}
                  tag={item.tag}
                />
              ))}
            </div>
            {/* portfolio items end */}
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </section>
  )
}
export default PortfolioContent
