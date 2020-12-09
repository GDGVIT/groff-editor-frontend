import React, {useEffect} from "react";
import firebase from 'firebase/'
import { StyledFirebaseAuth } from 'react-firebaseui'
import url from "../config";

const config = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	databaseURL: process.env.REACT_APP_databaseURL,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
	measurementId: process.env.REACT_APP_measurementId
  };
  firebase.initializeApp(config);
  
  const uiConfig = {
	// Popup signin flow rather than redirect flow.
	signInFlow: 'popup',
	// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	signInSuccessUrl: '/home',
	// We will display Google and Facebook as auth providers.
	signInOptions: [
	  firebase.auth.GoogleAuthProvider.PROVIDER_ID
	]
  };

export default function QAuth(props) {

	useEffect(() => {
		if(localStorage.getItem('token')){
			window.history.pushState({}, document.title, "/home");
		}
		else{
			firebase.auth().onIdTokenChanged(async(user)=>{
				if(firebase.auth().currentUser){
				  firebase.auth().currentUser.getIdToken(false).then(async(token) => {
	  
					  // Api call
						fetch(`${url.url}auth/google?`, {
						  method: "POST",
						  headers: {
							  "Content-Type": "application/json"
						  },
							body:JSON.stringify({"idToken":token})
						})
						  .then((res) => res.json())
						  .then((data) => {
							  localStorage.setItem("theme", JSON.stringify({ mode: "light" }));
							  localStorage.setItem("token", data.token);
							  this.props.history.push('/home')
							//   window.history.pushState({}, document.title, "/home");
							//   console.log(data);
						  });
				  })
				} 
			  })
		}
	
		// eslint-disable-next-line
	  }, [])

	return (
		<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
	);
};


