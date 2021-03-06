import React, { FC } from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
  FaGithub,
} from "react-icons/fa"

interface ISocial {
  styleClass?: "footer-links" | "sidebar-icons"
}
const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/RoseNeezar",
  },
  // {
  //   id: 2,
  //   icon: <FaLinkedin className="social-icon"></FaLinkedin>,
  //   url: "https://www.twitter.com",
  // },
  // {
  //   id: 3,
  //   icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
  //   url: "https://www.twitter.com",
  // },
  // {
  //   id: 4,
  //   icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
  //   url: "https://www.twitter.com",
  // },
  // {
  //   id: 5,
  //   icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
  //   url: "https://www.twitter.com",
  // },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" target="_blank">
        {link.icon}
      </a>
    </li>
  )
})

const socialLinks: FC<ISocial> = ({ styleClass }) => {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      className={`social-links ${styleClass ? styleClass : ""}`}
    >
      {links}
    </ul>
  )
}

export default socialLinks
