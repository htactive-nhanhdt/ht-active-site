import React from "react"
import Card  from "./Card"

const ServiceSection =()=> {
    return (
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
    )
}
export default ServiceSection
