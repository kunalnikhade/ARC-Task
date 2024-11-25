import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute'; 
import { Home } from './Components/Home';
import Login from './Components/Login';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute Component = {Home}/>} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  )
}

export default App
