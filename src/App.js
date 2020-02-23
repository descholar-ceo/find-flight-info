import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// IMPORTING STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/layout-styles.css';
import './styles/text-styles.css';
import './styles/elements-styles.css';

// IMPORTING COMPONENTS
import SignupPage from './components/SignupPage';
import UserPage from './components/UserPage';
import LoginPage from './components/LoginPage';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>

          <NavBar />

          <Route
            exact
            path="/"
            component={LandingPage}
          />

          <Route
            exact
            path="/signup"
            component={SignupPage}
          />
          <Route
            exact
            path="/login"
            component={LoginPage}
          />
          <Route
            exact
            path="/user-page"
            component={UserPage}
          />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
