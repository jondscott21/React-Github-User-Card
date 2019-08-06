import React from 'react';
import './App.css';
import UserCard from './components/UserCard'

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
    .catch(error => console.log('Fetch Error: ', error))
  }
  
  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        <UserCard users={this.state.users}  />
      </div>
    );
  }
}

export default App;
