import React, { Component } from "react";
import PresList from "../components/PresList";
import SearchGroup from "../components/SearchGroup";
import SearchItem from "../components/SearchItem";
import SearchItem2 from "../components/SearchItem2";
import Scroll from "../components/Scroll";
import ErrorBound from "../components/ErrorBound";
import { stuff } from "../stuff";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stuff: stuff,
      searchgroup: "",
      searchitem: "",
      searchitem2: ""
    };
  }

  onNewSearchPers = event => {
    this.setState({ searchgroup: event.target.value });
  };

  onNewSearchItem = event => {
    this.setState({ searchitem: event.target.value });
  };
  onNewSearchItem2 = event => {
    this.setState({ searchitem2: event.target.value });
  };

  render() {
    //filter by two categories
    const { stuff, searchgroup, searchitem, searchitem2 } = this.state;
    const filteredstuff = stuff.filter(stuff => {
      return (
        stuff.group.toLowerCase().includes(searchgroup.toLowerCase()) &&
        stuff.item.toLowerCase().includes(searchitem.toLowerCase()) &&
        stuff.item.toLowerCase().includes(searchitem2.toLowerCase())
      );
    });
    return (
      <div className="tc">
        <h1 className="brand">Easy Wine Pairings </h1>
        <p className="dark-red">
          I'm eating <SearchItem newSearchItem={this.onNewSearchItem} /> and
          <SearchItem2 newSearchItem2={this.onNewSearchItem2} /> With
          <SearchGroup newSearchPers={this.onNewSearchPers} />
        </p>{" "}
        <Scroll>
          <ErrorBound>
            <PresList stuff={filteredstuff} />{" "}
          </ErrorBound>{" "}
        </Scroll>{" "}
      </div>
    );
  }
}
export default App;
