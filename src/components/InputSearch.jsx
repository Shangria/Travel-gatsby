import React from 'react';
import styled from "styled-components";

const InputSearch = ({value, onChange, placeholder}) => {
    return (
        <SearchInput
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
        />
    );
};

export default InputSearch;

const SearchInput = styled.input`
  width: 50%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${({theme}) => theme.colors.fourth};
  color: ${({theme}) => theme.colors.fourth};
`;
