import * as React from "react";
import { Container, Header, Footer, Title, Content, Text, Button, Icon, Left, Right, Body, View } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class LandingPage extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 500 }}>
					<Body style={{ alignItems: "center" }}>
						<Icon name="egg" style={{ fontSize: 200 }} />
						<Title>Chef App</Title>
						<Icon name="arrow-forward" style={{ fontSize: 80 }} onPress={() => this.props.navigation.navigate("Home")}/>
					</Body>
				</Header>
				<Content />
				<Footer style={{ backgroundColor: "#F8F8F8" }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
						<Text style={{ color: "#000" }}>Cook Something Special</Text>
					</View>
				</Footer>
			</Container>
		);
	}
}

export default LandingPage;
