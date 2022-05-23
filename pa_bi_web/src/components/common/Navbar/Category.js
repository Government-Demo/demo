import {Nav,Container,Navbar} from 'react-bootstrap';
import Category_data from './Category_data';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Category() {

    let navigate = useNavigate();

    let [data] = useState(Category_data)

    return(
    <div className='Category'>
        <Navbar bg="light" expand="lg">
        <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Link className='category-content' onClick={()=>{ navigate('/all') }}>{data[0].title}</Nav.Link>
        <Nav.Link className='category-content' onClick={()=>{ navigate('/living') }}>{data[1].title}</Nav.Link>
        <Nav.Link className='category-content' onClick={()=>{ navigate('/digital') }}>{data[2].title}</Nav.Link>
        <Nav.Link className='category-content' onClick={()=>{ navigate('/fashion') }}>{data[3].title}</Nav.Link>
        <Nav.Link className='category-content' onClick={()=>{ navigate('/beauty') }}>{data[4].title}</Nav.Link>
        <Nav.Link className='category-content' onClick={()=>{ navigate('/outdoor') }}>{data[5].title}</Nav.Link>
        <Nav.Link className='category-content' onClick={()=>{ navigate('/sport') }}>{data[6].title}</Nav.Link>
        <Nav.Link className='category-content' onClick={()=>{ navigate('/other') }}>{data[7].title}</Nav.Link>
        </Nav>

        </Navbar.Collapse>
    </Container>
    </Navbar>
    


    </div>
    )
};

export default Category;