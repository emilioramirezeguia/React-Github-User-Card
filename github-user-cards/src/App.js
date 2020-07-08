import React from 'react';
import User from "./components/User";
import Follower from "./components/Follower";
import Form from "./components/Form";
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: [],
      username: "emilioramirezeguia"

    }
  }

  componentDidMount() {
    // Fetch data from Github user's profile 
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(response => {
        this.setState({
          users: [response.data]
        })
      })
      .catch(error => console.log(error))

    // Fetch that same user's followers' data
    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(response => {
        this.setState({
          followers: response.data
        })
      })
      .catch(error => console.log(error))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.username !== prevState.username) {
      console.log("A new user was searched!");
      // Fetch data from requested Github user's profile
      axios.get(`https://api.github.com/users/${this.state.username}`)
        .then(response => {
          this.setState({
            users: [response.data]
          })
        })
        .catch(error => console.log(error))

      // Fetch that same user's followers' data
      axios.get(`https://api.github.com/users/${this.state.username}/followers`)
        .then(response => {
          this.setState({
            followers: response.data
          })
        })
        .catch(error => console.log(error))

    }
  }

  searchUser = username => {
    this.setState({
      username: username
    })
  }


  render() {
    if (this.state.users.length === 0) {
      return <p>Loading users...</p>;
    }
    if (this.state.followers.length === 0) {
      return null;
    }
    return (
      <div className="App" >
        <h1>Github Users</h1>
        <Form searchUser={this.searchUser} />
        {
          this.state.users.map(user => <User user={user} />)
        }
        <h2>Followers</h2>
        {
          this.state.followers.map(follower => <Follower follower={follower} />)
        }
      </div>
    );
  }

}

export default App;
