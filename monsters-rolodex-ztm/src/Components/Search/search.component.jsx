import { Component } from "react";
import "./search.styles.css"

class Search extends Component {

    render() {
        return (
            <input
                className={`search-box ${this.props.className}`}
                type="search"
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        )
    }

}

export default Search