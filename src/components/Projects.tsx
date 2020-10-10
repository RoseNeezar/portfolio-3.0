import React, { FC } from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { RegularStrapiProjectFragment } from "../generated/graphql"

interface IProject {
  projects?: RegularStrapiProjectFragment[]
  title?: string
  showLink?: boolean
}
const Projects: FC<IProject> = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects?.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/project" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
