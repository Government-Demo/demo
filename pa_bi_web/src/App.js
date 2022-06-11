import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import HomeLogin from "./pages/Home/HomeLogin";
import Register from "./pages/Register/Register";
import MyPage from "./pages/Mypage/Mypage";
import All from "./pages/All/All";
import Digital from "./pages/Digital/Digital";
import NotFound from "./pages/NotFound/NotFound";
import DetailPage from "./pages/DetailPage/DetailPage";
import WritePage from "./pages/WritePage/WritePage";

function App() {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mypage" element={<MyPage />} /> */}
      <Route path="/Write" element={<WritePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/all" element={<All />} />
      <Route path="/digital" element={<Digital />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
