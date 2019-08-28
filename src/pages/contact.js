import React from "react"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import Layout from "../components/Layout"
import Contact from "../components/Contact/Contact"

const contact = ({
  data: {
    contactBcg: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
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
