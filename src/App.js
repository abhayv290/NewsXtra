
// import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

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
        
        <Navbar country={'India'} />
        <div>
            <Routes>
              <Route exact path='/' element={<Home key={'home'} />}/>
              <Route exact path='/News' element={<News key={'news'}   headline={"Trending Today -INDIA"} />} />
              <Route exact path='/Entertainment' element={<News key={'entainment'}   headline={"Latest Masala of Entertainment"} category={'Entertainment'} /> } />
              <Route exact path='/Science' element={<News key={'Science'}   headline={"Science-|The World of Discoveries"} category={'Science'} /> } />
              <Route exact path='/Technology' element={<News key={'techs'}   headline={"Tech Trends and Updates"} category={'technology'} /> } />
              <Route exact path='/Business' element={<News key={'bussiness'}   headline={"Corporate Chronicles"} category={'business'} /> } />
              <Route exact path='/Sports' element={<News key={'sports'}   headline={"Sports Spotlight"} category={'Sports'} /> } />
              <Route exact path='/Sports/Cricket' element={<News key={'crics'}   headline={"Cricket Scores & More"} category={'Cricket'} /> } />
              <Route exact path='/Sports/Football' element={<News key={'football'}   headline={"Roll your world with Football"} category={'football'} /> } />
            </Routes>

          
        </div>
            </BrowserRouter>
      </>
    )
  }
}

