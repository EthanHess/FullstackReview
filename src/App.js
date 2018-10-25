import React, { Component } from 'react';
import './App.css';
import routes from './routes'; 
import NavBar from './components/NavBar/NavBar'; 

class App extends Component {
  //TODO move

  // login = () => {
  //   const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback'); 
  //   const url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`; 
  //   window.location = url; 
  // }

  render() {
    return (
      <div className="app">
      <NavBar />
        {routes}
      </div>
    );
  }
}

export default App;
