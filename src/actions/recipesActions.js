import TypeContstants from '../constants/actionTypes';
import ApiConstants from '../constants/api'

const
	listIsLoading = (bool: boolean) => ({
		type: TypeContstants.BEGIN_REQUEST,
		isLoading: bool,
	}),

	fetchListSuccess = (payload: Object) => ({
		type: TypeContstants.LOAD_RESULTS,
		payload,
	}),

	addFavorite = (recipe_id) => ({
		type: TypeContstants.MARK_FAVORITE,
		recipe_id,
	}),

  fetchList = () => (dispatch, getState) => {
		dispatch(listIsLoading());
		return fetch(ApiConstants.FETCH_RECIPES)
			.then((response) => {
				return response.json().then((json) => {
					dispatch(fetchListSuccess(json))
				})
				.catch(err => {
					//Handle Error
				});
			});
	};

	markFavorite = (itemId, callbackSuccess, callbackFailure)  => (dispatch, getState) => {
		dispatch(addFavorite(itemId))
		return callbackSuccess()
	}

export default {
	fetchList,
	markFavorite
}
