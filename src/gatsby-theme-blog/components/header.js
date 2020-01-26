import React from "react"
import { Link } from "gatsby"
import { css, Styled } from "theme-ui"
import Bio from "./bio"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => {
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
          mr: `auto`
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            textDecoration: `none`,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h3>
    )
  }
}

export default ({ children, title, ...props }) => {

  return (
    <header css={css({
      maxWidth:`960px`,
      mx: `auto`
    })}>
      <div
        css={css({
          maxWidth: `960px`,
          ml: 0,
          px: 3,
          pt: 3,
        })}
      >
        <div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            mb: 3,
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
