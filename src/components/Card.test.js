import { shallow } from "enzyme";

import Card from "./Card";

it("renders the Card component", () => {
	expect(shallow(<Card />)).toMatchSnapshot();
});
