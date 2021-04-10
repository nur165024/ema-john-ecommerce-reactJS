import firebase from 'firebase';
import firebaseConfig from './firebase.config';
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

function Login() {

  const [logInUser, setLogInUser] = useContext(UserContext);
  const [createUser, setCreateUser] = useState(false)

  const [user, setUser] = useState({
    userSing : false,
    name : '',
    email : '',
    password : '',
    image : '',
    error : '',
    success : false
  })

  const history = useHistory();
  const location = useLocation();
  
  const { from } = location.state || { from: { pathname: "/" } };

  const inputFild = (e) => {
    const userInfo = {...user};
    userInfo[e.target.name] = e.target.value;
    setUser(userInfo);
  }
  
  const formSubmit = (e) => {
    if (createUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const inforUser = {...user}
          inforUser.success = true;
          inforUser.error = '';
          setUser(inforUser)
        }).catch(err => {
          var errorMessage = err.message;
          const inforUser = {...user}
          inforUser.success = false;
          inforUser.error = errorMessage;
          setUser(inforUser)
        });
    }

    if (!createUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const inforUser = {...user}
          inforUser.success = true;
          inforUser.error = '';
          setUser(inforUser)
          setLogInUser(inforUser)
          history.replace(from)
        })
        .catch(err => {
          var errorMessage = err.message;
          const inforUser = {...user}
          inforUser.success = false;
          inforUser.error = errorMessage;
          setUser(inforUser)
          setLogInUser(inforUser)
        });
    }
    e.preventDefault();
  }

  return (
    <div style={{ textAlign:'center' }}>
      <h3>user register start</h3>
      <form onSubmit={formSubmit}>
        <input onClick={() => setCreateUser(!createUser)} type="checkbox"/> Create New User
        <br/>
        {
          createUser && <input type="text" onBlur={inputFild} name="name" placeholder="Enter your Name" required/>
        }
        <br/>
        <input type="email" onBlur={inputFild} name="email" placeholder="Enter your Email" required/>
        <br/>
        <input type="password" onBlur={inputFild} name="password" placeholder="Enter your Password" required/>
        <br/>
        {
          createUser
          ? <input type="submit" value="Signup"/>
          : <input type="submit" value="SignIn"/>
        }
      </form>
      <br/>
      {
        user.success && <h3 style={{ color:'green'}}>User { createUser ? 'Created' : 'Login' } Successfully!</h3>
      }
    </div>
  );
}

export default Login;
