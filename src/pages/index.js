import React from "react"
import { Link } from "gatsby"

import Layout from "../gatsby-theme-blog/components/layout"

const Index = ({ location, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <main>
      <div>
        HELLO. COMPUTER.
        <Link to="/posts">Blog</Link>
      </div>
    </main>
  </Layout>
)
export default Index;