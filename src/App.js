
// import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar'

import News from './Components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <>
          <BrowserRouter>
        
        <Navbar />
        <div>
            <Routes>
              <Route exact path='/News' element={<News pagesize={12} headline={"Trending Today -INDIA"} />} />
              <Route exact path='/Entertainment' element={<News pagesize={12} headline={"Trending Today -INDIA"} category={'Entertainment'} /> } />
              <Route exact path='/Science' element={<News pagesize={12} headline={"Trending Today -INDIA"} category={'Science'} /> } />
              <Route exact path='/Technology' element={<News pagesize={12} headline={"Trending Today -INDIA"} category={'technology'} /> } />
              <Route exact path='/Business' element={<News pagesize={12} headline={"Trending Today -INDIA"} category={'business'} /> } />
              <Route exact path='/Sports' element={<News pagesize={12} headline={"Trending Today -INDIA"} category={'Sports'} /> } />
              <Route exact path='/Sports/Cricket' element={<News pagesize={12} headline={"Trending Today -INDIA"} category={'Cricket'} /> } />
              <Route exact path='/Sports/Football' element={<News pagesize={12} headline={"Trending Today -INDIA"} category={'football'} /> } />
            </Routes>

          
        </div>
            </BrowserRouter>
      </>
    )
  }
}

