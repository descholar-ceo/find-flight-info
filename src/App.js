import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// IMPORTING STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/layout-styles.css';
import './styles/text-styles.css';
import './styles/elements-styles.css';

// IMPORTING COMPONENTS
import SignupPage from './components/SignupPage';
import UserPage from './components/UserPage';

function App() {
  return (
    <div>
      <Router>
        <Route
          exact
          path="/"
          component={SignupPage}
        />
        <Route
          exact
          path="/signup"
          component={SignupPage}
        />
        <Route
          exact
          path="/user-page"
          component={UserPage}
        />
      </Router>
    </div>
  );
}

export default App;
