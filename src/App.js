import React from 'react';
import Wrapper from './components/Wrapper';
import './App.scss';
import Carousel from './components/Carousel';
import Container from './components/Container';

function App() {
	return (
		<Wrapper>
			<Carousel />
      <Container/>
		</Wrapper>
	);
}

export default App;
