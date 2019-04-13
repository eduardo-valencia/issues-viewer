import React from 'react'

function getHumanFriendlyDate(creationDate) {
  const date = new Date(creationDate)
  return date.toDateString()
}

export default function CreationDate(props) {
  const { createdAt } = props.data
  return (
    <>
      <h3>Creation Date</h3>
      <p className="text-body">{getHumanFriendlyDate(createdAt)}</p>
    </>
  )
}
