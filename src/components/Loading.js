import React from "react"
import '../App.css'

export default function({ name, target }) {
  if (!target) {
    return <p className="landingPage">{`loading ${name} ...`}</p>
  }
  if (target instanceof Error) {
    return (
      <>
        <p className="landingPage">{`There was an error while loading ${name}`}</p>
        <font color="red">{target.message}</font>
      </>
    )
  }
  return <></>
}
