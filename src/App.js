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
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/students" element={<Students />}/>
          <Route path="/lectures" element={<Lectures />}/>
        </Routes>
  </Router>
  );
}

export default App;
