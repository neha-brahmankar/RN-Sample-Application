// @flow
import * as React from "react";
import LandingPage from "../../stories/screens/Landing";
export interface Props {
	navigation: any,
}

export interface State {}
export default class LandingContainer extends React.Component<Props, State> {
	render() {
		return <LandingPage navigation={this.props.navigation} />;
	}
}
