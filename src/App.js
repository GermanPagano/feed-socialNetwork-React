import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import Feed from './pages/Feed/Feed';
import { UserProvider } from "./storage/UserContext";


function App() {
  return (
    <UserProvider>
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/feed/:username" element={<Feed/>} />

          </Routes>

        </BrowserRouter>
    </div>
    </UserProvider>
  );
}

export default App;
