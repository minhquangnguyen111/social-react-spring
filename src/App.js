import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './pages/Authentication/Authentication';
import HomePage from './pages/Homepage/HomePage';
import Message from './pages/Message/Message';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfileAction } from './Redux/Auth/auth.action';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './theme/DarkTheme';
import Profile from './pages/Profile/Profile';
import Reels from './components/Reels/Reels';

function App() {
  const { auth } = useSelector(store => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    dispatch(getProfileAction(jwt))
  }, [jwt])
  return (
    <ThemeProvider theme={darkTheme}>
      <header>
        <Routes>

          <Route path='/*' element={auth.user ? <HomePage /> : <Authentication />} />
          <Route path='/message' element={auth.user ? <Message /> : <Authentication />} />
          <Route path='/*' element={<Authentication />} />
          <Route path='/profile' element={auth.user ? <Profile /> : <Authentication />} />
        </Routes>
      </header>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
