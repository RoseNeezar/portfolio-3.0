import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import { colorE } from "../constants/colorEnum"

const Error = () => {
  return (
    <>
      <SEO title="Empty" description="Nothing to see here" />
      <Layout navColor={colorE.green}>
        <main className="error-page">
          <div className="error-container">
            <h1>nothing to see here</h1>
            <Link to="/" className="btn">
              Go Home
            </Link>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Error
