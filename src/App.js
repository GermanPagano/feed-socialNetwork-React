import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import Feed from './pages/Feed/Feed';
import { UserProvider } from "./storage/UserContext";
import Nav from './components/Nav/Nav';
import Profile from './pages/Profile/Profile';


function App() {
  return (
    <UserProvider>
    <div className="App">
      <BrowserRouter>
      <Nav/>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/feed/:username" element={<Feed/>} />
            <Route path="/perfil/:username"  element={<Profile/>} />
          </Routes>

        </BrowserRouter>
    </div>
    </UserProvider>
  );
}

export default App;
