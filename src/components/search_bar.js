import React, { Component, Fragment } from 'react';

class SearchBar extends Component {
	constructor (props) {
		super(props)

		this.state = { term: '' }
	}
	render () {
		return (<Fragment>
			<input onChange={event => this.setState({ term: event.target.value })} />
		 <br />
			Value of the input: { this.state.term }
		</Fragment>)
	}

}

export default SearchBar
