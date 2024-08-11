import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';

import Signup from './pages/Signup';
import Yourblog from './pages/Yourblog';
import Login from './pages/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Singelpage from './pages/Singelpage';
import { useContext } from 'react';
import UserContext from './context/UserContext';
import Forget from './pages/Forget';

function App() {

  const ctx = useContext(UserContext)
  console.log(ctx)
  let login = ctx.user.login
  return (



    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        { login===true && <Route path='/' element={<Home/>}/>}
        { login ===false &&<Route path='/' element={<Navigate to="/login"/>}/>}
        { login ===false &&<Route path='/login' element={<Login/>}/>}
        { login ===true &&<Route path='/login' element={<Navigate to="/"/>}/>}
        { login === false &&<Route path='/register' element={<Signup/>}/>}
        {login === true && <Route path='/yourblog' element={<Yourblog/>}/>}
        {login ===false &&<Route path='/yourblog' element={<Navigate to="/login"/>}/>}

           { <Route path='/single' element={<Singelpage/>}/>}
           { <Route path='/forget' element={<Forget/>}/>}

        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;