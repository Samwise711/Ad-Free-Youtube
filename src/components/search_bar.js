import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  //Value of the input: {this.state.term}   could put this back in div tag
  // onChange is a React property
}
//event is an object, with lots of sub-properties than can be called
// every class must have render() function
// new SearchBar  yields new instance
// each class object has it's own State Object
// state records and reacts to user events
// after state change, component immediately re-renders
// all children re-render as well
// functional components do NOT have state
// controlled component receives value from State

export default SearchBar;
