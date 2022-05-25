import {useState, useEffect} from 'react'
import useAuth from './useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearchResult from './TrackSearchResult'
//import Player from './Player'
import axios from 'axios'

const spotifyApi = new SpotifyWebApi({
    clientId: "8665e3a48b19447f9564636f5b12ad18",
})

export default function Dashboard({code}) {
    const accessToken= useAuth(code)
    const [search, setSearch]= useState("")
    const [searchResults, setSearchResults]= useState([])
    const [playingTrack, setPlayingTrack]= useState()
    //playingTrack = clicked on track from search result 
    console.log(playingTrack)
    const [lyrics, setLyrics]= useState("")

    function chooseTrack(track) {
        setPlayingTrack(track)
        setSearch('')
        setLyrics("")
    }
    //setSearch clears input value

    useEffect(() => {
        if (!playingTrack) return
        axios.get('http://localhost:3001/lyrics', {
            params: {
                track: playingTrack.title,
                artist: playingTrack.artist
            }
        }).then(res => {
            setLyrics(res.data.lyrics)
        })
    }, [playingTrack])

    useEffect(() => {
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return 

        let cancel = false

        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return 
            setSearchResults(res.body.tracks.items.map(track => {

                const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
                    if (image.height < smallest.height) return image
                    return smallest
                }, track.album.images[0])

                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url 
                }
            }))
        })
        return () => cancel = true 
    }, [search, accessToken])


  return (
    <div className='music'>
        <input
            className='input-search'
            type= "search"
            placeholder='Search Songs/Artists'
            value= {search}
            onChange={e => setSearch(e.target.value)}
        />
        <div className='song'>
            {searchResults.map(track => (
                <TrackSearchResult 
                track={track} 
                key={track.uri} 
                chooseTrack={chooseTrack}/> 
            ))}
            {
            playingTrack ? 
            <div className='render-song'> 
                <h1 className='choosen'> {playingTrack.title} </h1>
                <h2 className='choosen'> {playingTrack.artist}</h2>
            </div>
             :
            <></>
            }
            {searchResults.length === 0 && (
                <div className='lyrics' >
                    {lyrics}
                </div>
            )}
        </div>
        {/* <div>
            <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
        </div> */}
    </div>
  )
}
