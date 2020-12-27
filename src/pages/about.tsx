import React, { FC } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
import styled from "styled-components"
import MainLayout from "../Layout/MainLayout"
import { AllStrapiAboutQuery } from "../generated/graphql"
import { colorE } from "../constants/colorEnum"
import animationData from "../constants/about-me.json"
import Lottie from "react-lottie"
import SEO from "../components/SEO"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

interface PageData<D> {
  data: D
}
const Header = styled.header`
  background-color: ${({ theme }) => theme.reaction};
`
const About: FC<PageData<AllStrapiAboutQuery>> = ({ data }) => {
  const {
    allStrapiAbout: { nodes },
  } = data
  const { info, stack, title } = nodes[0]
  return (
    <>
      <SEO
        title="Rose Neezar | About"
        description="this is a summary of my profile"
      />
      <Layout navColor={colorE.gray}>
        <section className="about-page">
          <div className="section-center about-center">
            <div className="about-img">
              <Lottie
                options={defaultOptions}
                height={350}
                width={350}
                speed={2.5}
                isStopped={false}
              />
            </div>
            <article className="about-text">
              <Title title={title as string} />
              <p>{info}</p>
              <div className="about-stack">
                {stack?.map(res => (
                  <span key={res?.id}>{res?.title}</span>
                ))}
              </div>
            </article>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        id
        info
        title
        stack {
          id
          title
        }
      }
    }
  }
`
