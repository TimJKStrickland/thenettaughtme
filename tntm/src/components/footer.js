import * as React from "react"
import { Link } from "gatsby"

const Footer = ({ data, title, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  if (isRootPath) {
    header = (
      <nav>
        <Link to="/">{title}</Link>
        <Link className="header-link-home" to="/about">About</Link>
        <Link className="header-link-home" to="/pages">Writings</Link>
      </nav>
    )
  } else {
    header = (
      <nav>
        <Link className="header-link-home" to="/">{title}</Link>
        <Link className="header-link-home" to="/about">Who Dis?</Link>
        <Link className="header-link-home" to="/pages">Writings</Link>
      </nav>
    )
  }
  return (
    <footer data-is-root-path={isRootPath}>
      © {new Date().getFullYear()}
      {header}
    </footer>
  )
}

export default Footer