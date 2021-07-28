import React from 'react'
import { Route, Navlink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

import '../styles/Header.min.css'
import styled from 'styled-components'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar className='color-nav' variant='dark' expand='lg' collapseOnSelect>
        <NavLogo href='/'>
          <img src='favicon.ico' />
        </NavLogo>
        <NavMenuLeft>
          <a href='/movies'>
            <span>Movies</span>
          </a>
          <a href='/hall'>
            <span>Hall</span>
          </a>
        </NavMenuLeft>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Route render={({ history }) => <SearchBox history={history} />} />
          <Nav className='ml-auto'>
            {userInfo && userInfo.isAdmin && (
              <div className='div-center'>
                <NavDropdown
                  className='div-center'
                  title='Admin'
                  id='adminmenu'
                >
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/Productlist'>
                    <NavDropdown.Item>Films</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </div>
            )}
            {userInfo ? (
              <NavLog>
                <a href='/profile'>
                  <span>{userInfo.name}</span>
                </a>
                <CartLogo onClick={logoutHandler}>
                  <img src='/images2/header/out.svg' />
                </CartLogo>
                <CartLogo href='/cart'>
                  <img src='/images2/header/cart.svg' />
                </CartLogo>
              </NavLog>
            ) : (
              <NavMenuRight>
                <a href='/login?redirect=/'>
                  <span>Sign In</span>
                </a>
                <h3>|</h3>
                <a href='/register'>
                  <span>Register</span>
                </a>
                <h2></h2>
                <CartLogo href='/cart'>
                  <img src='/images2/header/cart.svg' />
                </CartLogo>
                <h2></h2>
              </NavMenuRight>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
// const Container = styled.div`
//   height: 60px;
//   background: #090b13;
//   display: flex;
//   align-item: center;
//   padding: 0 10px;
//   overflow-x: hidden;
// `

const NavLogo = styled.a`
  img {
    display: flex;
    align-items: center;
    margin-left: 20px;
    height: 70px;
    width: 70px;
    cursor: pointer;
  }
`
const CartLogo = styled.a`
  img {
    display: flex;
    align-items: center;
    margin-left: 0px;
    margin-right: 0px;
    height: 30px;
    width: 36px;
    cursor: pointer;
  }
`

const NavLog = styled.div`
    display: flex;
    align-items: center;

    h3 {
      color:white;
      -webkit-user-select: none;  /* Chrome all / Safari all */
      -moz-user-select: none;     /* Firefox all */
      -ms-user-select: none;      /* IE 10+ */
      user-select: none;          /* Likely future */           
    }
  }

  a {
    display: flex;
    align-items: center;
    padding: 0px 5px;
    margin-right: 20px;
    color:white;
    cursor: pointer;
    text-decoration: none;

    

    span {
      font-size: 24px;
      margin: 8px;
      letter-spacing: 1.1px;
      text-transform: capitalize;
    }
    &:hover {
      color: #3cb4e7;
      // span: after {
      //   transform: scaleX(1);
      //   opacity: 1;
      // }
  }
`

const NavMenuLeft = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0px 10px;
    margin: 10px 4px;
    cursor: pointer;
    color: white;
    text-decoration: none;

    img {
      height: 20px;
    }

    span {
      font-size: 24px;
      text-transform: capitalize;
      letter-spacing: 1.42px;
      position: relative;
      padding: 15px 5px;
    }
    &:hover {
      color: grey;
    }
  }
`

const NavMenuRight = styled.div`
  display: flex;
  align-items: center;

  h2{
    margin-right: 10px;
  }

  h3 {
    color:white;
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;          /* Likely future */           
  }

  a {
    display: flex;
    align-items: center;
    padding: 0px 5px;
    color:white;
    cursor: pointer;
    text-decoration: none;

    

    span {
      font-size: 14px;
      margin: 8px;
      letter-spacing: 1.1px;
      text-transform: capitalize;
    }
    &:hover {
      color: #3cb4e7;
      // span: after {
      //   transform: scaleX(1);
      //   opacity: 1;
      // }
  }
  `
