import React from 'react';
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import TripsInformation from "../components/TripsInformation";
import {graphql} from "gatsby";
import TripsBg from "../components/TripsBg";

const AboutTrips = ({data}) => {
    return (
        <Layout>
            <TripsBg/>
            <TripsInformation dataTrips={data.allTripsJson.nodes}/>
        </Layout>
    );
};

export const Head = () => <Seo title="Trips"/>

export default AboutTrips;

export const aboutTripsQuery = graphql`
  query getDataTrips {
  allTripsJson {
    nodes {
      alt
      name
      id
      description
      price
      picture {
        childImageSharp {
          gatsbyImageData(
           formats: JPG
              blurredOptions: {width: 100}
              width: 700
              placeholder: BLURRED
              transformOptions: {cropFocus: CENTER}
              aspectRatio: 4.3
              )
        }
      }
    }
  }
  }
`
