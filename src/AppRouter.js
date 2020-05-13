import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home'

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Home path='/' />
      </Router>
    );
  }
}

export default AppRouter;
