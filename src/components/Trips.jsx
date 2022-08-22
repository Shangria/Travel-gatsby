import React from 'react';
import styled from "styled-components";
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {MdLocalAirport} from 'react-icons/md';


const Trips = () => {
    const data = useStaticQuery(graphql`
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
`)

    function getImageData(img, alt) {
        const image = getImage(img)
        return <GatsbyImage image={image} alt={alt}/>
    }

    return (

        <TripsContainer>
            <TripsHead>Locations</TripsHead>
            <div>

            </div>

            <TripsWrap>
                {
                    data.allTripsJson.edges.map(({node}, index) => (
                            <TripsBoxImg key={index + 'img'}>
                                {getImageData(node.picture, node.alt)}
                                <TripsLocation>
                                    <MdLocalAirport style={{marginRight: '5px'}}/>
                                    {node.name}
                                </TripsLocation>
                                <TripsDescription>{node.description}</TripsDescription>
                            </TripsBoxImg>
                        )
                    )
                }

            </TripsWrap>
        </TripsContainer>

    );
};

export default Trips;

const TripsContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 40px 15px;
`;
const TripsHead = styled.h2`
  font-size: calc(1.3rem + 2vw);
  text-align: center;
  color: ${({theme}) => theme.colors.fourth};
  margin-bottom: 20px;
  font-weight: 400;
}

`;
const TripsWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const TripsBoxImg = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 0 20px;
  margin-bottom: 20px;
  position: relative;
`;
const TripsLocation = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 50px;
  padding: 10px;
  color: ${({theme}) => theme.colors.light};
`;

const TripsDescription = styled.p`
  background-color: ${({theme}) => theme.colors.secondary};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: ${({theme}) => theme.colors.light};
  padding: 10px;
  min-height: 120px;
  line-height: 1.5;
`
