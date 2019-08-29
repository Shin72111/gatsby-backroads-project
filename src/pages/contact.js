import React from "react"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import Layout from "../components/Layout"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

const contact = ({
  data: {
    contactBcg: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHero img={fluid} />
      <Contact />
    </Layout>
  )
}

export default contact

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
