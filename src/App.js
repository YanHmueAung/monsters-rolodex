import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.components";
import {SearchBox} from "./components/search/search.components";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
  }
  handleEvent=e=>{
    this.setState({searchField:e.target.value});
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monster: user }));
  }
  //http://139.59.244.121/my_items
  //https://jsonplaceholder.typicode.com/users
  render() {
    const { monster, searchField } = this.state;
    const filteredMonsters = monster.filter((e) =>
      e.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleEvent={this.handleEvent}
        />
        <CardList monster={filteredMonsters} />
      </div>
    );
  }
}
export default App;
