import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import configureStore from './configureStore'
import { saveState } from './localStorage'

import 'normalize.css'
import 'flexboxgrid'
import './styles/main.css'

let store = configureStore()

store.subscribe(() => {
	saveState(store.getState())
})

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root')
)