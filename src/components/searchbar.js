import React, { Component } from 'react';

// const SearchBar = () => <input />; - functional component

// Class based component - we invoked { Compomnent } and we extend it now
class SearchBar extends Component {

	//All JS classes have special state called constructor. Is a function called automatically when new instance of the class is created(it's called every time). It's for setting up variables and states.
	constructor(props) {
		super(props); // calling parrent method(super)

		this.state = {term: 'hello'}; 
	}
	//defining methods
	render() {
		// setState is for updating state
		return ( 
											// we set the term to event.target.value
			<div className="search-bar"><input 
				value={this.state.term}
				 onChange = {event => this.onInputChange(event.target.value)}/><br/>
			</div>
		);
	}
	
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
} 

export default SearchBar;