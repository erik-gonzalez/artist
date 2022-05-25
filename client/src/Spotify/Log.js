import React from 'react'


const AUTH_URL =   
"https://accounts.spotify.com/authorize?client_id=8665e3a48b19447f9564636f5b12ad18&response_type=code&redirect_uri=http://localhost:4000/music&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


export default function Log() {
  return (
    <div className='btn-spot'>
        <a className='btn' href={AUTH_URL} > Start</a>
    </div>
  )
}
