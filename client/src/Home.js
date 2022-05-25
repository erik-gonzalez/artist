import React from 'react';
import bg from './pics/background.mp4'
import { useNavigate } from 'react-router-dom';

export default function Home() {

    let navigate = useNavigate()
        const clickHandlerLogin = () => {
            navigate(`/login`)
        }

  return (
    <div className='home'>
        <div className='navbar'>
        <h3 className='webname'>myPlayce</h3>
        <button type='button' className='button'>Sign Up</button>
        </div>
        <div className='info'>
            <small>Keep record of your favorite artists, songs and lyrics with</small>
            <h1 className='brand'>myPlayce</h1>
            <button type='button' className='button' onClick={clickHandlerLogin}>Login</button>
        </div>
        <video autoPlay muted loop className='video'>
            <source src={bg} type='video/mp4'/>
        </video>
    </div>
    
  )
}
