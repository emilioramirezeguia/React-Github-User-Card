import React from 'react';
import User from "./components/User";
import Follower from "./components/Follower";
import axios from "axios";
import './App.css';

const erlichBachman = {
  id: Date.now(),
  name: "Erlich Bachman",
  avatar_url: "https://avatars1.githubusercontent.com/u/8151169?v=4",
  company: "Aviato",
  location: "Bachmanity Capital",
  bio: "Erlich administers the Hacker Hostel, a tech incubator where Richard, Big Head, Dinesh, and Gilfoyle.",
  followers: 100,
  html_url: "https://github.com/rodionu"
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: []
    }
  }

  componentDidMount() {
    // Fetch data from Github user's profile 
    axios.get("https://api.github.com/users/emilioramirezeguia")
      .then(response => {
        this.setState({
          users: [...this.state.users, response.data]
        })
      })
      .catch(error => console.log(error))

    // Fetch that same user's followers' data
    axios.get("https://api.github.com/users/emilioramirezeguia/followers")
      .then(response => {
        this.setState({
          followers: response.data
        })
      })
      .catch(error => console.log(error))
  }


  render() {
    if (this.state.users.length === 0) {
      return <User user={erlichBachman} />;
    }
    if (this.state.followers.length === 0) {
      return null;
    }
    return (
      <div className="App" >
        <h1>Github Users</h1>
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
