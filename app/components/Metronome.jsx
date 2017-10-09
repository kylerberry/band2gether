import React from 'react';
import * as actions from '../actions'

class Metronome extends React.Component {

	render() {
		return (
			<div>TickTock</div>
		)
	}
}

export default Metronome

// bindActionCreators automatic when mapDispatchToProps is an Obj
// export default connect(null, { ...actions })(Metronome)