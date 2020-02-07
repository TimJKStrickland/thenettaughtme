import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Styled, css } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    <StaticQuery
      query={graphql`
        query BioContentQuery {
          site {
            siteMetadata {
              author
              description
            }
          }
        }
      `}
      render={data => (
        <Fragment>
          <Styled.h4 css={css({
            mb: 1
          })}>{data.site.siteMetadata.author}</Styled.h4>
          <Styled.h5>{data.site.siteMetadata.description}</Styled.h5>
        </Fragment>
      )}
    />
  </Fragment>
)
