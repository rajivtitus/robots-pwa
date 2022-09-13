import React, { Component } from "react";

interface Props {}

interface State {
	count: number;
}

class CounterButton extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	shouldComponentUpdate(nextProps: Props, nextState: State) {
		if (this.state.count !== nextState.count) {
			return true;
		}
		return false;
	}

	handleChange = () => {
		this.setState((state) => ({ count: state.count + 1 }));
	};

	render() {
		return (
			<button id="counter" onClick={this.handleChange}>
				Count: {this.state.count}
			</button>
		);
	}
}

export default CounterButton;
