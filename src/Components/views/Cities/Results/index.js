import { connect } from 'react-redux';
import View from './View';
import { bindActionCreators } from 'redux'
import { selectCity, search } from '../../../../redux/actionsCreators/cities'
const mapStateWithProps = (state) => {
    return {
        cities: state.cities.data,
        isLoading: state.cities.isLoading,
        page: state.cities.page,
        filter: state.cities.filter,
        hasMore: state.cities.hasMore,
        selectedCities: state.cities.selectedCities
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            selectCity,
            search
            
        }, dispatch)
}

export default connect(mapStateWithProps, mapDispatchToProps)(View);
