import React from 'react';
import User from "./components/User";
import './App.css';

const fakeUsers = [{
  id: Date.now(),
  name: "Erlich Bachman",
  photo: "https://avatars1.githubusercontent.com/u/8151169?v=4",
  company: "Aviato",
  location: "Bachmanity Capital",
  bio: "Erlich administers the Hacker Hostel, a tech incubator where Richard, Big Head, Dinesh, and Gilfoyle.",
  followers: 100,
  profile: "https://github.com/rodionu"
}]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: fakeUsers
    }
  }

  render() {
    return (
      <div className="App" >
        <h1>Github Users</h1>
        {
          this.state.users.map(user => <User user={user} />)
        }
      </div>
    );
  }

}

export default App;
