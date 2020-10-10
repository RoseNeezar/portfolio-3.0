import React, { FC } from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
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
}) => {
  return <h2>project,{title}</h2>
}

export default Project
