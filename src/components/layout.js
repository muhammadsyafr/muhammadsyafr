import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import './layout.css';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  const data = useStaticQuery(graphql`
    query BioQueryee {
      avatar: file(absolutePath: { regex: "/saprol/" }) {
        childImageSharp {
          fixed(width: 60, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            instagram
          }
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata

  if (location.pathname === rootPath) {
    header = (
      <div id="main">
       <div 
       style={{
         display: 'flex',
         alignItems: 'center',
         flexDirection: 'column',
         justifyContent: 'center',
         fontFamily: 'Montserrat',
         marginBottom: -20
       }}
       className="nav">
          <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            // marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 40,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
          />
        <p style={{
          fontWeight: 600,
          fontSize: 24,
          color: "rgb(48, 57, 82)"
        }}>Syafrizal</p>

        </div>

        <ul style={{
          textAlign: 'center',
          // marginBottom: rhythm(1.5),
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
            <a href="https://linktr.ee/muhammadsyafr"
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
      </div>
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
          © {new Date().getFullYear()}, Built with &hearts; in Purwokerto & Yogyakarta | Hosted at <a href="https://netlify.com">Netlify</a>
        </footer>
      }
    </div>
  )
}

export default Layout
