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
    // this.fetchFollowerUrls()
    this.fetchFollowers()
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
  
  fetchFollowers = () => {
      fetch(`https://api.github.com/users/jondscott21/followers`)
      .then(res => {
          return res.json();
    })
    .then(friends => {
      this.setState({
          followers: friends
      })
    })
    .catch(error => console.log('Fetch Error: ', error))
  }
  
  render() {
    console.log(this.state.followersUrl)
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


// fetchFollowerUrls = () => {
//   fetch(`https://api.github.com/users/jondscott21/followers`)
//   .then(res => {
//     return res.json();
//   })
//   .then(followerUrl => {
//     let tempArr = [];
//       followerUrl.map(follower => {
//         tempArr.push(follower.url)
//       })
//       return tempArr;
//   })
//   .then(followerArr => {
//     followerArr.map(url => fetch(url)
//       .then(allFollowers => {
//         return allFollowers.json();
//       })
//       .then(setFollowers => {
//         console.log('setFollowers', setFollowers)
//        let follArr = [...setFollowers]
//        console.log(follArr)
//        return follArr
//       })
//       .then(finalRes => {
//         this.setState({
//           followersUrl: finalRes
//         })
//       })
//     )
//   })