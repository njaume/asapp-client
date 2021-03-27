import styled from "styled-components";
import { device } from '../../../theme'
export const LayoutContainer = styled.div`
    width: 100vw;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
`;

export const BodyContainer = styled.div`
    width: 100%;
    margin-top: ${props => props.theme.spacing['20']};

    @media ${device.mobileL} { 
        max-width: 100%;
        margin-top: ${props => props.theme.spacing['10']};
    }

    @media ${device.laptop} { 
        max-width: 800px;
        margin-top: ${props => props.theme.spacing['20']};
    }

    @media ${device.desktop} {
        max-width: 1400px;
        margin-top: ${props => props.theme.spacing['20']};
    }
`;
