import React, { Component } from 'react';
import Search from '../../components/Search/Search';

class SearchPage extends Component {
  state = {
  }

  searchClicked = () => {
    console.log('SearchClicked');
  }

  render() {
    return (
      <div>
        <h1>The Search Page</h1>
        <Search searchClicked={this.searchClicked} />
      </div>
    );
  }
}

export default SearchPage;
