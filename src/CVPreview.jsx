import React from "react";
import styled from "styled-components";

class CVPreview extends React.Component {
    render() {
        return (
            <StyledPage>
                <StyledSubPage>page</StyledSubPage>    
            </StyledPage>
        )
    }
}

const StyledPage = styled.div`
    width: 210mm;
    min-height: 297mm;
    padding: 20mm;
    padding-bottom: 0;
    margin: 10mm auto;
    border: 1px #D3D3D3 solid;
    border-radius: 5px;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

    @page {
        size: A4;
        margin: 0;
    }

    @media print {
        html,
        body {
            width: 216mm;
            height: 279mm;
        }
        .page {
            margin: 0;
            border: initial;
            border-radius: initial;
            width: initial;
            min-height: initial;
            box-shadow: initial;
            background: initial;
            page-break-after: always;
        }
    }
`;

const StyledSubPage = styled.div`
    padding: 1cm;
    border: 5px red solid;
    height: 256mm;
    /* .page height -40mm (20 off top/bottom) */
    outline: 2cm #FFEAEA solid;
`;

export default CVPreview