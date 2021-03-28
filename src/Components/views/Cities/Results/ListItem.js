import React, { useEffect } from "react";
import { withTheme } from "styled-components";
import Checkbox from "../../../shared/Checkbox";
import { Container } from "../../../shared/Checkbox/styles";
import { Text } from "../../../shared/Text";
import { ListItemContainer } from './styles'

const FilterEmphValue = ({ theme, filter = '', value = '', fontSize, ...others }) => {
    const index = value.trim().toLowerCase().indexOf(filter.trim().toLowerCase())
    console.log('index', index, value)
    let valuesSplited = []
    if(index !== -1) {
       valuesSplited.push(value.substr(0, index))
       valuesSplited.push(value.substr(index, filter.length))
       valuesSplited.push(value.substr(index + filter.length, value.length))
    }
    return index === -1 ? (
        <Text fontSize={fontSize} fontWeight='normal' {...others}>
            {value}
        </Text>) :
        <Container>
            {valuesSplited[0] && <Text fontSize={fontSize} {...others} fontWeight='normal' style={{paddingRight: '.3em'}}>
                {valuesSplited[0]}
            </Text>}
           {valuesSplited[1] && <Text fontSize={fontSize} {...others} fontWeight='bold' style={{paddingRight: '.3em'}}>
                {valuesSplited[1]}
            </Text>}
           {valuesSplited[2] && <Text fontSize={fontSize} {...others} fontWeight='normal'>
                {valuesSplited[2]}
            </Text>}
        </Container>
}
export default withTheme((props) => {
    const { theme, city, onChange, checked, filter } = props
    return (
        <ListItemContainer>
            <Checkbox checked={checked} onChange={() => { onChange(city.geonameid, !checked) }}>
                <FilterEmphValue value={city.name} fontSize='M' filter={filter} />
                <FilterEmphValue fontSize='XS' fontWeight='light' color={theme.taupeGray} filter={filter} value={`${city.subcountry} - ${city.country}`} />
            </Checkbox>
        </ListItemContainer>

    )
})