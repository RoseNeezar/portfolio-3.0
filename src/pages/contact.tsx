import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <>
      <SEO
        title="contact section of portfolio"
        description="get in touch , sent rose neezar a message"
      />
      <Layout>
        <section className="contact-page">
          <article className="contact-form">
            <h3>get in touch</h3>
            <form action="https://formspree.io/f/xbjpdnwd" method="POST">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="form-control"
                />
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="form-control"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="message"
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn btn">
                submit area
              </button>
            </form>
          </article>
        </section>
      </Layout>
    </>
  )
}

export default contact
