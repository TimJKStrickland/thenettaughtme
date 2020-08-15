import React from "react"
import { Box, css } from "theme-ui"

import Layout from "../gatsby-theme-blog/components/layout"

const Projects = ({ location, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <main>
      <Box
        p={4}
        css={ css({ height:`100vh`, })
      }>
        <h1>Projects</h1>
      </Box>
      <Box
        p={4}
        css={ css({ height:`100vh`, })
      }>
        <h1>Projects</h1>
        <h2>React-Rails Free Code Camp</h2>
      </Box>
    </main>
  </Layout>
)
export default Projects;