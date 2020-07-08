import React from "react";

class Follower extends React.Component {
    render() {
        return (
            <div className="user-card">
                <div className="basic-info">
                    <img src={this.props.follower.avatar_url} alt="user" />
                </div>
                <div className="detailed-info">
                    <h2>{this.props.follower.login}</h2>
                    <p>Profile: <a href={this.props.follower.html_url}>{this.props.follower.html_url}</a></p>
                </div>

            </div>
        )
    }
}

export default Follower;