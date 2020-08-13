import React, { Component } from 'react';
import API from '../../util/API'

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
    }
}

export default Container;
