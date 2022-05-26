import './App.css';
import Dashboard from './components/dashboard/Dahboard';
import Login from './components/login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Students } from './components/students/Students';
import { Lectures } from './components/lectures/Lectures';
import AddStudent from './components/addStudent/AddStudent';
import AddLecture from './components/addLecture/AddLecture';

function App() {
  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children})=>{
    return currentUser ? (children) : <Navigate to='/' />;
  }

  console.log(currentUser);

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}/>
          <Route path="/students" element={<RequireAuth><Students /></RequireAuth>}/>
          <Route path="/lectures" element={<RequireAuth><Lectures /></RequireAuth>}/>
          <Route path='/addstudent' element={<RequireAuth><AddStudent /></RequireAuth>} />
          <Route path='/addlecture' element={<RequireAuth><AddLecture /></RequireAuth>} />
        </Routes>
  </Router>
  );
}

export default App;
