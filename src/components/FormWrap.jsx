import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {getImage} from "gatsby-plugin-image"

import {convertToBgImage} from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import Form from "./Form";

const FormWrap = () => {
    const {placeholderImage} = useStaticQuery(
        graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bg-form.jpg" }) {
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
            style={{height:'50vh', padding:40}}
            {...bgImage}
            preserveStackingContext

        >
            <Form/>
        </BackgroundImage>
    )
}
export default FormWrap
