import React from "react";
import styled from "styled-components";

class Footer extends React.Component {    
    render() {
        return (
            <StyledFooter>Copyright © 2022</StyledFooter>
        )
    }
};

const StyledFooter = styled.footer`
    font-size: 2rem;
    color: white;
    text-align: center;
    background-color: black;
    box-sizing: border-box;
    padding: 1rem;
    margin-top: 30rem;
`;

export default Footer