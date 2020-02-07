import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"

export default ({ children, ...props }) => {
  return(
    <Styled.root>
      <Header {...props} />
      <div>
        <div
          css={css({
            maxWidth: `960px`,
            mx: `auto`,
            px: 3,
            pt: 0,
            pb: 4,
          })}
        >
          {children}
        </div>
      </div>
    </Styled.root>
  )
}