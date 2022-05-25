import './App.css';

import {useState, useEffect } from 'react';
import MyRouter from './MyRouter';



function App() {

  const [ loggedInUser , setLoggedInUser ] = useState( {} )
  //console.log( "STATE OF  loggedInUser: ", loggedInUser ) 
 
   const [artists, setArtists] = useState([])
   //const [song, setSong]= useState([])
 
   const [ userToLogin , updateUserToLoginInfo ] = useState(
 
     {
 
       username: "",
       password: ""
 
     }
 
   )

   //console.log( "STATE OF  userToLogin: ", userToLogin )

 //LOGIN 

 useEffect(  
  ()=>{


    fetch( "/userInSession" )
    .then( r => r.json() )
    .then( loggedInUser => { 
      if(loggedInUser){

      
      setLoggedInUser(loggedInUser) 
      setArtists(loggedInUser.artists)
      }
      //setArtists(loggedInUser.artists)
    })

  



  }
  , []
 )


  const handleOnChangeForUserToLogin =( sythEvent )=>{
    console.log( sythEvent ) 

    updateUserToLoginInfo(  { ...userToLogin , [sythEvent.target.name]: sythEvent.target.value }  )
  }


  const handleLoginSubmit =( sythEvent )=>{ 
    sythEvent.preventDefault()

    fetch( "/login", 
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( userToLogin )

    } 
  )
  .then( r => r.json() )
  .then( hopefullyAUser => { 
    
    console.log(hopefullyAUser)  


    setLoggedInUser( hopefullyAUser )
  
  
  })

  }

  //logout 
  const handleLogout = ()=>{

    fetch(  "/logout" , { method: "DELETE" }  )
    .then( r => r.json() )
    .then( deleteResponse =>{

        setLoggedInUser( null )

    })

  }



  //console.log(handleOnChangeForUserToLogin)
  return (

    <MyRouter 
    loggedInUser= {loggedInUser}
    handleOnChangeForUserToLogin={handleOnChangeForUserToLogin}
    handleLoginSubmit= {handleLoginSubmit}
    handleLogout= {handleLogout}
    artistsToMap= {artists}
    />

    );
}

export default App;



// return (<>

  


//   <div className="App">
//     <header className="App-header">
      
      
    


//       <h1>Login</h1>

//       <form onSubmit={handleLoginSubmit}>

//         <input 
//           onChange={ handleOnChangeForUserToLogin } 
//           name="username"
//         />

//         <input type="password" 
//            onChange={ handleOnChangeForUserToLogin } 
//            name="password"
//         />
//         <input type="submit" />
//       </form>
//       <br/>
//       {
//       loggedInUser ?
//       (<>
//       <button>Welcome {loggedInUser.name}</button>
//       <button onClick={handleLogout}>Logout</button>


//       {
//               artists.map( (eachArtist) => {
//                   return( <li key={eachArtist.id} className="cards__item">
//                        <div className="card">
//                         <img 
//                        src={eachArtist.image}
//                        alt="Artist pic"
//                        className="card__image"
//                        />
//                            <div className="card__content">
//                           <div className="card__title">{eachArtist.name}</div>
//                            <div className="card__detail">
                          
//                   </div>
//                </div>
//            </div>
           
//        </li>
      



//   );

             


//   }
//        )
//           }


//       </>)
//       :
//       <></>
//       }


//       <br/><br/><br/>
//       <br/><br/><br/>
//       <br/><br/>
      




//     </header>
//   </div>
//   ()
//   </>);
// }