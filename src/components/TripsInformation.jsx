import React, {useMemo, useState} from 'react';
import styled from "styled-components";
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import Select from "./Select";
import InputSearch from "./InputSearch";
import {ImPriceTags} from 'react-icons/im';
import {motion} from 'framer-motion';


const TripsInformation = ({dataTrips}) => {
    const [trips] = useState(dataTrips);
    const [tripsSort, setTripsSort] = useState('');
    const [searchData, setSearchData] = useState('');

    const sortedTrips = useMemo(() => {
        if (tripsSort) {
            return [...trips].sort((a, b) => a[tripsSort] < b[tripsSort] ? -1 : 1);
        } else {
            return trips;
        }
    }, [tripsSort, trips]);

    const sortedAndSearchTrips = useMemo(() => {
        return sortedTrips.filter(trips => trips.name.toLowerCase().includes(searchData))
    }, [searchData, sortedTrips])

    const sortTripsData = (sort) => {
        setTripsSort(sort);
    }

    const getSearchValue = (search) => {
        setSearchData(search)
    }

    return (
        <InformationWrap>
            <InformationContainer>
                <InformationBoxSearchSort>
                    <Select
                        value={tripsSort}
                        onChange={sortTripsData}
                        defaultValue="Sort our trips"
                        options={[
                            {value: "name", name: "Sort for name city"},
                            {value: "price", name: "Sort for price"},
                        ]}
                    />

                    <InputSearch
                        value={searchData}
                        type="text"
                        placeholder="Search trip"
                        onChange={getSearchValue}
                    />
                </InformationBoxSearchSort>

                {
                    sortedAndSearchTrips.map((trip, index) => {
                            const image = getImage(trip.picture)
                            return (
                                <InformationItem
                                    as={motion.div}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    key={index}>
                                    <GatsbyImage image={image} alt={trip.alt}/>
                                    <InformationBox>
                                        <InformationTitle>
                                            {trip.name}
                                        </InformationTitle>
                                        <InformationText>
                                            {trip.description}
                                        </InformationText>
                                        <InformationPrice>
                                           Price  <ImPriceTags/>  {trip.price}
                                        </InformationPrice>
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
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InformationItem = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 25px;
  flex-direction: column;

  @media (min-width: ${({theme}) => theme.media.desktopMin}) {
    flex-direction: row;
  }

  .gatsby-image-wrapper {
    width: 100%;
    margin-bottom: 20px;
    @media (min-width: ${({theme}) => theme.media.desktopMin}) {
      width: 50%;
      margin: 0 20px 0 0;
    }
  }
`;

const InformationBox = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media (min-width: ${({theme}) => theme.media.desktopMin}) {
    width: 50%;
    text-align: left;
  }
`;

const InformationTitle = styled.h3`
  color: ${({theme}) => theme.colors.primary};
  font-size: 21px;
  margin-bottom: 20px;
`;

const InformationBoxSearchSort = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
  flex-direction: column;
  @media (min-width: ${({theme}) => theme.media.desktopMin}) {
    flex-direction: row;
  }
`;

const InformationText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const InformationPrice = styled.span`
  font-size: 16px;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.five};
  padding:5px;
  border-radius: 20px;
  display: inline-block;
  align-self: flex-end;
`;
