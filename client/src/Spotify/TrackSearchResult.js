import React from 'react'

export default function TrackSearchResult({track, chooseTrack}) {
  console.log(track)
    function handlePlay(){
        chooseTrack(track)
    }
    
  return (
    <div className='track' onClick={handlePlay}>
        <img src={track.albumUrl} className='pic'/>
        <div className='songTitle'>
            <div>{track.title}</div>
            <div className='artistName'>{track.artist}</div>
        </div>
    </div>
  )
}
