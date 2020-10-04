import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
import styled from "styled-components"
import MainLayout from "../Layout/MainLayout"

const Header = styled.header`
  background-color: ${({ theme }) => theme.reaction};
`
const About = () => {
  return (
    <MainLayout>
      <Header>about page</Header>
    </MainLayout>
  )
}

export default About
