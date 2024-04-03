import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Dashboard from './components/pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './components/pages/Users';
import Register from './components/pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <div className="container-fluid">
          <div className="row">

            <Menu />

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">


              <Routes>
                <Route path={'/'} Component={Dashboard} />
                {/* <Route path={'*'} element={<Dashboard />} /> */}
                <Route path={'/users'} Component={Users} />
                <Route path={'/register'} Component={Register} />
                
              </Routes>



            </main>
          </div>
        </div>
      </BrowserRouter>
    </div>

  )
}

export default App;
