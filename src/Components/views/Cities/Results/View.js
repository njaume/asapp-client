import React from "react";
import ListItem from './ListItem'
import InfiniteScroll from 'react-infinite-scroller';
import { Container } from './styles'
export default (props) => {
    const { cities, hasMore, filter, page, isLoading, search, selectedCities, selectCity } = props
    const loadFunc = () => {
        search(filter, page, 20, false)
    }

    const handleSelectCity = (geonameid, checked) => {
        selectCity(geonameid, checked)
    }
    return (
        <Container>
            <InfiniteScroll
                initialLoad={false}
                pageStart={0}
                loadMore={loadFunc}
                hasMore={!isLoading && hasMore}
            >
                {cities && cities.map((city) => (<ListItem filter={filter} key={`cities_list_${city.geonameid}`} onChange={handleSelectCity} city={city} checked={selectedCities.indexOf(city.geonameid) !== -1}/>))}
            </InfiniteScroll>
        </Container>
    )
}