import React from "react"
import { css, Styled, Flex } from "theme-ui"

export default () => {

  return (
    <header css={css({
      maxWidth:`960px`,
      mx: `auto`
    })}>
      <Flex
        css={ css({
          alignItems: `center`,
          justifyContent: `space-between`,
          paddingTop: `1rem`,
          paddingBottom: `1rem`,
          width: `100%`
          }) }>
        <Styled.a 
          href={ `/` }
          css={ css({
            color: `secondary`,
            display: `flex`,
            textDecoration: `none`
          })}
          >TheNetTaught.Me</Styled.a>
        <Styled.a 
          href={ `/posts` }
          css={ css({
            color: `secondary`,
            display: `flex`
          })}
          >Writings</Styled.a>
      </Flex>
    </header>
  )
}
