import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import Followers from './components/Followers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      // followersUrl: [],
      followers: []
    }
    this.userName = 'jondscott21'
  }
  
  componentDidMount() {
    this.fetchUsers()
    this.fetchFollowerUrls()
    // this.fetchFollowers()
  }
  fetchUsers = () => {
    fetch(`https://api.github.com/users/${this.userName}`)
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

  fetchFollowerUrls = () => {
    let followerArr = [];
      fetch(`https://api.github.com/users/jondscott21/followers`)
      .then(res => {
        return res.json();
      })
      .then(followerUrl => {
        let urlArr = [];
        
          followerUrl.map(follower => {
           urlArr = [...urlArr, follower.url]
          })
          return urlArr;
      })
      .then(urlData => {
        urlData.map(url => fetch(url)
          .then(allFollowers => {
            return allFollowers.json();
          })
          .then(setFollowers => {
            
           followerArr = [...followerArr, setFollowers]
           return followerArr
          })
          .then(finalRes => {
            this.setState({
              followers: finalRes
            })
          })
        )
      })
  
  // fetchFollowers = () => {
  //     fetch(`https://api.github.com/users/jondscott21/followers`)
  //     .then(res => {
  //         return res.json();
  //   })
  //   .then(friends => {
  //     this.setState({
  //         followers: friends
  //     })
  //   })
    // .catch(error => console.log('Fetch Error: ', error))
  }
  
  render() {
    console.log(this.state.followers);
    return (
      <div className="App">
        <UserCard users={this.state.users}  />
        <h1>{this.state.users.name}'s Followers</h1>
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;