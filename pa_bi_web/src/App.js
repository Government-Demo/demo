import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeLogin from "./pages/Home/HomeLogin";
import Login from "./pages/Login/Login";
import MyPage from "./pages/Mypage/Mypage";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Digital from "./pages/Digital/Digital";

function App() {
  const isLogin = false;
  return (
    <BrowserRouter>
      {!isLogin ? (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/digital" component={Digital} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/mypage" component={MyPage} />
          <Route path="/" exact component={HomeLogin} />
          <Route component={NotFound} />
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default App;
