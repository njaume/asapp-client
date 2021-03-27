import styled from "styled-components";

export const Text = styled.div`
    color: ${props => (props.color ? props.color : props.theme.text)};
    font-size:  ${props => `${props.theme.fontsSizes[props.fontSize]}`};
    font-weight: ${props => `${props.theme.fontWeights[props.fontWeight]}`};
    line-height: ${props => `${props.theme.lineHeights[props.fontSize]}`};
`;