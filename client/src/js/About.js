import React from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ReactDOM from 'react-dom';
require('../css/about.css');
import MovieCard from './MovieCard.js';
injectTapEventPlugin();

const styles = {
	pagerStyle:{
		marginTop:20,
		width:200,
	}
}

export default class About extends React.Component{
	// 构造
	  constructor(props) {
	    super(props);
	    // 初始状态
	    this.state = {
		    movies:[],
		    zDepth:2,
	    };
	  }

	componentDidMount() {
		fetch('/movie/data')
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
        this.initViews(data.subjects);
			})
			.catch(error => {
				alert("Error : "+error);
			})
	}

	initViews(movies){
		let views = [];
		movies.forEach((movie,index) => {
			views.push(<MovieCard movie={movie} key={index}/>)
		});
		this.setState({
			views:views
		});
	}

	render(){
		return (
			<MuiThemeProvider className="container" >
				<div className="container" >
					<AppBar title="Hello React Webpack Express MUI"
					        iconElementRight={<a href="/page"><FlatButton style={{color:'white'}} label="My Page"/></a>}
						/>
					<div className="content">
						{this.state.views}
					</div>
				</div>

			</MuiThemeProvider>

		)
	}

	renderItemView(movie,index){
		return (
			<Paper key={index}
			       zDepth={this.state.zDepth}
			       style={styles.pagerStyle}>
				<div
					onMouseEnter={() => {
					  this.setState({
					    zDepth:4,
					    views:this.state.views
					  });
					}}
					onMouseLeave={() => {
					  console.log('onMouseLeave');
					  this.setState({
					    zDepth:2,
					    views:this.state.views
					  });
					}}
					>
					<Card >
						<CardHeader
							title={movie.title}
							subtitle={movie.original_title}
							avatar={movie.images.small}
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
				</div>
			</Paper>

		)
	}

}

ReactDOM.render(<About />,document.getElementById('root'));