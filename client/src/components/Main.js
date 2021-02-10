import React from "react";
import API from "../utils/API";
import Table from "./Table";
import Sort from "./Sort";

class Main extends React.Component {
    state = {
        users: [],
        inTable: [],
        states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
        filter: ""
    };

    componentDidMount() {
        this.getUsers();
    };

    getUsers() {
        API.getUsers()
        .then(res => {
            this.setState({ 
                users: res.data.results,
                inTable: res.data.results
            });
        });
    };

    nameSort = () => {
        this.setState({
            inTable: this.state.inTable.sort((a,b) => a.name.last.localeCompare(b.name.last))
        });
    };

    stateSort = () => {
        this.setState({
            inTable: this.state.inTable.sort((a,b) => a.location.state.localeCompare(b.location.state))
        });
    };

    reset = event => {
        event.preventDefault();
        this.setState({
            inTable: this.state.users
        });
        document.querySelector("#filterInput").value = "";
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const filterState = document.querySelector("#filterInput").value;
        const filtered = this.state.users.filter(user => user.location.state === filterState);
        this.setState({
            inTable: filtered
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Sort 
                            name={this.nameSort}
                            state={this.stateSort}
                        />
                    </div>
                    <div className="col-8">
                        <form className="m-5">
                            <input
                                id="filterInput"
                                type="text"
                                name="filter"
                                list="states"
                                style={{width: "80%"}}
                                placeholder="See employees from State entered here"
                            />
                            <datalist id="states">
                                {this.state.states.map(state => (
                                    <option value={state} key={state}></option>
                                ))}
                            </datalist>
                            <button
                                type="submit"
                                className="btn btn-info"
                                onClick={this.handleFormSubmit}>Filter</button>
                            <button
                                className="btn btn-warning"
                                onClick={this.reset}>Reset</button>
                        </form>
                    </div>
                </div>
                <Table
                    nameSort={this.nameSort}
                    stateSort={this.stateSort}
                    users={this.state.inTable}
                />
            </div>
        )
    }
}

export default Main;