import React from "react"
import { Link } from "gatsby"
import { css, Styled } from "theme-ui"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => {
  return (
    <Styled.h3
      as="p"
      css={css({
        my: 0,
      })}
    >
      <Styled.a
        as={Link}
        css={css({
          boxShadow: `none`,
          textDecoration: `none`,
          color: `primary`,
        })}
        to={`/`}
      >
        {children}
      </Styled.a>
    </Styled.h3>
  )
}

export default ({ children }) => {
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
        <div css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            mb: 4,
          })}
        >
          {children}
        </div>
      </div>
    </header>
  )
}
