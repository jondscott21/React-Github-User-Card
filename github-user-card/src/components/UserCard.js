import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const styles = {
//   card: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });
// const classes = useStyles();
// const bull = <span className={classes.bullet}>•</span>;

class UserCard extends React.Component {
    
    render() {
        // const {classes} = this.props
        return(
            <Card style={{padding: '10px', border: 'black 1px solid', width: '20%', margin: '20px auto'}}>
                <img style={{wdith: '230px', height: '230px'}} src={this.props.users.avatar_url}></img>
                <CardContent>
                    <p>Name: {this.props.users.name}</p>
                    <p>Username: {this.props.users.login}</p>
                    <p>Title: {this.props.users.bio}</p>
                    <p>Location: {this.props.users.location}</p>
                    <a style={{textDecoration: 'none', color: 'grey', fontStyle: 'italic'}} href={this.props.users.html_url}>{this.props.users.html_url}</a>
                </CardContent>
            </Card>
        // <Card>
        //     <CardContent>
        //         <Typography  color="textSecondary" gutterBottom>
        //         Word of the Day
        //         </Typography>
        //         <Typography variant="h5" component="h2">
        //         be
        //         {/* {bull} */}
        //         nev
        //         {/* {bull}o{bull} */}
        //         lent
        //         </Typography>
        //         <Typography  color="textSecondary">
        //         adjective
        //         </Typography>
        //         <Typography variant="body2" component="p">
        //         well meaning and kindly.
        //         <br />
        //         {'"a benevolent smile"'}
        //         </Typography>
        //     </CardContent>
        //     <CardActions>
        //         <Button size="small">Learn More</Button>
        //     </CardActions>
        // </Card>
        )
    }
}
export default UserCard;