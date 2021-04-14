# SpotiApp
A basic app built with Angular 11.2.9 that emulates Spotify

## Installing

Install needed node packages

```
npm install
```

## Needed Settings

* You need a authorization token provided by Spotify, send a POST request (via Postman or your desire service) to https://accounts.spotify.com/api/token with the body content: ``` grant_type: client_credentials``` and the following headers: ```Authorization: Basic *<base64 encoded:client_secret>*```. More information at [Spotify for Developers](https://developer.spotify.com/documentation/general/guides/authorization-guide/).
* Finally, copy this TEMPORAL token in getQuery function in the file of spotify.service.ts.

## Execution

Execute the next command to run this app.

```
npm start
```

## Acknowledgments
* This project was inspired by Fernando Herrera (Twitter: [@fernando_her85](https://twitter.com/fernando_her85)) and its online course: "Angular: De cero a experto (Legacy)"