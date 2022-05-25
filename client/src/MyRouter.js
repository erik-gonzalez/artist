import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Log from './Spotify/Log';
import Dashboard from './Spotify/Dashboard';
import UserHome from './UserHome';
import Songs from './Songs';

const code = new URLSearchParams(window.location.search).get('code')



export default function MyRouter({
    loggedInUser, 
    handleOnChangeForUserToLogin, 
    handleLoginSubmit, 
    handleLogout,
    artistsToMap
    }
    ) 
    {

        console.log(handleOnChangeForUserToLogin)

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={< Login 
    loggedInUser={loggedInUser}
    handleOnChangeForUserToLogin={handleOnChangeForUserToLogin}
    handleLoginSubmit={handleLoginSubmit}
    handleLogout={handleLogout}
    />} />

    <Route path= "/" element={< Home />} />

    <Route path= "/music" element={code ? <Dashboard code={code}/> : < Log />} />

    <Route path= "/home" element= {< UserHome />} />
    <Route path="/artist" element= {<  Songs artistsToMap={artistsToMap} />} />

    </Routes>
    </BrowserRouter>

    )
}

