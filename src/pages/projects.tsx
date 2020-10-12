import React, { FC } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import { AllStrapiProjectsQuery } from "../generated/graphql"
import { colorE } from "../constants/colorEnum"
import SEO from "../components/SEO"

interface PageData<D> {
  data: D
}

const ProjectsPage: FC<PageData<AllStrapiProjectsQuery>> = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <>
      <SEO
        title="Rose Neezar | Projects"
        description="this showcase all of the projects rose neezar have done"
      />
      <Layout navColor={colorE.gray}>
        <section className="projects-page">
          <Projects projects={projects} title="all projects" />
        </section>
      </Layout>
    </>
  )
}
export const query = graphql`
  {
    allStrapiProjects {
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

export default ProjectsPage
