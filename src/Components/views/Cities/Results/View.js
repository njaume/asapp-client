import React from "react";
import ListItem from './ListItem'
import InfiniteScroll from 'react-infinite-scroller';
import { Container } from './styles'
export default (props) => {
    const { cities, hasMore, filter, page, isLoading, search } = props
    const loadFunc = () => {
        search(filter, page, 20, false)
    }
    return (
        <Container>
            <InfiniteScroll
                initialLoad={false}
                pageStart={0}
                loadMore={loadFunc}
                hasMore={!isLoading && hasMore}
            >
                {cities && cities.map((city) => (<ListItem city={city} />))}
            </InfiniteScroll>
        </Container>
    )
}