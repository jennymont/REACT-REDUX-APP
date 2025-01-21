import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'

import './index.css';
import store from './store/store.config';
import { routes } from './utils/routes';
import Users from './views/Users';
import UserDetails from './views/UserDetails';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
            <Route path={routes.ROOT} element={<Users />} />
            <Route path={routes.USER()} element={<UserDetails  />} />
        </Routes>    
      </Router>
    </Provider>
  </React.StrictMode>
);