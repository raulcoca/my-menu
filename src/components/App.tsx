import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login/Login'
import Home from './Home/Home'
import Header from './Header/Header'
import Menu from './Menu/Menu'
import AuthRoute from './Auth/AuthRoute'
import { User } from '../models/User'
import { useDispatch } from 'react-redux'
import { getDataUser } from '../services/api'
import { DO_LOGOUT, SET_USER } from '../actions/actions'
import { useEffect } from 'react'

function App() {
  console.log(localStorage.getItem('user'));
  const dispatch = useDispatch();
  const dataLocal: User = JSON.parse(localStorage.getItem('user')!);

  dispatch({ type: SET_USER, payload: dataLocal })
  console.log({ dataLocal });

  useEffect(() => {
    if (dataLocal?.token) {

      getDataUser(dataLocal.token).then(user => {
        console.log(user);

      }).catch(() => {
        localStorage.removeItem('user');
        dispatch({ type: DO_LOGOUT })
      })
    }
  }, [])


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/menu"
          element={<AuthRoute component={<Menu />} />}
        />

      </Routes>


    </>
  )
}

export default App
