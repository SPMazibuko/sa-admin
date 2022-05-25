import './App.css';
import Dashboard from './components/dashboard/Dahboard';
import Login from './components/login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Students } from './components/students/Students';
import { Lectures } from './components/lectures/Lectures';
import AddStudent from './components/addStudent/AddStudent';
import AddLecture from './components/addLecture/AddLecture';
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/students" element={<Students />}/>
          <Route path="/lectures" element={<Lectures />}/>
          <Route path='/addstudent' element={<AddStudent />} />
          <Route path='/addlecture' element={<AddLecture />} />
        </Routes>
  </Router>
  );
}

export default App;
