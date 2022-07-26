import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import HomeLogin from "./pages/Home/HomeLogin";
import Register from "./pages/Register/Register";
import MyPage from "./pages/Mypage/Mypage";

import NotFound from "./pages/NotFound/NotFound";
import DetailPage from "./pages/DetailPage/DetailPage";
import WritePage from "./pages/WritePage/WritePage";
import Item from "./pages/Item/Item";
import All from "./pages/Item/Category/All";
import Digital from "./pages/Item/Category/Digital";
import Life from "./pages/Item/Category/Life";
import Etc from "./pages/Item/Category/Etc";
import Hobby from "./pages/Item/Category/Hobby";
import Car from "./pages/Item/Category/Car";
import Beauty from "./pages/Item/Category/Beauty";
import Clothes from "./pages/Item/Category/Clothes";

function App() {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mypage" element={<MyPage />} /> */}
      <Route path="/Write" element={<WritePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/item" element={<Item />}>
        <Route path="all" element={<All />} />
        <Route path="life" element={<Life />} />
        <Route path="digital" element={<Digital />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="beauty" element={<Beauty />} />
        <Route path="car" element={<Car />} />
        <Route path="hobby" element={<Hobby />} />
        <Route path="etc" element={<Etc />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
