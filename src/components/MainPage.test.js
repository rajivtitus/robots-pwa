import { shallow } from "enzyme";

import MainPage from "./MainPage";

let wrapper;

const mockRobots = [
	{
		id: 1,
		name: "Leanne Graham",
		username: "Bret",
		email: "Sincere@april.biz",
	},
];

beforeEach(() => {
	const mockStore = {
		onSearchChange: jest.fn(),
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: "",
		isPending: false,
	};
	wrapper = shallow(<MainPage {...mockStore} />);
});

it("expects to render MainPage", () => {
	expect(wrapper).toMatchSnapshot();
});

it("filters robots correctly", () => {
	const mockProps = {
		onSearchChange: jest.fn(),
		onRequestRobots: jest.fn(),
		robots: mockRobots,
		searchField: "an",
		isPending: false,
	};

	const wrapper2 = shallow(<MainPage {...mockProps} />);

	expect(wrapper.instance().filterRobots([])).toEqual([]);
	expect(wrapper2.instance().filterRobots(mockRobots)).toEqual(mockRobots);
});
