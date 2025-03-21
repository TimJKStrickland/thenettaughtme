import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ about, location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <main>{children}</main>
      <footer className="global-header">
        <Link className="header-link-home" to="/">{title}</Link>
        <Link className="header-link" to="/about">{about}</Link>
        <Link className="header-link" to="/pages">Writings</Link>
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
