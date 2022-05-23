import { Nav, Navbar, Container, Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Category from "./Category";
import LoginModal from "./LoginModal";
import "./Header.css";

function MainNavbar() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar className="Top-nav">
        <Container className="logo-position">
          {/* 로고 */}
          <Link to="/">
            <Navbar.Brand>
              <span className="logo-space">
                <img
                  src={`${process.env.PUBLIC_URL}/images/로고만.svg`}
                  alt="로고"
                />
              </span>
              <img
                src={`${process.env.PUBLIC_URL}/images/글씨만.svg`}
                alt="글씨"
              />
            </Navbar.Brand>
          </Link>

          {/* 검색창 */}
          <Nav className="me-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="검색어를 입력해 주세요"
                className="searchbar"
                aria-label="Search"
              ></FormControl>
            </Form>
          </Nav>

          {/* 우측 로그인 버튼 */}
          {/* <Nav.Link className='login-css' onClick={()=>{ navigate('/login') }}>로그인/회원가입</Nav.Link> */}
          <LoginModal />
        </Container>
      </Navbar>

      <Category />
    </div>
  );
}

export default MainNavbar;
