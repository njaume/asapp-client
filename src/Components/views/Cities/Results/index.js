import { connect } from 'react-redux';
import View from './View';
import { bindActionCreators } from 'redux'
import {search} from '../../../../redux/actionsCreators/cities'
const mapStateWithProps = (state) => {
    return {
    cities: state.cities.data,
    isLoading: state.cities.isLoading,
    page: state.cities.page,
    filter: state.cities.filter,
    hasMore: state.cities.hasMore
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(
        { 
            search 
        }, dispatch)
  }

export default connect(mapStateWithProps, mapDispatchToProps)(View);
