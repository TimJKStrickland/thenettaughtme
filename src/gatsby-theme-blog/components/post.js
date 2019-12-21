import React from "react"
import { Styled, css } from "theme-ui"

import PostFooter from "../components/post-footer"
import PostHeader from "../components/post-header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title, social },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location}>
    <PostHeader title={ title } location={ location } />
    <SEO title={post.title} description={post.excerpt} />
    <main>
      <Styled.h1>{post.title}</Styled.h1>
      <Styled.p
        css={css({
          fontSize: 1,
          mt: -3,
          mb: 3,
        })}
      >
        {post.date}
      </Styled.p>
      <MDXRenderer>{post.body}</MDXRenderer>
    </main>
    <PostFooter {...{ previous, next, social }} />
  </Layout>
)

export default Post