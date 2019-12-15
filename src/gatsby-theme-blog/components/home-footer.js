import React, { Fragment } from "react"
import { Styled } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <Fragment>
    <Styled.h3>© {new Date().getFullYear()}, Gatsby powered</Styled.h3>
    {socialLinks.map((platform, i, arr) => (
      <Fragment key={platform.url}>
        <Styled.a href={platform.url} target="_blank" rel="noopener noreferrer">
          {platform.name}
        </Styled.a>
      </Fragment>
    ))}
  </Fragment>
)

export default Footer