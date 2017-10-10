import React from 'react';
import * as actions from '../actions'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

class Configurator extends React.Component {

	constructor(props) {
	    super(props);
	    /*this.state = { bpm : 95 };*/
	  }

	componentWillUpdate(nextProps, nextState) {
		return this.state.bpm !== nextState.bpm
	}

	render() {
		const { submitHandler } = this.props
		console.log(this)

		return (
			<form onSubmit={ submitHandler }>
				<label>BPM</label>
				<Field name="bpm"
					component="input"
					type="range"
					min="30"
					max="160" />
				<legend>#bpm value</legend>
			</form>
		)
	}
}

// bindActionCreators automatic when mapDispatchToProps is an Obj
export default reduxForm({ form: 'config' })(Configurator)