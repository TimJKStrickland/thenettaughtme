import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"
import Footer from './footer'

export default ({ children, ...props }) => {
  return(
    <Styled.root
      css={css({
        maxWidth: `960px`,
        mx: `auto`,
        px: 3,
        pt: 0,
        pb: 4,
      })}>
      <Header />
      <div>
        <div>
          {children}
        </div>
      </div>
      <Footer {...props} />
    </Styled.root>
  )
}