import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import './layout.css';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <center>
        <h1
          style={{
            ...scale(1),
            marginBottom: rhythm(0),
            marginTop: 0,
            fontWeight: '800',
            color: '#303952'
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>

        <ul style={{
          marginBottom: rhythm(1.5),
          marginTop: rhythm(0.5),
          fontWeight: 500
        }}>
          <li className="nav-menu">
            <Link
              className="actived"
              style={{   
                color: `white`,
              }}
              to={`/`}
            >Home</Link>
          </li>

          <li className="nav-menu">
            <a href="https://ini.space/muhammadsyafr"
              style={{
                color: `white`,
              }}
            >Social</a>
          </li>
          <li className="nav-menu">
            <Link
              style={{
                color: `white`,
              }}
              to={`/about`}
            >About</Link>
          </li>
        </ul>
      </center>
    )
  } else if (location.pathname === '/about' || location.pathname === '/about/') {
    header = (
      <Link
        className="back-link"
        style={{
          boxShadow: `none`,
          textDecoration: `underline`,
          color: `inherit`,
        }}
        to={`/`}
      >
        Back
      </Link>
    )

  } else {
    header = (
      <Link
        className="back-link"
        style={{
          boxShadow: `none`,
          textDecoration: `underline`,
          color: `inherit`,
        }}
        to={`/`}
      >
        Back
      </Link>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>

      {
        location.pathname === '/about' || location.pathname === '/about/' ? '' : <footer>
          © {new Date().getFullYear()}, Built with &hearts; in Purwokerto & Yogyakarta | Hosting at <a href="https://netlify.com">Netlify</a>
        </footer>
      }
    </div>
  )
}

export default Layout
