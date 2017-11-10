// @flow
import * as React from "react";
import FavoritesPage from "../../stories/screens/Favorites";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import actions from "../../actions";
import Selectors from "../../selectors";
import _, {sortBy, slice} from "lodash"

const ITEMS_PER_PAGE = 2;

export interface Props {
	navigation: any,
	actions: Object,
	data: Object,
}
export interface State {}
class FavoritesPageContainer extends React.Component<Props, State> {
	render() {
		const myFavorites = _.filter(this.props.data, item => item.isFavorite)
		return <FavoritesPage navigation={this.props.navigation}
												  list={myFavorites}
						/>
	}
}

const
	mapStateToProps = state => ({
			data: Selectors.favoriteSelector(state),
			isLoading: state.recipes.isLoading,
	});


export default connect(mapStateToProps, null)(FavoritesPageContainer);
