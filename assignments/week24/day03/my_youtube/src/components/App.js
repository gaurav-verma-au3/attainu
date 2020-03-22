import React from 'react';
import Menu from './Menu'
import Profile from './Profile'
import Search from './Search'
import Trending from './Trending'
import Player from './player'
import Playlist from "./Playlist"
import "./app.css"
import Logout from './Logout'
import { Provider } from "react-redux"
import { Route } from "react-router-dom"
import {store} from "../store"


function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid  pl-0">
        <div className="row">
          <div className="col-2 p-0">
            <Menu />
          </div>
          <div className="col-10 p-0">
            <Route path="/app/trending" component={Trending} />
            <Route path="/app/search" component={Search} />
            <Route path="/app/playlist" component={Playlist} />
            <Route path="/app/profile" component={Profile} />
            <Route path="/app/logout" component={Logout} />
            <Route path="/app/player/:videoId/:videoTitle" component={Player}/>

          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
