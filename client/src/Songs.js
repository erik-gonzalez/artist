import React from 'react'

export default function Songs({artistsToMap}) {
    
    artistsToMap = []

    return( 
        <ul>
             <div className="buttonDiv">

                <button className="newButtonForm"> Add New Artist </button>

            </div>
            {
                artistsToMap.map((eachArtist) => {

                    return (
                        <li key={eachArtist.id}>
                            <div>
                            <img
                            src={eachArtist.image}
                            alt="artist"
                            />    
                            <div>
                                {eachArtist.name}
                            </div>
                            </div> 

                        </li>
                    )

                }
                
                )
            }
        </ul>
            )
            }







