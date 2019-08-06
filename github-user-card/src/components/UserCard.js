import React from 'react';

class UserCard extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        this.fetchFollowers()
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
        console.log(this.state.followers)
        // console.log(this.props.users.login)
        return(
            <div style={{padding: '10px', border: 'lightblue 1px solid', width: '20%', margin: '20px auto'}}>
                <img style={{wdith: '230px', height: '230px'}} src={this.props.users.avatar_url}></img>
                <p>Name: {this.props.users.name}</p>
                <p>User Name: {this.props.users.login}</p>
                <p>Title: {this.props.users.bio}</p>
                <p>Location: {this.props.users.location}</p>
            </div>
        )
    }
}
export default UserCard;