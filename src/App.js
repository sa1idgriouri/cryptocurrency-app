import React from 'react';
import { Typography, Layout, Space } from 'antd';
import { Header } from './Compenents';
import { Routes, Route, Link } from 'react-router-dom'
import { Home, Cryptocurrencies, Exchanges, News } from './pages';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <Header />
      </div>

      <div className="app-main">
        <Layout>
          <div className="router">
            <Routes>
              <Route exact path="/" element={<Home />} />


              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />




              <Route exact path="/exchanges" element={<Exchanges />} />



              <Route exact path="/news" element={<News />} />

            </Routes>
          </div>
        </Layout>

      </div>
      <div className="app-footer">

      </div>

    </div>
  );
}

export default App;
