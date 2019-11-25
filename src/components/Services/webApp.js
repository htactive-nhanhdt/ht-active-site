import React from "react"
import Card from "./Card"
import Image1 from "../layoutCss/assets/voc/images/web-outsourcing.jpg"
import Image2 from "../layoutCss/assets/voc/images/shopping-website.jpg"
import Image3 from "../layoutCss/assets/voc/images/cms-site.jpg"
import Image4 from "../layoutCss/assets/voc/images/bds-site.jpg"
import Image5 from "../layoutCss/assets/voc/images/hosting-cloud.jpg"
import Image6 from "../layoutCss/assets/voc/images/website-maintenance.jpg"

import Mobile1 from "../layoutCss/assets/voc/images/game-cocos.jpg"
import Mobile2 from "../layoutCss/assets/voc/images/game-unity.png"
import Mobile3 from "../layoutCss/assets/voc/images/game-admod.png"

import MobileApp from "../layoutCss/assets/voc/images/cross-platform.jpg"

const WebApp = () => {
  const data = [
    {
      image: Image1,
      title: "Web Programing",
      content:
        "Outsourcing &amp; web design on demand, not only business requirements but also technical requirements and system architecture.",
    },
    {
      image: Image2,
      title: "Shopping website",
      content:
        "Generate a shopping website base on existing template with the best price.",
    },
    {
      image: Image3,
      title: "Integration with 3rd",
      content:
        "Design and develop CMS sites, Portals for  education, business, medical...",
    },
    {
      image: Image4,
      title: "Real estate",
      content:
        "Design and develop Websites for finding houses, real estate, house for rent...",
    },
    {
      image: Image6,
      title: "Web maintenance",
      content:
        "Operating, maintenance, upgrade, repair, create more features... for exesting website.",
    },
    {
      image: Image5,
      title: "Website hosting",
      content:
        "Operating, maintenance, upgrade, repair, create more features... for exesting website.",
    },
  ]
  const data2 = [
    {
      image: Mobile1,
      title: "Game with cocos2d",
      content:
        "Design, develop, publish, advertise mobile game in Cocos game engine.",
    },
    {
      image: Mobile2,
      title: "Game with Unity",
      content:
        "Design, develop, publish, advertise mobile game in Unity game engine..",
    },
    {
      image: Mobile3,
      title: "Integration with 3rd",
      content:
        "Integrate game with advertise, social network, IAP... Publish game in IOS, Android, Windows Phone store.",
    }
  ]
  const data3 = [
    {
      image: MobileApp,
      title: "Cross Platform Application",
      content:
        "Building mobile applications running on multiple platforms Xamarin, Ionic, ReactNative, NativeScript ...",
    },
  ]
  return (
    <section className="main-container" style={{ marginTop: "0px" }}>
      <div className="container">
        <div className="row">

          <div className="main col-md-12">
            <h1 className="page-title">WEB APPLICATION</h1>
            <div className="separator-2"></div>
            <p className="lead"></p>
            <div
              className="image-boxes isotope-container row"
              style={{
                position: "relative",
              
              }}
            >
              {data.map(item => (
                <Card
                  key={item.title}
                  image={item.image}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
            <div className="clearfix"></div>
          </div>

          <div className="main col-md-12">
            <h1 className="page-title">MOBILE GAME</h1>
            <div className="separator-2"></div>
            <p className="lead"></p>
            <div
              className="image-boxes isotope-container row"
              style={{
                position: "relative",
               
              }}
            >
              {data2.map(item => (
                <Card
                  key={item.title}
                  image={item.image}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
            <div className="clearfix"></div>
          </div>

          
          <div className="main col-md-12">
            <h1 className="page-title">MOBILE APPLICATION</h1>
            <div className="separator-2"></div>
            <p className="lead"></p>
            <div
              className="image-boxes isotope-container row"
              style={{
                position: "relative"            
              }}
            >
              {data3.map(item => (
                <Card
                  key={item.title}
                  image={item.image}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WebApp
