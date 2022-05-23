import {Navbar, Nav} from 'react-bootstrap';
import './Footer.css';
function Footer() {

    return(
        <div>
      <div className='Footer-Layout'>
        <div className='align-center'>
        <Navbar.Brand href="/">
                <span className='logo-space'>
                <img src={`${process.env.PUBLIC_URL}/images/로고만.svg`}/></span>
                <img src={`${process.env.PUBLIC_URL}/images/글씨만.svg`}/>
            </Navbar.Brand>
        <div className='footer-about'>
      <Nav.Link href="/about-team" className='color-black'>팀소개</Nav.Link>
      <Nav.Link href="/info" className='footer-about-padding'>경매참여안내</Nav.Link>
      <Nav.Link href="/help"  className='color-black'>문의하기</Nav.Link>
        </div>
        <p className='padding17'>COPYRIGHT <span className='ingredient'>©2022TEAM.KOOKBI</span> ALL RIGHTS RESERVED.</p>
        </div>
      </div>
        </div>
    )
};

export default Footer;