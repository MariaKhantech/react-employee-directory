import React from 'react';
import './style.scss';

function SearchBar(props) {
	return (
		<form>
			<div className="form-group">
				<input
					onChange={props.handleInputChange}
					value={props.searchTerm}
					name="search"
					type="text"
					className="form-control"
					placeholder="Filter by Name..."
					id="search"
				/>
			</div>
		</form>
	);
}
export default SearchBar;
