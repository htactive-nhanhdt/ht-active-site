import React, { useState, useEffect, useRef } from "react"
import { connect } from "react-redux"

import ItemSlider from "./SubSliderItem"
import BigSlider from "./bigSlider"


const SubSlider = ({changeHideHeader, listImg}) => {
  const [item, setItem] = useState(1)
  const [openBigSlider, setOpenSlider] = useState(false)
  
  const prevItemRef = useRef()
  useEffect(() => {
    prevItemRef.current = item
  })
  const prevItem = prevItemRef.current

  const handleOpenSlider = (value) => {
      setOpenSlider(value)
      changeHideHeader(!value)
  }
  return (
    <div className="tab-pane">
      {openBigSlider && <BigSlider listImg={listImg}  handleOpenSlider={handleOpenSlider}/>}
      <div
        className={`owl-carousel content-slider-with-controls-bottom owl-theme `}
        style={{ opacity: 1, display: "block" }}
      >
        <div 
        className="owl-wrapper-outer" 
        style={{ height: "500px"}}
        >
          <div
            className="owl-wrapper"
            style={{ width: "100%",left: "0px", display: " block" }}
          >
            {listImg.map(
              img =>
                item === img.id && (
                  <ItemSlider
                    key={img.id}
                    src={img.slider}  
                    title={img.id}                 
                    prevItem={prevItem}
                    item={item}
                    handleOpenSlider={handleOpenSlider}
                  />
                )
            )}
          </div>
        </div>
        <div className="owl-controls clickable">
          <div className="owl-pagination">
            {listImg.map(img => (
              <div
                key={img.id}
                className={`owl-page ${item === img.id ? "active" : ""}`}
                onClick={() => setItem(img.id)}
              >
                <span></span>
              </div>
            ))}
          </div>
          <div className="owl-buttons">
            <div
              className="owl-prev"
              onClick={() => setItem(item === 1 ? listImg.length : item - 1)}
            >
              <span>&lt;</span>
            </div>
            <div
              className="owl-next"
              onClick={() => setItem(item === listImg.length ? 1 : item + 1)}
            >
              <span>&gt;</span>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = ({ display }) => {
  return { display }
}
const mapDispatchToProps = dispatch => {
  return {
    changeHideHeader: (value) =>
      dispatch({ type: `HIDE_HEADER`, display: value })   
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubSlider)
