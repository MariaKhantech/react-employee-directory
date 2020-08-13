import React, { Component } from 'react';
import API from '../../util/API';
import SearchBar from '../SearchBar'

class Container extends Component {
	//declare 2 states searchTerm(text types in input box) and results (array of employees)
	state = {
		searchTerm: '',
		results: []
    };
    

      //when the component first loads search for employees using the API
    componentDidMount() {
        API.getEmployees()
        .then(response => {
            this.setState({results:response.data.results})
           
        })
        .catch(err => console.log(err));

        console.log(this.state.results);
    }

    //class function to render the container and the components(search input, bootstrap table) within the containter
    render() {
        return (
          <div className= "container mt-5">
             <SearchBar search={this.state.searchTerm}> 
            </SearchBar>
          </div>
        );
      }
}

export default Container;
