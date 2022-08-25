import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Trips from "../components/Trips";
import FormWrap from "../components/FormWrap";
import {graphql} from "gatsby";

const IndexPage = ({data}) => (
    <Layout>
        <Hero/>
        <Trips data={data.allTripsJson.edges}/>
        <FormWrap/>
    </Layout>
)


export default IndexPage;

export const homeTripsQuery = graphql`
   query TripsQuery {
  allTripsJson {
    edges {
      node {
        alt
        name
        description
        picture {
          childImageSharp {
            gatsbyImageData(
              formats: JPG
              blurredOptions: {width: 100}
              width: 300
              placeholder: BLURRED
              transformOptions: {cropFocus: CENTER}
              aspectRatio: 0.7
            )
          }
        }
      }
    }
  }
}
`
