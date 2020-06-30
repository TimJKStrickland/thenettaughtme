import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

import Layout from "./layout"
import SEO from "./seo"


const Posts = ({ location, posts, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <main>
      { posts.map(({ node }) => {
        const title = node.title || node.slug
        const keywords = node.keywords || []
        return (
          <Fragment key={node.slug}>
            <SEO title="Home" keywords={keywords} />
            <div>
              <Styled.h2 css={css({ my: 0 })}>
                <Styled.a
                  as={Link}
                  css={css({
                    textDecoration: `none`,
                  })}
                  to={node.slug}
                >
                  {title}
                </Styled.a>
              </Styled.h2>
              <small
                css={css({
                  fontWeight: "400",
                  fontSize: "12px",
                })}
              >
                {node.date}
              </small>
              <Styled.p
                css={css({
                  mt: 1,
                  mb: 4
                })}
              >
                {node.excerpt}
              </Styled.p>
            </div>
          </Fragment>
        )
      })}
    </main>
  </Layout>
)

export default Posts
