import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { AllStrapiJobsQuery } from "../generated/graphql"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: ASC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data: AllStrapiJobsQuery = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = useState(0)
  const { company, position, date, desc } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map(({ strapiId, company }, index) => {
            return (
              <button
                key={strapiId}
                onClick={() => setValue(index)}
                style={{ outline: "none" }}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc?.map(res => {
            return (
              <div key={res?.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{res?.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
