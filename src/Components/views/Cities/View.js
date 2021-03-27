import React, { useEffect } from "react";
import SquareInput from '../../shared/SquareInput'
import SearchIcon from '../../../assets/img/SearchIcon'
import SearchHook from "../../../libs/SearchHook";

export default (props) => {
    const { search,  filter, page } = props
    useEffect(() => {
        search(filter, page, 20)
        return () => {

        }
    }, [])

    return (
        <div>
            <SearchHook placeholder='Type to filter by city name or country' leftIcon={SearchIcon} />
        </div>)
}