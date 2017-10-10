import React from 'react'

import Header from './Header'
// import Studio from './Studio'
import ConfiguratorContainer from './ConfiguratorContainer'
import Footer from './Footer'

import * as actions from '../actions'

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<ConfiguratorContainer />
				<Footer />
			</div>
		)
	}
}

export default App