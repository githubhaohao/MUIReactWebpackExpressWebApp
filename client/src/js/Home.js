import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
require('../css/home.css')
injectTapEventPlugin();
const itemStyle = {
	padding: 15,
};

export default class Home extends React.Component {
	// ¹¹Ôì
	constructor(props) {
		super(props);
		// ³õÊ¼×´Ì¬
		this.state = {
			hasMore:true,
			isOpen: false,
			showDialog: false,
			views:[]
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
	}

	componentDidMount() {
		fetch('/movie/data')
		  .then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				this.renderViews(data.subjects);
			})
		  .catch(error => {
				alert("Error : "+error);
			})
	}

	renderViews(movies){
		let views = [];
		movies.forEach((item,index) => {
			views.push(this.getItemCard(item,index));
		})
		this.setState({
			views:views
		});

	}

	getItemCard(item,index) {
		return (
			<MuiThemeProvider key={index}>
				<Card>
					<CardHeader
						title={item.title}
						subtitle={item.original_title}
						avatar={item.images.small}
						actAsExpander={true}
						showExpandableButton={true}
						/>
					<CardText expandable={true}>
						{this.getGenres(item)}<br />
						{item.year}
					</CardText>
				</Card>
			</MuiThemeProvider>
		)
	}

	getGenres(item) {
		let temp = '';
		item.genres.forEach((cell) => {
			temp = temp + cell + " ";
		});
		return temp;
	}

	render() {
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={() => {this.hideDialog()}}
				/>,
			<FlatButton
				label="OK"
				primary={true}
				onTouchTap={() => {this.hideDialog()}}
				/>,
		];
		return (
			<MuiThemeProvider className="container">
				<div className="container">
					<AppBar title="Hello React Webpack Express MUI"
					        onLeftIconButtonTouchTap={() => {
				             this.setState({isOpen:true});
				          }}
					        iconElementRight={<a href="/about"><FlatButton style={{color:'white'}} label="About"/></a>}
					        style={{fontFamily:'sans-serif',fontSize:12,fontWeight:'bold'}}
						/>
					<div className="content">
						{this.state.views}
						<Drawer width={200} open={this.state.isOpen}>
							<AppBar
								title="Drawer"
								iconElementLeft={<IconButton><NavigationClose /></IconButton>}
								onLeftIconButtonTouchTap={() => {
						  this.setState({isOpen:false});
						}}
								/>
							<Menu onItemTouchTap={() => {this.closeDrawer()}}>
								<MenuItem style={itemStyle}>Menu Item</MenuItem>
								<MenuItem style={itemStyle}>Menu Item</MenuItem>
								<MenuItem style={itemStyle}>Menu Item</MenuItem>
								<MenuItem style={itemStyle}>Menu Item</MenuItem>
								<MenuItem style={itemStyle}>Menu Item</MenuItem>
							</Menu>
							<Dialog
								title="Dialog With Actions"
								actions={actions}
								modal={false}
								open={this.state.showDialog}
								onRequestClose={() => {this.hideDialog()}}
								>
								The actions in this window were passed in as an array of React objects.
							</Dialog>
						</Drawer>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}

	closeDrawer() {
		this.setState({isOpen: false});
	}

	hideDialog() {
		this.setState({showDialog: false});
	}

	showDialog() {
		this.setState({showDialog: true});
	}
}

ReactDOM.render(<Home />, document.getElementById('root'));