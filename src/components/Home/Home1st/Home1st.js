import React, { useState, useEffect } from "react"
import TextCenter from "../TextCenter/TextCenter"

import Home1stCard from "./Home1stCard"

const Services = () => {
  const [scrollY, setScrollY] = useState(0)
  const data = [
    {
      id: 1,
      icon: "fa fa-laptop",
      title: "Web applications",
      lead:
        "Design and develop web applications, hosting service, domain, SEO.",
    },
    {
      id: 2,
      icon: "fa fa-mobile",
      title: "Mobile Applications",
      lead:
        "Design and develop mobile applications, publish and app store optimization.",
    },
    {
      id: 3,
      icon: "fa fa-gamepad",
      title: "Mobile Games",
      lead:
        " Design and develop mobile games, publish and app store optimization.",
    },
  ]
  const logit = () => {
    if(window)
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
    <section
      className="main-container "
      style={{ marginTop: 0, backgroundColor: "#f1f1f1" }}
    >
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <TextCenter head="SERVICES" description="By using our services, you will get all of the great experience."/>
              <div className="row list-card">
                {data.map((item, index) => (
                  <Home1stCard
                    scrollY={scrollY}
                    key={item.id}
                    id={item.id}
                    icon={item.icon}
                    title={item.title}
                    lead={item.lead}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
