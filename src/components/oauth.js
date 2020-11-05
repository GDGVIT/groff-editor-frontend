import React from 'react';
import formStyle from "./userForm.module.css";
import * as queryString from 'query-string';
import url from "../config";
import GoogleLogin from 'react-google-login';
import classes from './userForm.module.css';

const stringifiedParams = queryString.stringify({
  client_id: "1077010214943-1pdf3q1jcf0r89pt1hqfkec1i93uatnf.apps.googleusercontent.com",
  redirect_uri: `http://localhost:3001/auth/google`,
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ].join(' '), // space seperated string
  response_type: 'code',
  access_type: 'offline',
  prompt: 'consent',
});



// const responseGoogle = (response) => {
//   console.log(response);
//   fetch('http://localhost:3000/api/auth/google?code=' + response.code, { 
//   })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   // var id_token = response.getAuthResponse().id_token;
//   // var googleId = response.getId();
  
//   // console.log({ googleId });
//   // console.log({accessToken: id_token});
//   // save for later
// }

const urlParams = queryString.parse(window.location.search);
console.log(urlParams)

if (urlParams.error) {
  console.log(`An error occurred: ${urlParams.error}`);
} else {
  console.log(`The code is: ${urlParams.code}`);
  fetch(`http://localhost:3000/api/auth/google?code=${urlParams.code}`, { 
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    localStorage.setItem("token", data.token);
    localStorage.setItem('Guest', false);
    localStorage.setItem("theme", JSON.stringify({mode:'light'}));
  })
}
const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

const oAuth = (props) => {

      if(localStorage.getItem('token')){
        props.history.push('/home')
      }
      return (    
        <div>
          <a href={googleLoginUrl}
              className={formStyle.GButton}>
              Login with Google
          </a>
            {/* <GoogleLogin
              clientId="1077010214943-1pdf3q1jcf0r89pt1hqfkec1i93uatnf.apps.googleusercontent.com"
              buttonText="Login with Google"
              redirectUri =  "http://localhost:3000/auth/google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              responseType = 'code'
              className = {classes.GButton}
            /> */}
        </div>
    );
}

export default oAuth;