import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import recipeReducer from "./recipes";

export default combineReducers({
	form: formReducer,
	recipes: recipeReducer,
});
