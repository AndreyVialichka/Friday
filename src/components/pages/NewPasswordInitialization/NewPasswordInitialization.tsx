
import { useSelector, useDispatch } from 'react-redux';
import {setNewPassword } from '../../../redux/Slices/NewPasswordInitializationSlice';




function NewPasswordInitialization() {
  
  const LoginState = useSelector((state:any) => state.NewPassword.newPassword)

  const dispatch = useDispatch();

  const passwordHandler = (e:any) => {
    dispatch(setNewPassword(e.currentTarget.value))
  }


  return (
    <div className="NewPasswordInitialization">
      <p>{LoginState}</p>
      <input
        onChange={passwordHandler}  
        value={LoginState}
      />
    </div>
  );
}

export default NewPasswordInitialization;
