import React from "react";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            formText: ""
        }
    }

    handleChange = event => {
        this.setState({
            formText: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.searchUser(this.state.formText)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Search by username"
                    value={this.state.formText}
                    onChange={this.handleChange}
                />
                <button>Search</button>
            </form>
        )
    }
}

export default Form;