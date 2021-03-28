import React, { useEffect } from "react";
import { withTheme } from "styled-components";
import Checkbox from "../../../shared/Checkbox";
import { Text } from "../../../shared/Text";
import { ListItemContainer } from './styles'
export default withTheme((props) => {
    const { theme, city, onChange, checked } = props

    return (
        <ListItemContainer>
            <Checkbox checked={checked} onChange={() => { onChange(city.geonameid, !checked) }}>
                <Text fontSize='M' fontWeight='normal'>
                    {city.name}
                </Text>
                <Text fontSize='XS' fontWeight='light' color={theme.taupeGray}>
                    {city.subcountry}
                </Text>
            </Checkbox>
        </ListItemContainer>

    )
})