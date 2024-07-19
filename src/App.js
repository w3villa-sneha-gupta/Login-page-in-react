import LoginForm from './components/LoginForm';
import './App.css';
import Signup from './components/Sign';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <Router>
      <div>
        <Routes>
      <Route exact path="/" element={<LoginForm/>}/>
      <Route path="/signup"   element={<Signup/>}/>
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        </Routes>
      </div>
  </Router>
  );
}

export default App;
