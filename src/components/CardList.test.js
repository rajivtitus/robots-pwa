import { shallow } from "enzyme";

import CardList from "./Card";

const mockRobots = [
	{
		id: 1,
		name: "Leanne Graham",
		username: "Bret",
		email: "Sincere@april.biz",
	},
];

it("renders the cardlist component", () => {
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
