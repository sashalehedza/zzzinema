import React from 'react'
import styled from 'styled-components'

import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <footer>
      {/* <Wrap>
        <Container>
          <Row>
            <span>Social Media:</span>
            <Seat href='/'>
              <Img src='Intsagram_ico.svg' />
            </Seat>
            <Seat href='/'>
              <Img src='Facebook_ico.svg' />
            </Seat>
            <Seat href='/'>
              <Img src='telegram_ico.svg' />
            </Seat>
          </Row>
          <Row>
            <span>Social Media:</span>
            <Seat href='/'>
              <Img src='Intsagram_ico.svg' />
            </Seat>
            <Seat href='/'>
              <Img src='Facebook_ico.svg' />
            </Seat>
            <Seat href='/'>
              <Img src='telegram_ico.svg' />
            </Seat>
          </Row>
        </Container>
      </Wrap> */}
      <Container className='container-styles'>
        <Row className='text-center text-dark'>
          <Col>
            <p>
              <b>Contacts</b>
            </p>
            <p>sashalehedza@gmail.com</p>
          </Col>
          <Col>
            <p>
              <b>Social Media</b>
            </p>
            <RowIMG>
              <a href='https://www.instagram.com/sashalehedza/'>
                <img src='Intsagram_ico.svg' />
              </a>
              <a href='https://www.facebook.com/sashalehedza/'>
                <img src='Facebook_ico.svg' />
              </a>
              <a href='https://telegram.org/sashalehedza'>
                <img src='telegram_ico.svg' />
              </a>
            </RowIMG>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Sasha Lehedza 2021
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

const RowIMG = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;

  a {
    margin-right: 0%;
    margin-left: 0%;
  }
`

// const Wrap = styled.div`
//   padding: 0 15%;
//   margin: 0;
//   border-style: solid;
//   border-radius: 2px;
//   border-width: 1px;
//   border-color: black;
// `

// const Container = styled.div`
//   width: 100%;
//   padding-top: 2%;
//   border-style: solid;
//   border-radius: 2px;
//   border-width: 1px;
//   border-color: black;
// `
// const Row = styled.div`
//   display: flex;
//   flex: 1;
//   margin: 3% 1%;
//   border-style: solid;
//   border-radius: 2px;
//   border-width: 1px;
//   border-color: black;
//   height: 20%;
//   span {
//     text-align: center;
//     display: inline;
//   }
// `
// const Seat = styled.a`
//   width: 3%;
//   height: 5%;
//   margin-right: 1%;
// `

// const Img = styled.img`
//   width: 100%;
//   height: 100%;
// `
