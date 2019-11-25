import React, { useState, useEffect, useRef } from "react"
import { connect } from "react-redux"

import htImg1 from "../../data/images/htactive-1.png"
import htImg2 from "../../data/images/htactive-2.png"
import htImg3 from "../../data/images/htactive-3.png"
import ItemSlider from "./SubSliderItem"
import BigSlider from "./bigSlider"

const SubSlider = ({changeHideHeader}) => {
  const [item, setItem] = useState(1)
  const [openBigSlider, setOpenSlider] = useState(false)
  const listImg = [
    { src: htImg1, id: 1, title: "HT Active 1" },
    { src: htImg2, id: 2, title: "HT Active 2" },
    { src: htImg3, id: 3, title: "HT Active 3" },
  ]
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
        <div className="owl-wrapper-outer">
          <div
            className="owl-wrapper"
            style={{ width: "100%", left: "0px", display: " block" }}
          >
            {listImg.map(
              img =>
                item === img.id && (
                  <ItemSlider
                    key={img.id}
                    src={img.src}
                    title={img.title}
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
              onClick={() => setItem(item === 1 ? 3 : item - 1)}
            >
              <span>&lt;</span>
            </div>
            <div
              className="owl-next"
              onClick={() => setItem(item === 3 ? 1 : item + 1)}
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
