import React from 'react';
import Wrapper from './components/Wrapper';
import './App.scss';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';

function App() {
	return (
		<Wrapper>
			<Jumbotron />
			<Container />
		</Wrapper>
	);
}

export default App;
