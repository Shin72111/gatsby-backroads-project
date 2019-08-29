import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Title from "../components/Title"
import BlogCard from "../components/Blog/BlogCard"
import SEO from "../components/SEO"
import styles from "../css/blog.module.css"

const BlogList = props => {
  const {
    data: {
      posts: { edges },
    },
    pageContext: { currentPage, numPages },
  } = props

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage = currentPage === 2 ? "/blogs" : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Blogs" />
      <section className={styles.blog}>
        <Title title="latest" subtitle="post" />
        <div className={styles.center}>
          {edges.map(({ node }) => (
            <BlogCard key={node.id} blog={node} />
          ))}
        </div>
        <section className={styles.links}>
          {isFirst || (
            <AniLink fade to={prevPage} className={styles.link}>
              Prev
            </AniLink>
          )}
          {Array.from({ length: numPages }, (_, index) => {
            return (
              <AniLink
                fade
                key={index}
                to={index === 0 ? `/blogs` : `/blogs/${index + 1}`}
                className={
                  index + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
              >
                {index + 1}
              </AniLink>
            )
          })}
          {isLast || (
            <AniLink fade to={nextPage} className={styles.link}>
              Next
            </AniLink>
          )}
        </section>
      </section>
    </Layout>
  )
}

export default BlogList

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
