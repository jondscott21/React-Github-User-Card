import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { fontStyle } from '@material-ui/system';

class Followers extends React.Component {
    render() {
        console.log(this.props.followers)
        return (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {this.props.followers.map(follower => {
                return (
                <Card style={{padding: '10px', border: 'black 1px solid', width: '20%', margin: '20px auto'}}>
                    <CardContent style={{padding: '10px', border: 'lightblue 1px solid', margin: '20px auto'}}>
                        <img style={{wdith: '230px', height: '230px'}} src={follower.avatar_url}></img>
                        <p>{follower.name}</p>
                        <p>Username: {follower.login}</p>
                        <a style={{textDecoration: 'none', color: 'grey', fontStyle: 'italic'}} href={follower.html_url}>{follower.html_url}</a>
                    </CardContent>
                </Card>
                )
            } )}
            </div>
            
        )
    }
}
export default Followers;