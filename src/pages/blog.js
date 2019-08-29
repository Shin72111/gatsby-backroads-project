import React from "react"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import Layout from "../components/Layout"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/SEO"

const blog = ({
  data: {
    blogBcg: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <StyledHero img={fluid} />
      <BlogList />
    </Layout>
  )
}

export default blog

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
