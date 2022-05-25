import React from 'react'
import { useNavigate } from 'react-router-dom';



export default function Login({
    loggedInUser,
    handleOnChangeForUserToLogin,
    handleLoginSubmit,
    handleLogout,
    
    }) 
 { 
    let navigate = useNavigate()

    const clickHandlerLogin = () => {
        loggedInUser ? 
        navigate(`/home`)
        :
        <></>
    }

     //console.log(handleOnChangeForUserToLogin)
  return (
            <div id='back'> 
        <div className='container'>
            <div className='login-form'>
                <div className='login-title'>
                    <h1>Login</h1>
                </div>
           <div className='input-form'>
           <form onSubmit={handleLoginSubmit}>

               <input  
               onChange={handleOnChangeForUserToLogin}
               name="username"
               />

                <input type="password"
                onChange={handleOnChangeForUserToLogin}
                name="password"
                />
                <br/>
                <button type='submit' className='submit-button' onClick={clickHandlerLogin}>Submit</button>
                {/* <input type="submit"/> */}
                
           </form>
            </div>
           <br/>

           {/* {
               loggedInUser ?
               (<>
                <button>Welcome {loggedInUser.name}</button>
                <button onClick={handleLogout}> Logout </button>

               </>)
                :
                <></>
           } */}

            </div>
        </div>
        </div>
    )
}
