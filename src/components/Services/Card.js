import React from "react"

const Card = ({ image, title, content }) => {
 
  return (
    <div className="col-md-3 col-sm-6 isotope-item web-design">
      <div className="image-box">
        <div className="overlay-container">
          <img src={image} alt={title} />
        </div>
        <div className="image-box-body service-card">
          <h3 className="title">
            <span>{title}</span>
          </h3>
          <p className="cutline">{content}</p>
          <a href="/product-detail/1/" className="link hidden">
            <span>Read More</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
