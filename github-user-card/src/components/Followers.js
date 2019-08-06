import React from 'react';
import Card from '@material-ui/core/Card';

class Followers extends React.Component {
    render() {
        console.log(this.props.followers)
        return (
            <Card style={{display: 'flex', flexWrap: 'wrap'}}>
            {this.props.followers.map(follower => {
                return (
                <div style={{padding: '10px', border: 'lightblue 1px solid', width: '20%', margin: '20px auto'}}>
                    <img style={{wdith: '230px', height: '230px'}} src={follower.avatar_url}></img>
                    {/* <p>Name: {follower.name}</p> */}
                    <p>User Name: {follower.login}</p>
                    <a href={follower.html_url}>{follower.html_url}</a>
                </div>)
            } )}
            </Card>
            
        )
    }
}
export default Followers;