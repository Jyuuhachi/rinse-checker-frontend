import React from 'react'
import {useNavigate} from 'react-router-dom'

const Login = ({changeUser}) => {

  const navigate = useNavigate();

    return (<div>
      <h1>Rinse Checker</h1>
    <h3>Login</h3>
    <form onSubmit={e=> {e.preventDefault()
    fetch("http://localhost:5555/login",{
            method:"POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({'username':e.target.elements.userName.value})
          })
          .then(res=>res.json())
          .then(loggedIn=> {
            if (loggedIn.user !== 0){
            changeUser(loggedIn.user)
              navigate('/shows')
            }
            else {
                window.alert("incorrect username")
            }
        })
        e.target.reset()}}>
          <input type="text" name="userName"></input>
          <input type="submit" value="Send"></input>
    </form>
    </div>
  );
};
  
  export default Login;