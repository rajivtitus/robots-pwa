import React, { Component } from "react";

class CounterButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	shouldComponentUpdate(nextProps, nextState) {
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
			<button id="counter" color={this.props.color} onClick={this.handleChange}>
				Count: {this.state.count}
			</button>
		);
	}
}

export default CounterButton;
