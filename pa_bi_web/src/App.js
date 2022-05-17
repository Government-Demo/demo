import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import HomeLogin from "./pages/Home/HomeLogin";
import Register from "./pages/Register/Register";
import MyPage from "./pages/Mypage/Mypage";
import Digital from "./pages/Digital/Digital";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mypage" element={<MyPage />} /> */}
      <Route path="/digital" element={<Digital />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
