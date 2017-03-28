import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
	pagerStyle:{
		marginTop:20,
		width:250,
	}
}

export default class MovieCard extends React.Component{
	// 构造
	  constructor(props) {
	    super(props);
	    // 初始状态
	    this.state = {
		    zDepth:0,
	    };
	  }

	render(){
		let movie = this.props.movie;
		return (
			<Paper
			       zDepth={this.state.zDepth}
			       style={styles.pagerStyle}>
				<div
					onMouseEnter={() => {
					  this.setState({
					    zDepth:5,
					  });
					}}
					onMouseLeave={() => {
					  console.log('onMouseLeave');
					  this.setState({
					    zDepth:0,
					  });
					}}
					>
					<a href={movie.alt}>
					<Card >
						<CardHeader
							title={movie.title}
							subtitle={movie.original_title}
							avatar={movie.images.large}
							/>
						<CardMedia
							overlay={
						  <CardTitle
						    title={movie.title}
						    subtitle={movie.original_title}
						  />
						}
							>
							<img src={movie.images.small}/>
						</CardMedia>
					 </Card>
					</a>
				</div>
			</Paper>
		)
	}
}