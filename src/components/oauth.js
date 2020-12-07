import React, {useEffect} from "react";
// import formStyle from "./userForm.module.css";
// import * as queryString from "query-string";
// import classes from './userForm.module.css';
import firebase from 'firebase'
import { StyledFirebaseAuth } from 'react-firebaseui'
// import url from "../config";

// const stringifiedParams = queryString.stringify({
// 	client_id:
// 		"1077010214943-1pdf3q1jcf0r89pt1hqfkec1i93uatnf.apps.googleusercontent.com",
// 	redirect_uri: `https://editor.dscvit.com/home`,
// 	scope: [
// 		"https://www.googleapis.com/auth/userinfo.email",
// 		"https://www.googleapis.com/auth/userinfo.profile",
// 	].join(" "), // space seperated string
// 	response_type: "code",
// 	access_type: "offline",
// 	prompt: "consent",
// });

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
	signInSuccessUrl: '/',
	// We will display Google and Facebook as auth providers.
	signInOptions: [
	  firebase.auth.GoogleAuthProvider.PROVIDER_ID
	]
  };
// const callAuth = () => {
//   fetch(`${url.url}auth/google?code=${urlParams.code}`, {})
//   .then((res) => res.json())
//   .then((data) => {
//     localStorage.setItem("theme", JSON.stringify({ mode: "light" }));
//     localStorage.setItem("token", data.token);
//     window.history.pushState({}, document.title, "/home");
//     console.log(data);
//     window.location.reload(false);
//   });
// }

// const urlParams = queryString.parse(window.location.search);
// console.log(urlParams);

// if (urlParams.error) {
// 	console.log(`An error occurred: ${urlParams.error}`);
// } else {
//   console.log(`The code is: ${urlParams.code}`);
//   if(urlParams.code!=""){
//     callAuth();
//   }
// }

// const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

export default function QAuth(props) {

	useEffect(() => {
		if(sessionStorage.getItem('token')){

		}
	
		  firebase.auth().onIdTokenChanged(async(user)=>{
		  console.log(user)
		  if(firebase.auth().currentUser){
			firebase.auth().currentUser.getIdToken(false).then(async(token) => {
				// Api call
			})
		  } 
		})
	
		// eslint-disable-next-line
	  }, [])

	return (
		<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
	);
};


