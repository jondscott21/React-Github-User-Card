import React from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    this.fetchUsers()
  }
  fetchUsers = () => {
    fetch(`https://api.github.com/users/jondscott21`)
    .then(res => {
      return res.json();
    })
    .then(user => {
      this.setState({
        users: user
      })
    })
  }
  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        <h1>test</h1>
      </div>
    );
  }
}

export default App;
