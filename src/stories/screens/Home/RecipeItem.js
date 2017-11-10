import * as React from "react";
import { Card, CardItem, Text, Button, Icon, Left, Right, Body, Thumbnail } from "native-base";

import styles from "./styles";

export interface Props {
	onItemSelect: any,
  item: Object
}

const RecipeItem = ({
	onItemSelect,
	item
}) => {
		return (
      <Card>
        <CardItem button
          onPress={onItemSelect}>
          <Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note>{item.publisher}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Thumbnail
            source={{ uri: item.image_url }}
            style={{ height: 200, width: null, flex: 1, borderRadius: 0 }}
          />
        </CardItem>
        <CardItem>
					<Text style={styles.textLink}>visit_us : {item.publisher_url}</Text>
        </CardItem>
      </Card>
		);
}

export default RecipeItem;
