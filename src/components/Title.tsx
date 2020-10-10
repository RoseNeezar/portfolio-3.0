import React, { FC } from "react"

interface ITitle {
  title?: string
}
const Title: FC<ITitle> = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
    </div>
  )
}

export default Title
