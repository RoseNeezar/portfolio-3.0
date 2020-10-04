import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import styled from "styled-components"

const Underline = styled.div`
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: ${({ theme }) => theme.clrPrimary5};
  margin-left: auto;
  margin-right: auto;
`

const Header = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: ${({ theme }) => theme.clrPrimary10};
  position: relative;
  ${Underline} {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
  @media screen and (min-width: 992px) {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      background: ${({ theme }) => theme.clrWhite};
    }
    h4 {
      font-size: 0.85rem;
    }
  }
  @media screen and (min-width: 1170px) {
    h4 {
      font-size: 1rem;
      line-height: 1;
    }
  }
`
const Section = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  height: 100%;
  display: grid;
  align-items: center;
  @media screen and (min-width: 992px) {
    width: 95vw;
    grid-template-columns: repeat(12, 1fr);
  }
`
const HeroInfo = styled.article``
const HeroImg = styled.image``

// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Header>
      <Section>
        <article className="hero-info">
          <div>
            <Underline />
            <h1>I'm Neezar</h1>
            <h4>Fullstack developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </Section>
    </Header>
  )
}

export default Hero
