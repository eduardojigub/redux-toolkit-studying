import './App.css';
import ChangeColor from './components/ChangeColor';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';

function App() {
  return (
    <div className='App'>
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
