import React from "react";

class User extends React.Component {
    render() {
        return (
            <div className="user-card">
                <div className="basic-info">
                    <img src={this.props.user.avatar_url} alt="user" />
                </div>
                <div className="detailed-info">
                    <h2>{this.props.user.name}</h2>
                    <p>{this.props.user.login}</p>
                    <p>{this.props.user.company}</p>
                    <p>{this.props.user.location}</p>
                    <p>{this.props.user.bio ? this.props.user.bio : "Full Stack Web Developer"}</p>
                    <p>Profile: <a href={this.props.user.html_url}>{this.props.user.html_url}</a></p>
                </div>

            </div>
        )
    }
}

export default User;