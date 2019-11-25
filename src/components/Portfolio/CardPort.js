import React from "react"

const CardPort = ({ image, title, content, link }) => {
  return (
    <div className="col-md-3 col-sm-6 isotope-item fWeb fade-in-bottom-1">
      <div className="image-box">
        <div className="overlay-container">
          <img src={image} alt={title} />
        </div>
        <div className="image-box-body">
          <h3 className="title">
            <a href={link}>{title}</a>
          </h3>
          <p className="cutline">{content}</p>
          <a href={link} className="link">
            <span>Read More</span>
          </a>
        </div>
      </div>
    </div>
  )
}
export default CardPort
