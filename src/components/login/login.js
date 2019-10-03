import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../home'
import '../../App.css';
import Cookie from '../../services/cookie';
import Snackbar from '@material-ui/core/Snackbar';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';


import './login.css';

class Login extends Component {
	constructor(props){
		super(props);
		this.state={
			redirect:false,
			result:'',
			email:'',
			emailId:'',
			open:false,
			status:false,
			// openPopup:false,
		}
	}

	
	// handlePopupOpen = () => {
	// 	this.setState({ openPopup: true });
	//   };
	
	// handlePopupClose = () => {
	// 	this.setState({ openPopup: false });
	//   };

	handelClick = () => {
		this.setState({open:true});
	  };

	handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		  return;
		}
		this.setState({open:false});
	  };
	  
	
	responseGoogle = (response) => {
	
		console.log('google RES :', response);
		
		let payload = {
			title:'user',
			data: response.profileObj
		}
		this.setState({result:response.profileObj.name});
		this.setState({email:response.profileObj.email});
		
		const emailId=this.state.email.split('@');
		this.setState({emailId:emailId[1]})
		if(this.state.emailId==='qed42.com'){
			Cookie.setCookie(payload);
			this.setState({redirect:true});
			console.log("redirect in 2nd if ",this.state.redirect)
		}else{
			this.handelClick();
		}
	}


	componentDidMount = () => {
		
		navigator.geolocation.getCurrentPosition (
			(position) => {
				let lat = position.coords.latitude
				let lng = position.coords.longitude
				console.log("getCurrentPosition Success " + lat + lng); // logs position correctly
				this.setState({
				  geoLocation: {
					lat: lat,
					lng: lng
				  }
				})
			},
			(error) => {
				//this.props.displayError("Error dectecting your geoLocation");
			  	// console.error(JSON.stringify(error))
				console.log("error",error.message)
				this.setState({status:true});
				switch(error) {
					case error.PERMISSION_DENIED:
						console.log("You Denied Application Permissions");
						return " You Denied Application Permissions";
					case error.POSITION_UNAVAILABLE:
						return "POSITION_UNAVAILABLE";
					case error.TIMEOUT:
						return "TIMEOUT";
					case error.UNKNOWN_ERROR:
						return "UNKNOWN_ERROR";
				}
				},
			{enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
			) 
	}

render() {

	return (
		<Router>
			{
				this.state.redirect ? (
					<Home />
				) :
				(
				<div className="loginScreen">
					<div>
					<img src={require('../../images/QED42.png')}  alt = "logo" />
					</div>
					<div>
					{
						this.state.status===false?
						<GoogleLogin
						clientId="785790539959-ea8fvttmkdin1kg307dlmg4pr1ekdmqg.apps.googleusercontent.com"
						render={renderProps => (
							<button onClick={renderProps.onClick} disabled={renderProps.disabled} className="googleBtn">
								<img src={require("../../images/login.png")} alt = "login"/>
							</button>
						)}
						buttonText="LOGIN WITH GOOGLE"
						onSuccess={this.responseGoogle}
						onFailure={this.responseGoogle}
					/>:
					<div style={{color:'white'}} >Give Location Permission</div>
					}
					
					</div>
					<Snackbar
						anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
						open={this.state.open}
						onClose={() => this.handleClose ()}
						ContentProps={{
						'aria-describedby': 'message-id',
						}}
						message={<span id="message-id">Please login with QED42's account.</span>}
					/>
					{/* <div>
						{
							this.state.status?
							<Modal
								aria-labelledby="spring-modal-title"
								aria-describedby="spring-modal-description"
								
								open={this.state.openPopup}
								onClose={this.handlePopupClose}
								closeAfterTransition
								BackdropComponent={Backdrop}
								BackdropProps={{
								timeout: 500,
								}}
							>
								<Fade in={this.state.openPopup}>
								<div style={{border:'1px solid black'}}>
									<h2 id="spring-modal-title" style={{color:'white'}}>You Denied Permission.</h2>
								</div>
								</Fade>
					  		</Modal>:
						  	null
						}
					
					</div> */}
				</div>
				)
			}
		</Router>
		);
  }
}

  export default Login;