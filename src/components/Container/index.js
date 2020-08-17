import React, { Component } from 'react';
import API from '../../util/API';
import SearchBar from '../SearchBar';
import Table from '../Table';

class Container extends Component {
	//declare 3 states searchTerm(text types in input box), results (array of employees), and the sort direction
	state = {
		searchTerm: '',
		results: [],
		sortDirection: 'asc'
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

	//sort the array of employee objects by name by asc or desc
	sortbyName = () => {
		const copyArray = [ ...this.state.results ];
		if (this.state.sortDirection === 'asc') {
			copyArray.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
			this.setState({ results: copyArray });
			this.setState({ sortDirection: 'desc' });
		} else {
			copyArray.sort((a, b) => (a.name.first < b.name.first ? 1 : -1));
			this.setState({ results: copyArray });
			this.setState({ sortDirection: 'asc' });
		}
	};

	//class function to render the container and the components(search input, bootstrap table) within the containter
	render() {
		return (
			<div className="container mt-5">
				<SearchBar search={this.state.searchTerm} handleInputChange={this.handleInputChange} />
				<Table results={this.state.results} searchTerm={this.state.searchTerm} sortByName={this.sortbyName} />
			</div>
		);
	}
}

export default Container;
