import React, { useState, useEffect } from "react"
import { Cursor } from "../styles/globalStyles"

//context
import { useGlobalStateContext } from "../context/globalContext"

const CustomCursor = ({ toggleMenu }) => {
  const { cursorType } = useGlobalStateContext()
  const [mousePosition, setMousePosition] = useState({
    x: 400,
    y: 400,
  })

  const onMouseMove = event => {
    const x = event.pageX
    const y = event.pageY
    setMousePosition({ x: x, y: y })
  }
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])
  return (
    <>
      <Cursor
        className={`${!!cursorType ? "hovered" : " "} ${cursorType} ${
          toggleMenu ? "nav-open" : ""
        }`}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
    </>
  )
}

export default CustomCursor
