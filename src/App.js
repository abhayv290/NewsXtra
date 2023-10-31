
// import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import LoadingBar from 'react-top-loading-bar'
// import { useState } from 'react'

import News from './Components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      progress: 0,

      cthead: 'India',
      apikey: process.env.REACT_APP_NEWS_API
    }
  }



  setprogress = (progress) => {
    this.setState({
      progress: progress

    })
  }


  render() {
    return (
      <>

        <BrowserRouter>

          <Navbar country={this.state.country} />

          <div>
            <LoadingBar
              color='#f11946'
              height={'3px'}
              progress={this.state.progress}

            />

          </div>
          <div>
            <Routes>
              <Route exact path='/' element={<Home key={'home'} country={this.state.country} setprogress={this.setprogress} />} />
              <Route exact path='/News' element={<News key={'news'} country={this.state.country} setprogress={this.setprogress} apikey={this.state.apikey} headline={`Trending Today-${this.state.cthead}`} />} />
              <Route exact path='/Entertainment' element={<News key={'entainment'} country={this.state.country} setprogress={this.setprogress} apikey={this.state.apikey} headline={"Latest Masala of Entertainment"} category={'Entertainment'} />} />
              <Route exact path='/Science' element={<News key={'Science'} country={this.state.country} setprogress={this.setprogress} apikey={this.state.apikey} headline={"Science-|The World of Discoveries"} category={'Science'} />} />
              <Route exact path='/Health' element={<News key={'Health'} country={this.state.country} setprogress={this.setprogress} apikey={this.state.apikey} headline={"Healthcare Insights"} category={'health'} />} />
              <Route exact path='/Technology' element={<News key={'techs'} country={this.state.country} setprogress={this.setprogress} apikey={this.state.apikey} headline={"Tech Trends and Updates"} category={'technology'} />} />
              <Route exact path='/Business' element={<News key={'bussiness'} country={this.state.country} setprogress={this.setprogress} apikey={this.state.apikey} headline={"Corporate Chronicles"} category={'business'} />} />
              <Route exact path='/Sports/others' element={<News key={'sports'} country={this.state.country} setprogress={this.setprogress} apikey={this.state.apikey} headline={"Sports Spotlight"} category={'Sports'} />} />
              <Route exact path='/Sports/Cricket' element={<News key={'crics'} country={this.state.country} setprogress={this.setprogress} apikey={this.state.apikey} headline={"Cricket Scores & More"} category={'Cricket'} />} />
              <Route exact path='/Sports/Football' element={<News key={'football'} country={this.state.country} setprogress={this.setprogress} apikey={this.state.apikey} headline={"Roll your world with Football"} category={'football'} />} />
            </Routes>


          </div>
        </BrowserRouter>
      </>
    )
  }
}

