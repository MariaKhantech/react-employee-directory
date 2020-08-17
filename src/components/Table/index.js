import React from 'react';
import Moment from 'moment';

function Table(props) {
	//filter employees by name types in the search box
	var employees = props.results.filter((item) => {
		return item.name.first.startsWith(props.searchTerm);
	});

	console.log('in table code');

	//create the rows of employees
	const rows = employees.map((element) => (
		<tr key={element.id.value}>
			<td className="align-middle">
				<img src={element.picture.medium} className="img-responsive" />
			</td>
			<td>{element.name.first}</td>
			<td>{element.email}</td>
			<td>{element.phone}</td>
			<td>{Moment(element.dob.date).format('MM-DD-YYYY')}</td>
		</tr>
	));

	return (
		<div className="row mt-5">
			<table className="table table-striped">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Picutre</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Phone</th>
						<th scope="col">D.O.B</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		</div>
	);
}

export default Table;
