import React from 'react';
import Navbar from './components/Navbar.js'
import { Switch, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';

import icon from './cryptocurrency.png';

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="display">
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path="/">
                  <Homepage />
              </Route>
              <Route exact path="/exchanges">
                  <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                  <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                  <CryptoDetails />
              </Route>
              <Route exact path="/news">
                  <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
