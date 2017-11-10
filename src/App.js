// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Home from "./container/HomeContainer";
import Landing from "./container/LandingContainer";
import RecipePage from "./container/RecipePageContainer";
import Sidebar from "./container/SidebarContainer";
import FavoritesPage from "./container/FavoritesContainer";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Landing: { screen: Landing },
		RecipePage: { screen: RecipePage },
		Favorites: { screen: FavoritesPage },
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Landing",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
