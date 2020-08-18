import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Search extends Component {

  static propTypes = {
    data: PropTypes.string,
    search: PropTypes.func
  }

  state = {
    searchText: '',
    loading: true
  };

  // Load search string into state

  onChange = (e) => {
    this.setState({ searchText: e.target.value });
  }

  //Updates the page and path, then clears the search input

  handleSubmit = (e) => {
    e.preventDefault();
    let searchInput = this.state.searchText;
    let path = `/search/${searchInput}`;
    this.props.search(searchInput);
    this.props.history.push(path);
    document.getElementById('search').reset();
  }

  // Sync searches with the browser history

  componentDidUpdate() {
    let pathArray = window.location.pathname.split('/');
    let search = pathArray.length - 1;
    let searchLoc = pathArray[search];
    if (this.props.data !== searchLoc) {
      this.props.search(searchLoc);
    }
  }

  //Search bar UI 

  render() {
    return (
      <form className="search-form" id="search" onSubmit={this.handleSubmit}>
        <input type="search" name="search" placeholder="Find Something..." required onChange={this.onChange} />
        <button type="submit" className="search-button">Go!</button>
      </form>
    );
  }
};

export default withRouter(Search);