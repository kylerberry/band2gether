import React from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux'

import Configurator from './Configurator'

class ConfiguratorContainer extends React.Component {

	submitHandler = config => {
		this.props.setConfig(config)
	}


	render() {
		return (
			<Configurator submitHandler={ this.submitHandler }/>
		)
	}
}

// bindActionCreators automatic when mapDispatchToProps is an Obj
export default connect(null, { ...actions })(ConfiguratorContainer)