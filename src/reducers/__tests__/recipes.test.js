import reducer from "../recipes";

describe("list reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual({
			list: [],
			isLoading: true,
		});
	});

	it("should handle BEGIN_REQUEST", () => {
		expect(
			reducer([], {
				type: "BEGIN_REQUEST",
				isLoading: true,
			})
		).toEqual({
			isLoading: true,
		});
	});

	it("should handle LOAD_RESULTS", () => {
		expect(
			reducer([], {
				type: "LOAD_RESULTS",
				payload: {
					count: 1,
					recipes: [{
						 publisher:"All Recipes",
						 f2f_url:"http://food2fork.com/view/12360",
						 title:"Easy Slow Cooker French Dip",
						 source_url:"http://allrecipes.com/Recipe/Easy-Slow-Cooker-French-Dip/Detail.aspx",
						 recipe_id:"12360",
						 image_url:"http://static.food2fork.com/103167cea.jpg",
						 social_rank:100.0,
						 publisher_url:"http://allrecipes.com"
					}]
				},
			})
		).toEqual({
			list: [{
				 publisher:"All Recipes",
				 f2f_url:"http://food2fork.com/view/12360",
				 title:"Easy Slow Cooker French Dip",
				 source_url:"http://allrecipes.com/Recipe/Easy-Slow-Cooker-French-Dip/Detail.aspx",
				 recipe_id:"12360",
				 image_url:"http://static.food2fork.com/103167cea.jpg",
				 social_rank:100.0,
				 publisher_url:"http://allrecipes.com"
			}],
			isLoading: false,
		});
	});
});
