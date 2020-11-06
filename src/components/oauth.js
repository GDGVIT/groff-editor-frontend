import React from 'react';
import formStyle from "./userForm.module.css";
import * as queryString from 'query-string';
import classes from './userForm.module.css';
import url from '../config';

const stringifiedParams = queryString.stringify({
  client_id: "1077010214943-1pdf3q1jcf0r89pt1hqfkec1i93uatnf.apps.googleusercontent.com",
  redirect_uri: `https://editor.dscvit.com/home`,
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ].join(' '), // space seperated string
  response_type: 'code',
  access_type: 'offline',
  prompt: 'consent',
});

const urlParams = queryString.parse(window.location.search);
console.log(urlParams)

if (urlParams.error) {
  console.log(`An error occurred: ${urlParams.error}`);
} else {
  console.log(`The code is: ${urlParams.code}`);
  fetch(`${url}/auth/google?code=${urlParams.code}`, { 
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    localStorage.setItem("token", data.token);
    localStorage.setItem('Guest', false);
    localStorage.setItem("theme", JSON.stringify({mode:'light'}));
    window.history.pushState({},document.title,"/"+"home");
  })
}
const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

const oAuth = (props) => {
      return (    
        <div>
          <a href={googleLoginUrl}
              className={formStyle.GButton}>
              Login with Google
          </a>
        </div>
    );
}

export default oAuth;