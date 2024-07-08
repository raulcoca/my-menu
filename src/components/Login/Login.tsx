import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setLogin } from '../../services/api';
import { useDispatch } from 'react-redux';
import { LoginRequest } from '../../interfaces/requests/login-request';
import { SET_USER } from '../../actions/actions';

const INITIAL_STATE: LoginRequest = { username: '', password: '' };

function Login() {
  const [user, setUser] = useState(INITIAL_STATE);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInput = (ev: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [ev.target.id]: ev.target.value });
  };

  const handleForm = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setLogin(user).then((user) => {
      console.log(user);
      console.log('json', JSON.stringify(user));

      localStorage.setItem('user', JSON.stringify(user));
      // setUserData(data);
      dispatch({ type: SET_USER, payload: user });
      navigate('/menu');
    });
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor="username">Nombre de usuario:</label>
        <input onChange={handleInput} type="text" name="username" id="username"></input>
        <br></br>
        <label htmlFor="password">Contraseña:</label>
        <input onChange={handleInput} type="password" name="password" id="password"></input>
        <br></br>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
