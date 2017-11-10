import Contstants from '../constants/actionTypes';

const
  ACTION_HANDLERS = {
    [Contstants.BEGIN_REQUEST]: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [Contstants.LOAD_RESULTS]: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        isLoading: false,
        list: payload.recipes || [],
      };
    },
    [Contstants.MARK_FAVORITE]: (state, action) => {
      const { recipe_id } = action,
            otherItems = state.list.filter(item => item.recipe_id !== recipe_id);
      let markedItem = state.list.find(item => item.recipe_id === recipe_id);
          markedItem.isFavorite = markedItem.isFavorite ? !markedItem.isFavorite : true;
      return {
        ...state,
        isLoading: false,
        list: [
          ...otherItems,
          markedItem
        ],
      };
    },
  },

	initialState = {
		list: [],
		isLoading: true,
	};

export default function (state: any = initialState, action: Function) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
