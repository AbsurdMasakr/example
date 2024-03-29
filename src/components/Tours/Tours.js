import React from "react"
import TourList from "./TourList"
import { graphql, useStaticQuery } from "gatsby"

const getTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          days
          country
          slug
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid
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
