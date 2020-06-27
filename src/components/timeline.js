import React from "react"
import "../css/main.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import Markdown from "../components/markdown"

function getComponentStyle(style, it) {
}

function getTimelineElement(item, style, it) {
  var contentStyle = {
    color: "#fff",
    fontSize: "2.5rem",
    lineHeight: "120%",
  }
  const background = getComponentStyle(style, it)
  contentStyle["background"] = background

  var arrowStyle = {
    borderRight: `7px solid  ${background}`,
  }

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={contentStyle}
      contentArrowStyle={arrowStyle}
      iconStyle={contentStyle}
    >
      <h3 className="vertical-timeline-element-title">{item.title}</h3>
      <div className="description">
        <Markdown markdown={item.description} />
      </div>
    </VerticalTimelineElement>
  )
}

const TimeLine = ({ timeline, style }) => {
  return (
    <VerticalTimeline>
      {timeline.map((item, i) => {
        if (i % 2) {
          return getTimelineElement(item, style, 1)
        } else {
          return getTimelineElement(item, style, 2)
        }
      })}
    </VerticalTimeline>
  )
}

export default TimeLine
