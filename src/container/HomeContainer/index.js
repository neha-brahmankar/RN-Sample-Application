// @flow
import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
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
class HomeContainer extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		this.state={
			currentPage: 0,
			searchTerm: ''
		}
	}

	componentWillMount() {
		_.isEmpty(this.props.data) && this.props.actions.fetchList();
	}

	render() {
		const { perPageItems, totalPages } = this._itemsPerPage()
		return <Home navigation={this.props.navigation}
								 list={perPageItems}
								 nextPage={this._nextPage.bind(this)}
								 previousPage={this._previousPage.bind(this)}
								 page={this.state.currentPage+1}
								 totalPages={totalPages}
								 searchItem={this._setSerachTerm.bind(this)}
						/>;
	}

	_setSerachTerm(searchTerm) {
		this.setState({searchTerm})
	}

	_nextPage() {
		this.setState({currentPage: this.state.currentPage+1})
	}

	_previousPage() {
		this.setState({currentPage: this.state.currentPage-1})
	}

	_itemsPerPage() {
		const
			filteredItem = this.state.searchTerm ?
											_.filter(this.props.data, item => _.toLower(item.title).includes(_.toLower(this.state.searchTerm)))
										: this.props.data,
			allItems 		 = sortBy(filteredItem, item => item.title),
			chunks       = _.chunk(allItems, ITEMS_PER_PAGE)

		return {
			perPageItems : chunks[this.state.currentPage],
			totalPages: chunks.length
		};
	}
}

const
	mapStateToProps = state => ({
			data: Selectors.recipesSelector(state),
			isLoading: state.recipes.isLoading,
	}),

	mapDispatchToProps = (dispatch) => {
		const { fetchList } = actions;
    return {
      actions: bindActionCreators({ fetchList }, dispatch),
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
