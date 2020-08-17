import React from 'react';
import './style.scss';

//wraps arpund the entire body
function Jumbotron(props) {
	console.log(props.children);
	return (
		<header className="jumbotron">
			<span className="badge ">
				{' '}
				<h1 className="display-2">Employee Directory</h1>
				<p className="lead">A simple employee directory using react</p>
			</span>
		</header>
	);
}

export default Jumbotron;
