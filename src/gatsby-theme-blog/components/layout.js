import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"

export default ({ children, ...props }) => (
  <Styled.root>
    <Header {...props} />
    <div>
      <div
        css={css({
          maxWidth: `75vw`,
          mx: `auto`,
          px: 3,
          py: 4,
        })}
      >
        {children}
      </div>
    </div>
  </Styled.root>
)
