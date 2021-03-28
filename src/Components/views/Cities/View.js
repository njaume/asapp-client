import React, { useEffect } from "react";
import SearchIcon from '../../../assets/img/SearchIcon'
import SearchInput from "./SearchInput";
import Results from './Results'
export default (props) => {
    const { search,  filter, page, getMyCities } = props
    useEffect(() => {
        search(filter, page, 20)
        getMyCities()
        return () => {

        }
    }, [])

    return (
        <div>
            <SearchInput placeholder='Type to filter by city name or country' leftIcon={SearchIcon} />
            <Results />
        </div>)
}