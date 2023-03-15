import { Component } from 'react';
import CardList from "./Components/Card-list/card-list.component"
import Search from "./Components/Search/search.component"
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    });
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <Search
          className="monstersSearchBox"
          onChangeHandler={onSearchChange}
          placeholder="search monsters" />
        <CardList monsters={filteredMonsters} />
      </div>

    )
  }
}

export default App;