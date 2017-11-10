// @flow
import { AsyncStorage } from "react-native";
import devTools from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import reducer from "../reducers";

export default function configureStore(onCompletion: () => void): any {
	const enhancers = [
    applyMiddleware(thunk)
	];

	const composeEnhancers =
	  (__DEV__ &&
	    typeof window !== "undefined" &&
	    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	  compose;
	/* eslint-enable no-undef */


	const enhancer = composeEnhancers(...enhancers);

	const store = createStore(reducer, enhancer);
	persistStore(store, { storage: AsyncStorage }, onCompletion);

	return store;
}
