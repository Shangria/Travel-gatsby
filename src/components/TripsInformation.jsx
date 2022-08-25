import React, { useState} from 'react';
import styled from "styled-components";
import {getImage, GatsbyImage} from "gatsby-plugin-image"
import Select from "./Select";


const TripsInformation = ({data}) => {

    const [trips, setTrips] = useState(data);
    const [tripsSort, setTripsSort] = useState('');

    const sortTripsData = (sort) => {
        console.log(sort)
        setTripsSort(sort);
        const newArr = [...trips];
        newArr.sort((a, b) => {
            return a[sort] < b[sort] ? -1 : 1
        });
        console.log(newArr);
        return setTrips(newArr);
    }

    return (
        <InformationWrap>
            <InformationContainer>
                <Select
                    value={tripsSort}
                    onChange={sortTripsData}
                    defaultValue="sort"
                    options={[
                        {value: "name", name: "Sort for name city"},
                        {value: "description", name: "Sort for description"},
                    ]}
                />


                {
                    data.map((trip, index) => {
                            const image = getImage(trip.picture)
                            return (
                                <InformationItem key={index}>
                                    <GatsbyImage image={image} alt={trip.alt}/>
                                    <InformationBox>
                                        <InformationTitle>
                                            {trip.name}
                                        </InformationTitle>
                                        <InformationText>
                                            {trip.description}
                                        </InformationText>
                                    </InformationBox>
                                </InformationItem>
                            )
                        }
                    )
                }

            </InformationContainer>
        </InformationWrap>
    );
};

export default TripsInformation;


const InformationWrap = styled.div`

`;

const InformationContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 60px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InformationItem = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 25px;

  .gatsby-image-wrapper {
    width: 50%;
  }
`;

const InformationBox = styled.div`
  width: 50%;
`;


const InformationTitle = styled.h3`

`;

const InformationText = styled.p`

`;
