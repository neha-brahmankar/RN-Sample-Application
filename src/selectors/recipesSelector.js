import { createSelector } from 'reselect';
import _ from 'lodash';

const
  getRecipes = (state) => state.recipes,

  recipesSelector = createSelector(
    getRecipes,
    recipes => {
      const recipesList = recipes && recipes.list,
            sortEnable  = recipes && recipes.sortState

        return recipesList && _.chain(recipesList)
                        .sortBy(recipe => sortEnable && recipe.social_rank)
                        .value()
    }
  ),

  favoriteSelector = createSelector(
    getRecipes,
    recipes => {
        return recipes && _.filter(recipes.list, item => item.isFavorite)
  });

export default {
  recipesSelector,
  favoriteSelector
};
