import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"

//styled Components
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"

//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const Header = ({ onCursor, toggleMenu, setToggleMenu }) => {
  const { currentTheme } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  const hamburger = useRef(null)

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }
  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])
  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        {console.log(currentTheme)}
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Link to="/">FURR</Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
              role="button"
              aria-label="Mute volume"
              tabIndex="0"
            ></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu ref={hamburger} onClick={() => setToggleMenu(!toggleMenu)}>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
