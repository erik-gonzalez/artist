import React from 'react'
import { useNavigate } from 'react-router-dom';



export default function UserHome() {

    let navigate = useNavigate()

    const clickHandler = () => {
        navigate(`/artist`) }

    const clickHandlerSearch = () => {
        navigate(`/music`)
    }


  return (
    <div className='home-container'>

        <div className='home-box' onClick={clickHandlerSearch}> 
            <div className='icon-box'>
                <h3 className='album-icon'>Search</h3>
                <div className='inside'>
                    <p>Search your favorite song/artist/album!</p>
                </div>
            </div>
         </div>

        
        <div className='home-box' onClick={clickHandler}> 
            <div className='icon-box'>
                <h3 className='album-icon'>Artists</h3>
                <div className='inside'>
                    <p>Add your favorite artist!</p>
                </div>
            </div>
        </div>


        <div className='home-box'> 
        <div className='icon-box'>
                <h3 className='album-icon'>Album</h3>
                <div className='inside'>
                    <p>Add your favorite albums!</p>
                </div>
            </div>
        </div>


        <div className='home-box'> 
        <div className='icon-box'>
                <h3 className='album-icon'>Songs</h3>
                <div className='inside'>
                    <p>Add your favorite songs!</p>
                </div>
            </div>
        </div>

    </div>
  )
}
