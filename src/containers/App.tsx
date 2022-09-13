import React, { Component } from "react";
import { connect } from "react-redux";

import { setSearchField, requestRobots } from "../actions";
import "./App.css";
import MainPage from "../components/MainPage";
import { RootState, AppDispatch } from "../index";

const mapStateToProps = (state: RootState) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) =>
			dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()),
	};
};

class App extends Component<any> {
	render() {
		const { searchField, robots, isPending, onSearchChange, onRequestRobots } =
			this.props;

		return (
			<MainPage
				searchField={searchField}
				robots={robots}
				isPending={isPending}
				onSearchChange={onSearchChange}
				onRequestRobots={onRequestRobots}
			/>
		);
	}
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
