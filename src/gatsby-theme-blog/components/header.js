import React from "react"
import { Link } from "gatsby"
import { css, Styled } from "theme-ui"
import Bio from "./bio"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => {
  console.log("TCL: Title -> location", location)
  console.log("TCL: Title -> children", children)
  if (location.pathname === rootPath) {
    return (
      <Styled.h1
        css={css({
          my: 0,
          fontSize: 4,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            color: `inherit`,
            boxShadow: `none`,
            textDecoration: `none`,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h1>
    )
  } else {
    return (
      <Styled.h3
        css={css({
          my: 0,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
          })}
          to={location.pathname}
        >
          {location.pathname}
        </Styled.a>
      </Styled.h3>
    )
  }
}

export default ({ children, title, ...props }) => {

  return (
    <header>
      <div
        css={css({
          maxWidth: `500px`,
          ml: `auto`,
          mr: `0`,
          px: 3,
          pt: 4,
        })}
      >
        <div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            mb: 4,
          })}
        >
          <Title {...props}>{title}</Title>
          {children}
        </div>
        {props.location.pathname === rootPath && <Bio />}
      </div>
    </header>
  )
}
