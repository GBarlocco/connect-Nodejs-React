# API: Nodejs & React :computer: :rocket:

Next, I will explain how http requests are made from react to nodejs

## Backend - Nodejs:

1- You need to install the following:

Nodemon:
``` 
npm install nodemon
``` 

Express:
``` 
npm install express
``` 

2- We create a file "main.js" and add the following code:

``` 
const express = require(`express`);
const app = express();

app.get(`/`, (req, res) => {
    res.send(`Hello World! from server`);
});

app.post(`/post`, (req, res) => {
    console.log(`htpp post --> React`);
    res.redirect(`/feedback`);
});

const PORT = 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
``` 

## Frontend - React:
1- Now we will continue with the frontend, create a new folder and execute the following command:

``` 
npm create-react-app app

``` 

2- In the "app.js" file we add the following code:
``` 
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"
          alt="logo" />

        <p>Nodejs & React: API - http</p>


        <form action="/post" method="post"
          className="form">
          <button type="submit">Send a HTTP request</button>
        </form>
      </header>
    </div>
  );
}

export default App;

``` 

3- We need to configure proxy request from react to nodejs. We go to package.json, and add:
```
 "proxy": "http://localhost:8080"
 
```

Finally the "package.json" file will look like this:
 
```
{
  "name": "app",
  "version": "0.1.0",
  "proxy": "http://localhost:8080",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.3",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
 
```

## Project structure:

[![folder1.png](https://i.postimg.cc/L5S2NDMF/folder1.png)](https://postimg.cc/62MkQd3M)
[![folder2.png](https://i.postimg.cc/HxwCcM8Z/folder2.png)](https://postimg.cc/bDw54sTk)
[![folder3.png](https://i.postimg.cc/V6B3Lc22/folder3.png)](https://postimg.cc/8Jcytxpb)

## Test:

1- Backend - we run the server:
```
nodemon main.js
```
[![nodemon-main.png](https://i.postimg.cc/VNFRJLL9/nodemon-main.png)](https://postimg.cc/t1YPfb67)

2- Frontend - we run the react proyect:
```
npm start
```
[![npmstart.png](https://i.postimg.cc/Hkw0Ns5G/npmstart.png)](https://postimg.cc/0zNJMvcZ)


3- Frontend - we access http://localhost:3000/

[![cliente1.png](https://i.postimg.cc/PJfrdyVz/cliente1.png)](https://postimg.cc/YGVw36Hh)


4- Frontend - press the button "send a http request"

5- Backend - we visualize the request from the server:
[![server2.png](https://i.postimg.cc/Vv4vtp0V/server2.png)](https://postimg.cc/rR0qXhJ1)


## Author
> <p>Gastón Barlocco. </p>
> <p>Email: barlocco@hotmail.es </p>


## Scripts

#### backend: `nodemon main.js`
Run the application locally
[http://localhost:8080/](http://localhost:8080/)

#### frontend: `npm start
Run the application locally
[http://localhost:3000](http://localhost:3000)


## Extra
- [Documentation](https://reactjs.org/) React js
- [Documentation](https://nodejs.org/es/) Nodejs
- [Documentation](https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto) HTTP
- [Documentation](https://www.npmjs.com/package/nodemon) nodemon
- [Documentation](https://expressjs.com/es/) express
