import React from "react";

class User extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.user.photo} alt="user" />
                <h2>{this.props.user.name}</h2>
                <p>{this.props.user.company}</p>
                <p>{this.props.user.location}</p>
                <p>{this.props.user.bio}</p>
                <p>{this.props.user.profile}</p>
            </div>
        )
    }
}

export default User;