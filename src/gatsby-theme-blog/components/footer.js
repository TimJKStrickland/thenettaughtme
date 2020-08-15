import React, { Fragment } from "react"
import { css, Styled, Flex, Box } from "theme-ui"
import Bio from "./bio"

const Footer = () => {
  return (
    <Fragment>
      <Flex
        sx={{
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          alignItems: `center`,
        }}
      >
        <Box sx={{ width: [`1/2`, `1/1`] }}>
          <Bio />
          <Styled.h6 css={css({ mb: `0` })}>
            © {new Date().getFullYear()}, Gatsby powered
          </Styled.h6>
        </Box>
      </Flex>
    </Fragment>
  )
}

export default Footer