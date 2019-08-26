import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import SCService from '../../services/SCService';

class SearchPage extends Component {
  state = {
    search: ''
  }

  searchChange = (event) => {
    this.setState({ search: event.target.value }, () => {
      console.log(this.state.search);
    });
  }

  searchClicked = () => {
    console.log('SearchClicked');
    SCService.query(this.state.search)
      .then(function (tracks) {
        console.log(tracks);
      });
  }

  render() {
    return (
      <div>
        <h1>The Search Page</h1>
        <Search
          searchChange={this.searchChange}
          searchClicked={this.searchClicked} />
      </div>
    );
  }
}

export default SearchPage;
