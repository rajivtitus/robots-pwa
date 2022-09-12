import { shallow } from "enzyme";

import CounterButton from "./CounterButton";

const mockColor = "red";

it("renders the counterbutton commponent", () => {
	expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("increments the CounterButton commponent", () => {
	const wrapper = shallow(<CounterButton color={mockColor} />);
	expect(wrapper).toMatchSnapshot();

	expect(wrapper.props().color).toEqual("red");
	wrapper.find('[id="counter"]').simulate("click");
	expect(wrapper.state()).toEqual({ count: 1 });
});
