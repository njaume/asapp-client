import styled from "styled-components";
export const Container = styled.div`
    width: 100%;
    margin-top: 2em;
`;

export const ListItemContainer = styled.div`
    width: 100%;
    padding-bottom: .5em;
    border-bottom: ${props => `1px solid ${props.theme.greyLight5};`}; 
`;

