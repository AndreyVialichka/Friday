import { useSelector, useDispatch } from 'react-redux';
import {setLogin,setPassword  } from '../../../redux/Slices/LoginSlice';

function Login() {

  const LoginState = useSelector((state:any) => state.Login.login)
  const PasswordState = useSelector((state:any) => state.Login.password)
  const dispatch = useDispatch();


  const passwordHandler = (e:any) => {
    dispatch(setPassword(e.currentTarget.value))
  }

  const loginHandler = (e:any) => {
    dispatch(setLogin(e.currentTarget.value))
  }

  return (
    <div className="Login">
      <p>{LoginState}</p>
      <input
        onChange={loginHandler}  
        value={LoginState}
      />
      <p>{PasswordState}</p>
      <input
        onChange={passwordHandler} 
        value={PasswordState}
      />
    </div>
  );
}

export default Login;
