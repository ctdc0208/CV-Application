import React from "react";
import styled from 'styled-components';

class Header extends React.Component {    
    render() {
        return (
            <StyledHeader>CV CREATOR</StyledHeader>
        )
    }
};

const StyledHeader = styled.header`
    font-size: 2rem;
    color: white;
    text-align: center;
    background-color: black;
    box-sizing: border-box;
    padding: 1rem;
    margin: 0rem;
`;

export default Header