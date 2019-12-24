import React, { Fragment } from "react"
import { css, Styled, Flex, Box } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <Fragment>
    <Flex
    sx={{flexWrap:`wrap`, justifyContent:`space-between`, alignItems: `center`}}>
      <Box sx={{width:[`1/2`, `1/1`]}}>
        <Styled.h6 css={css({ mb:`0` })}>© {new Date().getFullYear()}, Gatsby powered</Styled.h6>
      </Box>
      <Box sx={{width:[`1/2`, `1/1`]}}>
      {socialLinks.map((platform, i, arr) => (
        <Fragment key={platform.url}>
          <Styled.a href={platform.url} target="_blank" rel="noopener noreferrer">
            {platform.name}
          </Styled.a>
        </Fragment>
      ))}
      </Box>
    </Flex>
  </Fragment>
)

export default Footer