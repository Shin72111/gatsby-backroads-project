import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Day from "../components/SingleTour/Day"
import SEO from "../components/SEO"
import styles from "../css/template.module.css"

const tourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description: { description },
    journey,
    images,
  } = data.tour

  const [mainImage, ...tourImages] = images

  const seoTitle = name
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(" ")

  return (
    <Layout>
      <SEO title={seoTitle} />
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((image, index) => (
              <Img
                key={index}
                fluid={image.fluid}
                alt="single tour"
                className={styles.image}
              />
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration: {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => (
              <Day key={index} day={item.day} info={item.info} />
            ))}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default tourTemplate

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
