import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import browserHistory from "./browserHistory";
import Home from "./pages/Home/Home";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <Routes>
        <Route path="/:username" element={<UserProfile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
