# React-Image-Recognition
POC of React Web App and IBM Image Recognition

### Run
```sh
npm start
```
or
```sh
yarn start
```
### IBM ApiKey
You need put you apikey on file /src/services/https.js

### Important!!
This application needs a local server, the api of IBM Watson turn on your CORS, you need to up one proxy server to can call yours endpoints.

Have a simple one on this link: https://github.com/brunokunace/React-Image-Recognition-Server

The configuration of url make's on proxy attribute of this package.json.

Make sure if port on server and the package.json is the same =);

Good Luck!
