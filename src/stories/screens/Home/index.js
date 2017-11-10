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
  Body,
  Right,
  View,
  Input,
  Item
} from "native-base";
import RecipeItem from './RecipeItem';
import styles from "./styles";
import _ from 'lodash';

export interface Props {
  navigation: any;
  list: any;
  page: number;
  totalPages: number;
  searchItem: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  render() {
    const {
      list
    } = this.props
    return (
      <Container style={styles.container}>
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
            <Title>Home</Title>
          </Body>
          <Right>
            <Item rounded>
              <Icon  style={{color: 'white'}} active name='search' />
              <Input placeholder='Search' onChangeText={(text) => this.props.searchItem(text)}/>
            </Item>
          </Right>
        </Header>
        <Content>
          {_.isEmpty(list) ?
            <Header style={{ backgroundColor: "#F8F8F8", alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
              <Text style={{ color: "#000" }}>No Record Found</Text>
            </Header>
          : <View>
            {list && list.map((recipe, i) => (
              /*Card Component for rendering recipe Item*/
              <RecipeItem key={i}
                          item={recipe}
                          onItemSelect={() => this.props.navigation.navigate("RecipePage", { item: recipe })}
              />
            ))}
            <Body style={{flexDirection: 'row'}}>
              <View>
              {this.props.page > 1 &&
                <Button transparent onPress={this.props.previousPage}>
                  <Icon
                    active
                    name="arrow-back"
                  />
                  <Text>Previous</Text>
                </Button>
              }
              </View>
              <Text>Page - {this.props.page}</Text>
              <View>
              {this.props.totalPages > this.props.page &&
                <Button transparent onPress={this.props.nextPage}>
                <Text>Next</Text>
                <Icon
                  active
                  name="arrow-forward"
                />
              </Button>}</View>
            </Body>
          </View>}
        </Content>
      </Container>
    );
  }
}

export default Home;
