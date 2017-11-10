import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import { WebView } from 'react-native';

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class RecipePage extends React.Component<Props, State> {
	constructor(props) {
			 super(props);
			 const param = this.props.navigation.state.params;
			 this.state = {
					marked: param.item.isFavorite || false
			 };
	 }

	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.item.title : "Blank Page"}</Title>
					</Body>

					<Right>
						<Button transparent onPress={() => this.props.actions.markFavorite(param.item.recipe_id, () => {
							this.setState({marked: !this.state.marked})
						})}>
							<Icon active={this.state.marked} name='star' style={{color: 'white', fontSize: 35}}/>
						</Button>
					</Right>
				</Header>

				<Content contentContainerStyle={{flex: 1}}>
					<WebView source={{ uri: param.item.source_url }} />
				</Content>
			</Container>
		);
	}
}

export default RecipePage;
