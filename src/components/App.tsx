import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login/Login'
import Home from './Home/Home'
import Header from './Header/Header'
import Menu from './Menu/Menu'
import AuthRoute from './Auth/AuthRoute'
import { User } from '../models/User'
import { useDispatch } from 'react-redux'
import { SET_MEALS, SET_USER } from '../actions/actions'
import { useEffect } from 'react'
import { getMeals } from '../services/api'
import moment from 'moment'
import 'moment/dist/locale/es';
import { MealDetail } from './MealDetail/MealDetail'
import { NotFound } from './NotFound/NotFound'

function App() {
  console.log(localStorage.getItem('user'));
  const dispatch = useDispatch();
  const dataLocal: User = JSON.parse(localStorage.getItem('user')!);
  moment.locale('es');

  dispatch({ type: SET_USER, payload: dataLocal })
  console.log({ dataLocal });

  // useEffect(() => {
  //   if (dataLocal?.token) {

  //     getDataUser(dataLocal.token).then(user => {
  //       console.log(user);

  //     }).catch(() => {
  //       localStorage.removeItem('user');
  //       dispatch({ type: DO_LOGOUT })
  //     })
  //   }
  // }, [])

  useEffect(() => {
    getMeals().then((meals) => {

      console.log({ meals });
      dispatch({ type: SET_MEALS, payload: meals })
    })
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

        <Route
          path="/detail/:id"
          element={<AuthRoute component={<MealDetail />} />}
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>


    </>
  )
}

export default App
