import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {getImage} from "gatsby-plugin-image"

import {convertToBgImage} from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'


const TripsBg = () => {
    const {placeholderImage} = useStaticQuery(
        graphql`
      query {
        placeholderImage: file(relativePath: { eq: "tripsBg.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
    )
    const image = getImage(placeholderImage)

    const bgImage = convertToBgImage(image)

    return (
        <BackgroundImage
            Tag="div"
            style={{height:'75vh'}}
            {...bgImage}
            preserveStackingContext
        >
        </BackgroundImage>
    )
}
export default TripsBg;
