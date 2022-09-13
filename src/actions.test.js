import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";

import {
	CHANGE_SEARCHFIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
} from "./constants";

import { setSearchField, requestRobots } from "./actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Searchfield actions", () => {
	it("set a searchfield ", () => {
		const mockText = "hello";
		const expectedAction = {
			type: CHANGE_SEARCHFIELD,
			payload: mockText,
		};
		expect(setSearchField(mockText)).toEqual(expectedAction);
	});
});

describe("Request robots actions", () => {
	const initialState = {};
	const store = mockStore(initialState);
	const robotsMock = [
		{
			id: 1,
			name: "Leanne Graham",
			username: "Bret",
			email: "Sincere@april.biz",
		},
	];

	it("robots request pending action", () => {
		const expectedActions = { type: REQUEST_ROBOTS_PENDING };
		store.dispatch(requestRobots());
		const receivedActions = store.getActions();

		expect(receivedActions).toEqual([expectedActions]);
	});
});
