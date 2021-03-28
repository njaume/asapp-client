import React from "react";
import { Text } from "../Text";
import { LayoutContainer, BodyContainer } from './styles'
export default (props) => {
    const { children } = props
    return <LayoutContainer>
        <BodyContainer>
            <Text fontSize='XL' fontWeight='bold' style={{marginBottom: '1em'}}>
                Select your favorites cities
            </Text>
            {children}
        </BodyContainer>
    </LayoutContainer>
}