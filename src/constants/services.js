import React from "react"
import { FaCode, FaSketch, FaAndroid, FaApple } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Frontend development",
    text: `I'm using react or vue with typescript. When starting a web based project my go to tools if the website has more static pages like a blog or cms as a backend would be gatsbyjs, if it requires good SEO and multiple static and dynamic pages would be nextjs, else if the website content hides behind a login screen, where most page is dynamic, and only the landing pages is static would be gatsbyjs.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Backend development",
    text: `I'm using nodejs with typescript as my main backend framework. Mongodb for the database for all of my apps.`,
  },
  {
    id: 3,
    icon: <FaApple className="service-icon" />,
    title: "Mobile developemnt",
    text: `I'm using React native with typescript `,
  },
]
