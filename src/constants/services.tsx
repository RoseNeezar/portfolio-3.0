import React from "react"
import { FaCode, FaSketch, FaAndroid, FaApple } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Frontend development",
    text: `I'm using Nextjs which is a reactjs framework for my projects. I find the server side rendering and the ability to do dynamic import makes nextjs the best tool for building frontend webapps.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Backend development",
    text: `I'm using nodejs with typescript as my main backend framework. Mongodb or postgressql for the database for all of my apps. Depending on use case, my go to api would be graphql and rest`,
  },
  {
    id: 3,
    icon: <FaApple className="service-icon" />,
    title: "Mobile developemnt",
    text: `I'm using React native with typescript . Expo managed for less native api reliant apps and expo bare for more all around app functionality`,
  },
]
