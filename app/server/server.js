const express = require('express');
const cors = require("cors")
const bodyParser= require("body-parser")
const SpotifyWebApi = require('spotify-web-api-node');
const lyricsFinder = require("lyrics-finder")


const app  = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:4000/music',
        clientId: '8665e3a48b19447f9564636f5b12ad18',
        clientSecret: '72f1cd6a782d42f8ad998661ebed4223',
        refreshToken
    })
    spotifyApi.refreshAccessToken().then(
        (data) => {
            res.json({
                accessToken: data.body.accessToken,
                expiresIn: data.body.expiresIn,
            })
        }).catch(() => {
        res.sendStatus(400)
    })
})

app.post('/log', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:4000/music',
        clientId: '8665e3a48b19447f9564636f5b12ad18',
        clientSecret: '72f1cd6a782d42f8ad998661ebed4223',
    })
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    })
    .catch((err)=> {
        console.log(err)
        res.sendStatus(400)
    })
})

app.get('/lyrics', async (req, res) => {
    const lyrics = await lyricsFinder(req.query.artist, req.query.track) || "No Lyrics Found"
    res.json({lyrics})
})

app.listen(3001)