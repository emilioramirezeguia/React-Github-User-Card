import React from "react";

class Form extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    name="username"
                    placeholder="Search by username"
                    value={this.props.username}
                    onChange={this.props.handleChange}
                />
                <button onClick={this.props.searchUser}>Search</button>
            </form>
        )
    }
}

export default Form;