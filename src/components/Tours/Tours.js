import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TourList from "./TourList"

const getTours = graphql`
  {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Tours = () => {
  const { tours } = useStaticQuery(getTours)

  return <TourList tours={tours} />
}

export default Tours
