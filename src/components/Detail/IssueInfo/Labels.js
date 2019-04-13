import React from 'react'
import { getTextClassByBgColor } from '../../common/colorLight'

function makeLabel(labelInfo, index) {
  const { color, name } = labelInfo.node
  const hexColor = '#' + color
  const textClassForColor = getTextClassByBgColor(hexColor)
  return (
    <div
      key={index}
      className={`px-2 ${textClassForColor} border-rounded issue__label my-2`}
      style={{ backgroundColor: hexColor }}
    >
      {name}
    </div>
  )
}

export default function Labels(props) {
  const { edges: labels } = props.data.labels
  return (
    <div className="my-3">
      <h3>Labels</h3>
      <div className="d-flex justify-content-between flex-wrap">
        {labels.length ? (
          labels.map(makeLabel)
        ) : (
          <p className="text-body">No available labels.</p>
        )}
      </div>
    </div>
  )
}
