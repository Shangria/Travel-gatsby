import React from 'react';
import styled from "styled-components";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {MdLocalAirport} from 'react-icons/md';


const Trips = ({data}) => {
    return (
        <TripsContainer>
            <TripsHead>Locations</TripsHead>
            <TripsWrap>
                {
                    data.map((trip, index) => {
                            const image = getImage(trip.node.picture)
                            return (
                                <TripsBoxImg key={index + 'img'}>
                                    <GatsbyImage image={image} alt={trip.node.alt}/>
                                    <TripsLocation>
                                        <MdLocalAirport style={{marginRight: '5px'}}/>
                                        {trip.node.name}
                                    </TripsLocation>
                                </TripsBoxImg>
                            )
                        }
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
  font-size: calc(1rem + 2vw);
  text-align: center;
  color: ${({theme}) => theme.colors.primary};
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
  margin: 0 20px 20px 0;
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
