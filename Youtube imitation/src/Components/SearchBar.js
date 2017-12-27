import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTerm(term);
    }
    render() {
        return (
            <div className="SearchBar">
                <input
                    value={this.state.term}
                    onChange={(e) => this.onInputChange(e.target.value)} />
            </div>
        );
    }
}

export default SearchBar;