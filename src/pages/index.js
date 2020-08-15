import React from "react"
import { Box, css } from "theme-ui"

import Layout from "../gatsby-theme-blog/components/layout"

const Index = ({ location, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <main>
      <Box
        p={4}
        css={ css({
          alignItems: `center`,
          display: `grid`,
          height:`100vh`,
          justifyContent: `center`,
        })
      }>
        <div>
          <h1>Computer. HELLO.</h1>
        </div>
      </Box>
      <Box
        p={4}
        css={ css({
          alignItems: `center`,
          display: `grid`,
          height:`100vh`,
          justifyContent: `center`,
        })
      }>
        <div>
          <h1>Projects</h1>
          <h2>React-Rails Free Code Camp</h2>
        </div>
      </Box>
    </main>
  </Layout>
)
export default Index;