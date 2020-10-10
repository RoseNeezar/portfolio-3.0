import React, { FC, ReactNode } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import { AllStrapiProjectsFeatureQuery } from "../generated/graphql"

interface PageData<D> {
  data: D
}

const Index: FC<PageData<AllStrapiProjectsFeatureQuery>> = (
  data: PageData<AllStrapiProjectsFeatureQuery>
) => {
  const { allStrapiProjects: projects } = data.data
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects.nodes} title="featured projects" showLink />
    </Layout>
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
