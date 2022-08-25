import React from 'react';
import styled from "styled-components";

const Select = ({options, defaultValue, value, onChange}) => {
    return (
        <SelectInfo
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <SelectOption disabled={true} value="">{defaultValue}</SelectOption>
            {
                options.map(option =>
                    <SelectOption key={option.value} value={option.value}>{option.name}</SelectOption>
                )
            }
        </SelectInfo>
    );
};

export default Select;

const SelectInfo = styled.select`
  width: 30%;
  padding: 10px;
  border: 1px solid ${({theme}) => theme.colors.fourth};
  color: ${({theme}) => theme.colors.fourth};
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  @media (min-width: ${({theme}) => theme.media.desktopMin}) {
    margin-bottom: 0;
    width: 20%;
  }
`

const SelectOption = styled.option`
`

