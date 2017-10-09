import React from 'react'

import Header from './Header'
import Studio from './Studio'
import Footer from './Footer'

class App extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<Studio />
				<Footer />
			</div>
		)
	}
}

export default App