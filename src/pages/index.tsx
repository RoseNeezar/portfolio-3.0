import React, { FC, ReactNode, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import { AllStrapiProjectsFeatureQuery } from "../generated/graphql"
import { colorE } from "../constants/colorEnum"
import SEO from "../components/SEO"

interface PageData<D> {
  data: D
}

const Index: FC<PageData<AllStrapiProjectsFeatureQuery>> = ({ data }) => {
  const { allStrapiProjects: projects } = data

  return (
    <>
      <SEO
        title="Rose Neezar | Home"
        description="overview portfolio site of rose neezar"
      />
      <Layout navColor={colorE.green}>
        <Hero />
        <Services />
        <Jobs />
        <Projects
          projects={projects.nodes}
          title="featured projects"
          showLink
        />
      </Layout>
    </>
  )
}
export default Index

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
