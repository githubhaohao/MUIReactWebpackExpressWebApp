import React from 'react';
import ReactDOM from 'react-dom';
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
require('../css/page.css')
injectTapEventPlugin();

export default class Page extends React.Component{
	// 构造
	  constructor(props) {
	    super(props);
	    // 初始状态
	    this.state = {
		    zDepthA:0,
		    zDepthB:0,
		    zDepthC:0
	    };
	  }

	componentDidMount() {
	}

	render(){
		return (
			<MuiThemeProvider className="container">
				<div className="container">
					<AppBar title="Hello React Webpack Express MUI"
						/>
					<div
						className="content"
						>
					<Paper
						onMouseEnter={() => {
					  this.setState({
					    zDepthA:4,
					    });
					  }}
						onMouseLeave={() => {
					  console.log('onMouseLeave');
					  this.setState({
					    zDepthA:0,
					    });
					  }}
						zDepth={this.state.zDepthA}>
						  <a href="/">
							<Card >
								<CardHeader
									title="Hello Full Stack"
									subtitle="虚拟事件对象"
									avatar="https://avatars0.githubusercontent.com/u/17926884?v=3&s=460"
									/>
								<CardMedia
									overlay={
						          <CardTitle
						             title='Material-UI'
						             subtitle="A Set of React Components that Implement Google's Material Design"
						          />
						    }>
									<img src='http://www.material-ui.com/images/get-started.svg'/>
								</CardMedia>
							</Card>
							</a>
					  </Paper>
						<Paper
							style={{marginLeft:20}}
							onMouseEnter={() => {
					    this.setState({
					    zDepthB:4,
					      });
					    }}
							onMouseLeave={() => {
					    console.log('onMouseLeave');
					    this.setState({
					    zDepthB:0,
					      });
					    }}
							zDepth={this.state.zDepthB}>
							<Card >
								<CardHeader
									title="Hello Full Stack"
									subtitle="虚拟事件对象"
									avatar="https://avatars0.githubusercontent.com/u/17926884?v=3&s=460"
									/>
								<CardMedia
									overlay={
						          <CardTitle
						             title='Material-UI'
						             subtitle="A Set of React Components that Implement Google's Material Design"
						          />
						    }>
									<img src='http://www.material-ui.com/images/css-framework.svg'/>
								</CardMedia>
							</Card>
						</Paper>
						<Paper
							style={{marginLeft:20}}
							onMouseEnter={() => {
					    this.setState({
					    zDepthC:4,
					      });
					    }}
							onMouseLeave={() => {
					    console.log('onMouseLeave');
					    this.setState({
					    zDepthC:0,
					      });
					    }}
							zDepth={this.state.zDepthC}>
							<Card >
								<CardHeader
									title="Hello Full Stack"
									subtitle="虚拟事件对象"
									avatar="https://avatars0.githubusercontent.com/u/17926884?v=3&s=460"
									/>
								<CardMedia
									overlay={
						          <CardTitle
						             title='Material-UI'
						             subtitle="A Set of React Components that Implement Google's Material Design"
						          />
						    }>
									<img src='http://www.material-ui.com/images/components.svg'/>
								</CardMedia>
							</Card>
						</Paper>
					</div>
				</div>
			</MuiThemeProvider>
		)

	}
}

ReactDOM.render(<Page />,document.getElementById('root'));