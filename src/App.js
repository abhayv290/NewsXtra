import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import LoadingBar from 'react-top-loading-bar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

export default function App() {
  const [progress, setProgress] = useState(0);
  const [cthead, setCthead] = useState('India');
  const [country, setcountry] = useState('India');
  const apikey = process.env.REACT_APP_NEWS_API;

  const handleSetProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar country={country} />
        <div>
          <LoadingBar
            color="#f11946"
            height="3px"
            progress={progress}
          />
        </div>
        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home key="home" country={country} setprogress={handleSetProgress} />}
            />
            <Route
              exact
              path="/News"
              element={
                <News
                  key="news"
                  country={country}
                  setprogress={handleSetProgress}
                  apikey={apikey}
                  headline={`Trending Today - ${cthead}`}
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  key="entainment"
                  country={country}
                  setprogress={handleSetProgress}
                  apikey={apikey}
                  headline="Latest Masala of Entertainment"
                  category="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <News
                  key="Science"
                  country={country}
                  setprogress={handleSetProgress}
                  apikey={apikey}
                  headline="Science - The World of Discoveries"
                  category="Science"
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News
                  key="Health"
                  country={country}
                  setprogress={handleSetProgress}
                  apikey={apikey}
                  headline="Healthcare Insights"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <News
                  key="techs"
                  country={country}
                  setprogress={handleSetProgress}
                  apikey={apikey}
                  headline="Tech Trends and Updates"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <News
                  key="bussiness"
                  country={country}
                  setprogress={handleSetProgress}
                  apikey={apikey}
                  headline="Corporate Chronicles"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/Sports/others"
              element={
                <News
                  key="sports"
                  country={country}
                  setprogress={handleSetProgress}
                  apikey={apikey}
                  headline="Sports Spotlight"
                  category="Sports"
                />
              }
            />
            <Route
              exact
              path="/Sports/Cricket"
              element={
                <News
                  key="crics"
                  country={country}
                  setprogress={handleSetProgress}
                  apikey={apikey}
                  headline="Cricket Scores & More"
                  category="Cricket"
                />
              }
            />
            <Route
              exact
              path="/Sports/Football"
              element={
                <News
                  key="football"
                  country={country}
                  setprogress={handleSetProgress}
                  apikey={apikey}
                  headline="Roll your world with Football"
                  category="football"
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
