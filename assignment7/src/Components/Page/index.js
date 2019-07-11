import React, { Component } from "react";
import Searchbar from "./Searchbar";
import Displaytable from "./Displaytable";
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false, searchtext: "" };
  }
  updateChecked = check => {
    this.setState({ checked: check });
  };
  updateSearchbar = text => {
    this.setState({
      searchtext: text
    });
  };
  render() {
    return (
      <>
        <Searchbar
          searchtext={this.state.searchtext}
          checked={this.state.checked}
          updateCheck={this.updateChecked}
          updateSearch={this.updateSearchbar}
        />

        <Displaytable
          searchtext={this.state.searchtext}
          checked={this.state.checked}
          products={this.props.products}
        />
      </>
    );
  }
}
export default Page;
