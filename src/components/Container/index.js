import React, { Component } from 'react';
import API from '../../util/API';
import SearchBar from '../SearchBar';
import Table from '../Table';

class Container extends Component {
	//declare 2 states searchTerm(text types in input box) and results (array of employees)
	state = {
		searchTerm: '',
		results: []
	};

	//when the component first loads search for employees using the API
	componentDidMount() {
		API.getEmployees()
			.then((response) => {
				this.setState({ results: response.data.results });
			})
			.catch((err) => console.log(err));
	}

	//handle the input change of the search box, and update this.state.searchTerm
	handleInputChange = (event) => {
		event.preventDefault();
		this.setState({ searchTerm: event.target.value });
		console.log(this.state.searchTerm);
	};

	//class function to render the container and the components(search input, bootstrap table) within the containter
	render() {
		return (
			<div className="container mt-5">
				<SearchBar search={this.state.searchTerm} handleInputChange={this.handleInputChange}>
					{' '}
				</SearchBar>
				<Table results={this.state.results} searchTerm={this.state.searchTerm} />
			</div>
		);
	}
}

export default Container;
