import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"

const Blog = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": node => (
        <div className="rich">
          <h3>this is awesome</h3>
          <img
            src={node.data.target.fields.file["en-US"].url}
            alt="awesome view"
            width="400"
          />
          <p>images provided by john doe</p>
        </div>
      ),
      "embedded-entry-block": node => {
        const { title, image, text } = node.data.target.fields
        return (
          <div>
            <br />
            <br />
            <br />
            <br />
            <h1>this is another post: {title["en-US"]}</h1>
            <img
              src={image["en-US"].fields.file["en-US"].url}
              alt="awesome view"
              width="400"
            />
            {documentToReactComponents(text["en-US"])}
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        )
      },
    },
  }

  const seoTitle = title
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(" ")

  return (
    <Layout>
      <SEO title={seoTitle} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at : {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`
