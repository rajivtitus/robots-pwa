import { Component } from "react";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import Header from "../components/Header";

class MainPage extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	filterRobots = (robots) => {
		return robots.filter((robot) => {
			return robot.name
				.toLowerCase()
				.includes(this.props.searchField.toLowerCase());
		});
	};

	render() {
		const { robots, onSearchChange, isPending } = this.props;
		const filteredRobots = this.filterRobots(robots);

		return (
			<div className="tc">
				<Header />
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					{isPending ? (
						<h1>Loading</h1>
					) : (
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
						</ErrorBoundry>
					)}
				</Scroll>
			</div>
		);
	}
}

export default MainPage;
