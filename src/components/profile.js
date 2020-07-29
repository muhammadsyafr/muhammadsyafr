import React from "react"
import Image from "gatsby-image"
// import Bio from "../components/bio"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

import './profile.css'

const Profile = () => {
    const data = useStaticQuery(graphql`
    query BioQuerye {
      pleague: file(absolutePath: { regex: "/pl_destkop.png/" }) {
        childImageSharp {
          fixed(width: 280, height: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      daris: file(absolutePath: { regex: "/daris.png/" }) {
        childImageSharp {
          fixed(width: 280, height: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      hijabie: file(absolutePath: { regex: "/hijabie.png/" }) {
        childImageSharp {
          fixed(width: 280, height: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      weatherapp: file(absolutePath: { regex: "/weatherapp.png/" }) {
        childImageSharp {
          fixed(width: 280, height: 140) {
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
          }
        }
      }
    }
  `)

    return (
        <>
            <div className="wrapper-profile">
                {/* sec1 */}
                <h1
                    style={{
                        marginTop: rhythm(1),
                        marginBottom: rhythm(1.5),
                    }}>
                    It’s a nice to meet you here
                </h1>
                <p className="text-higlight">
                    Hi, my name is Syafrizal. I am a Student at AMIKOM University, Yogyakarta.
                    field of study in informatics engineering.
                    Right Now i am working as Freelance Web Programmer.
                    I like UI design, I also like exploring other people's work on <i>Dribbble</i>.
                    
                </p>
                
                <a href="mailto:muhammadsyafr@gmail.com"><button style={{
                marginTop: rhythm(0.5),
                marginBottom: rhythm(1.5),

            }} className="btn btn-contact"> Contact</button></a>

            <a href="https://s.id/cv_syafrizal"><button style={{
                marginTop: rhythm(0.5),
                marginBottom: rhythm(1.5),

            }} className="btn btn-cv"> Download CV </button></a>

            </div>
            {/* endsec1 */}

            {/* sec2 */}
            <h2
                style={{
                    marginTop: rhythm(2),
                    marginBottom: rhythm(0),
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    color: '#303952',
                    fontSize: '36px'
                }}>
                A few projects that I have worked on
                </h2>

            <div className="row">
                <div className="col-6 col-s-12">
                    <div className="wrap-project">
                        <a href="https://premierleague-concept.netlify.app/"><h3>Premier League</h3></a>
                        <span>Simple weatherApp using OpenWeather api and ionic react </span>
                        <Image
                            fixed={data.pleague.childImageSharp.fixed}
                            alt="hai"
                            style={{
                                marginTop: rhythm(0.5),
                                marginBottom: rhythm(0),
                                boxShadow: '0 0px 10px 1px rgba(0, 0, 0, 0.2)'
                            }}
                        />
                    </div>
                </div>
                <div className="col-6 col-s-12">
                    <div className="wrap-project">
                        <a href="https://mokima.netlify.app/"><h3>Mokima</h3></a>
                        <span>Exploration about slicing landingpage for alumni website</span>
                        <Image
                            fixed={data.daris.childImageSharp.fixed}
                            alt="hai"
                            style={{
                                marginTop: rhythm(0.5),
                                marginBottom: rhythm(0),
                                boxShadow: '0 0px 10px 1px rgba(0, 0, 0, 0.2)'
                            }}
                        />
                    </div>
                </div>
                <div className="col-6 col-s-12">
                    <div className="wrap-project">
                        <a href="https://hijabie.netlify.app/"><h3>Hijabie</h3></a>
                        <span>Exploration about slicing that landingpage for hijab product</span>
                        <Image
                            fixed={data.hijabie.childImageSharp.fixed}
                            alt="hai"
                            style={{
                                marginTop: rhythm(0.5),
                                marginBottom: rhythm(0),
                                boxShadow: '0 0px 10px 1px rgba(0, 0, 0, 0.2)'
                            }}
                        />
                    </div>
                </div>
                <div className="col-6 col-s-12">
                    <div className="wrap-project">
                        <a href="https://weatherandlocal.netlify.app/"><h3>Weather App</h3></a>
                        <span>Exploration about
simple weather using OpenWeather api and ionic</span>
                        <Image
                            fixed={data.weatherapp.childImageSharp.fixed}
                            alt="hai"
                            style={{
                                marginTop: rhythm(0.5),
                                marginBottom: rhythm(0),
                                boxShadow: '0 0px 10px 1px rgba(0, 0, 0, 0.2)'
                            }}
                        />
                    </div>
                </div>
            </div>
            {/* endsec2 */}

            {/* sec3 */}
            <h2
                style={{
                    marginTop: rhythm(3),
                    marginBottom: rhythm(0.5),
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    color: '#303952',
                    fontSize: '36px'
                }}>
                I'm always down for a coffee, feel free to get in touch!
                </h2>
                <a href="mailto:muhammadsyafr@gmail.com">
            <button style={{
                marginTop: rhythm(0.5),
                marginBottom: rhythm(3),

            }} className="btn btn-contact"> Contact</button></a>
            {/* endsec3 */}

            <footer>
            Follow me for more thoughts and updates on {''}
                <a className="footer-social" href="https://twitter.com/muhammadsyafrzl">Twitter</a> or {''}
                <a className="footer-social" href="https://instagram.com/muhammadsyafr">Instagram</a>
            </footer>
        </>
    )
}

export default Profile
