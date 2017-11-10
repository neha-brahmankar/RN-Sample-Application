import * as React from "react";
import {
	Container,
	Header,
	Title,
	Content,
	Text,
	Button,
	Icon,
	Left,
	Right,
	Body,
	List,
	ListItem,
	Thumbnail,
	View,
	Footer
} from "native-base";
import { WebView } from 'react-native';
import { isEmpty } from 'lodash'

import styles from "./styles";
export interface Props {
	navigation: any,
	list: Object
}
export interface State {}
class FavoritesPage extends React.Component<Props, State> {
	render() {
		const
			param = this.props.navigation.state.params;

		return (
			<Container>
				<Header>
					<Left>
						<Button transparent>
							<Icon
								active
								name="menu"
								onPress={() => this.props.navigation.navigate("DrawerOpen")}
							/>
						</Button>
					</Left>
					<Body>
						<Title>My Favorites</Title>
					</Body>
					<Right />
				</Header>
        <Content>
          <List>
            {!isEmpty(this.props.list) ? this.props.list.map((item, index) => (
							<ListItem avatar key={index} onPress={() => this.props.navigation.navigate("RecipePage", { item })}>
	              <Left>
	                <Thumbnail source={{ uri: item.image_url }} />
	              </Left>
	              <Body>
	                <Text>{item.title}</Text>
	                <Text note>Eating what is healthy will always keep you happy . .</Text>
	              </Body>
	              <Right>
	                <Text note>3:43 pm</Text>
	              </Right>
	            </ListItem>
						)) :<Header>
									<View style={{ backgroundColor: "#F8F8F8", alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
										<Text style={{ color: "#000" }}>No Any Favorites Yet</Text>
									</View>
								</Header>
								}
          </List>
        </Content>
      </Container>
		);
	}
}

export default FavoritesPage;
