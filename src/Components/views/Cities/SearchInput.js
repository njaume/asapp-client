import React, { useEffect } from "react";
import { connect } from "react-redux";
import useDebounce from '../../../libs/UseDebounce'
import { bindActionCreators } from "redux";
import { search, setFilter, clearCities } from '../../../redux/actionsCreators/cities';
import { withTheme } from "styled-components";
import SquareInput from '../../shared/SquareInput'
let lastTermValue = ''

const size = 20
const SearchHook = (props) => {
    const { isLoading, onDebouncedValChange, setFilter, search, filter, clearCities, ...others } = props

    const debouncedSearchTerm = useDebounce(filter, 700);

    useEffect(() => {
        if (debouncedSearchTerm && debouncedSearchTerm !== lastTermValue) {
            if (onDebouncedValChange) onDebouncedValChange()
            fetchAPI(debouncedSearchTerm);
            return () => {
                lastTermValue = ''
            }
        }
        lastTermValue = debouncedSearchTerm
    }, [debouncedSearchTerm]);

    const fetchAPI = (val) => {
        clearCities()
        search(val, 0, size, true);
    }
    const onChangeHandler = event => {
        event.persist();
        const val = event.target.value;
        setFilter(val);
    };

    return (
        <SquareInput
            {...others}
            isLoading={isLoading}
            value={filter}
            onChange={onChangeHandler}
        />
    );
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            search,
            setFilter,
            clearCities
        },
        dispatch
    );

const mapStateToprops = state => {
    return {
        isLoading: state.cities.isLoading,
        page: state.cities.page,
        filter: state.cities.filter
    }
}
export default connect(mapStateToprops, mapDispatchToProps)(withTheme(SearchHook));
