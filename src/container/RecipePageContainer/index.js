// @flow
import * as React from "react";
import RecipePage from "../../stories/screens/RecipePage";
import actions from "../../actions";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

export interface Props {
	navigation: any,
	actions: Object
}
export interface State {}
class RecipePageContainer extends React.Component<Props, State> {
	render() {
		return <RecipePage {...this.props}/>;
	}
}

const mapDispatchToProps = (dispatch) => {
	const { markFavorite } = actions;
	return {
		actions: bindActionCreators({ markFavorite }, dispatch),
	};
};


export default connect(null, mapDispatchToProps)(RecipePageContainer);
