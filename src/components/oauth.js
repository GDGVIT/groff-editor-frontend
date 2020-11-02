import React from 'react';
import formStyle from "./userForm.module.css";
import * as queryString from 'query-string';
import url from "../config"

const stringifiedParams = queryString.stringify({
  client_id: "1077010214943-1pdf3q1jcf0r89pt1hqfkec1i93uatnf.apps.googleusercontent.com",
  redirect_uri: `https://groff.dscvit.com/api/auth/google`,
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
}

fetch(url+'auth/google/', { 
})
.then(res => res.json())
.then(data => console.log(data))

const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

function oauth() {
  return (    
      <div>
        <a href={googleLoginUrl}
            className={formStyle.GButton}>
            Login with Google
        </a>
      </div>
  );
}

export default oauth;