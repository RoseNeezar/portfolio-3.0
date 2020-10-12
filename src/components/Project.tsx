import React, { FC } from "react"
import PropTypes from "prop-types"
import Image, { FluidObject } from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { RegularStrapiProjectFragment } from "../generated/graphql"

type IProject = RegularStrapiProjectFragment & {
  index?: number
}

const Project: FC<IProject> = ({
  index,
  description,
  github,
  image,
  title,
  stack,
  url,
}) => {
  return (
    <article className="project">
      <Image
        fluid={image?.childImageSharp?.fluid as FluidObject}
        className="project-img"
      />
      <div className="project-info">
        <span className="project-number">0{index! + 1}</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack?.map(res => (
            <span key={res?.id}>{res?.title}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={github as string}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url as string}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
