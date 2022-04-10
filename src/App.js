import './App.css';
import Header from './components/Header/Header';
import GlobalStyles from './Styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import StoryUser from './components/UserStory/UserStory';
import Home from './components/Home/Home';
import MyProfile from './components/MyProfile/MyProfile';
import Direct from './components/Direct/Direct';
import Login from './components/Login.js/Login';
import Register from './components/Login.js/Register/Register';
import AuthProvider, { useAuth } from './context/authContext';
import { ProtectedRoute } from './components/Login.js/ProtectedRoute';
import EditProfile from './components/EditProfile/EditProfile';



function App() {
  const location = useLocation()

  return (
    <AuthProvider>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
          <Route path='/story' element={<ProtectedRoute><StoryUser /></ProtectedRoute>}></Route>
          <Route path='/profile' element={<ProtectedRoute><MyProfile /></ProtectedRoute>}></Route>
          <Route path='/direct/inbox' element={<ProtectedRoute><Direct /></ProtectedRoute>}></Route>
          <Route path='/account/edit' element={<ProtectedRoute><EditProfile /></ProtectedRoute>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Register />}></Route>
        </Routes>    
      <GlobalStyles />
      
    </AuthProvider>
      
    
  );
}

export default App;
