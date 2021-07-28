import React, { useState } from 'react'
//import { Container, Row, Col } from 'react-bootstrap'

import '../styles/Hall.min.css'
import styled from 'styled-components'

const Hall = () => {
  return (
    <div>
      <Wrap>
        <Img src='/screen.svg' />
        <H3>Screen</H3>
        <Container>
          <Row>
            <Seat src='/seat.jpeg'></Seat>
            <ActiveSeat src='/active-seat.jpeg'></ActiveSeat>
            <ActiveSeat src='/seat.jpeg'></ActiveSeat>
            <Seat src='/seat.jpeg'></Seat>
            <FreeArea></FreeArea>
            <FreeArea></FreeArea>
            <UnavailableSeat src='/seat.jpeg'></UnavailableSeat>
            <Seat src='/seat.jpeg'></Seat>
          </Row>
          <Row>
            <Seat src='/seat.jpeg'></Seat>
            <Seat src='/seat.jpeg'></Seat>
            <Seat src='/seat.jpeg'></Seat>
            <Seat src='/seat.jpeg'></Seat>
            <FreeArea></FreeArea>
            <FreeArea></FreeArea>
            <Seat src='/seat.jpeg'></Seat>
            <Seat src='/seat.jpeg'></Seat>
          </Row>
          <Row>
            <ActiveSeat src='/seat.jpeg'></ActiveSeat>
            <UnavailableSeat src='/seat.jpeg'></UnavailableSeat>
            <UnavailableSeat src='/seat.jpeg'></UnavailableSeat>
            <Seat src='/seat.jpeg'></Seat>
            <Seat src='/seat.jpeg'></Seat>
            <Seat src='/seat.jpeg'></Seat>
            <UnavailableSeat src='/seat.jpeg'></UnavailableSeat>
            <UnavailableSeat src='/seat.jpeg'></UnavailableSeat>
          </Row>
        </Container>
      </Wrap>
    </div>
  )
}

export default Hall

const Wrap = styled.div`
  position: relative;
  height: 30vh;
  padding: 0 15%;
  margin: 0;
`

const Img = styled.img`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: auto;
`
const H3 = styled.h3`
  text-align: center;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  padding: 0 15%;
  padding-top: 0%;
`
const Row = styled.div`
  width: 100%;
  height: 20%;
  position: relative;
  display: flex;
  flex: 1;
  margin: 2% 0%;
`
const Seat = styled.div`
  cursor: pointer;
  width: 10%;
  height: 100%;
  margin-right: 2%;
  background-image: url('/seat.jpeg');
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: top;
  background-size: contain;
`

const ActiveSeat = styled.div`
  cursor: pointer;
  width: 10%;
  height: 100%;
  margin-right: 2%;
  background-image: url('/active-seat.jpeg');
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: top;
  background-size: contain;
`

const UnavailableSeat = styled.div`
  cursor: pointer;
  width: 10%;
  height: 100%;
  margin-right: 2%;
  background-image: url('/unavailable-seat.jpeg');
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: top;
  background-size: contain;
`

// const Seat = styled.div`
//   font-size: 17px;
//   font-weight: bold;
//   text-align: center;
//   сursor: pointer;
//   width: 30px;
//   height: 40px;
//   border: solid;
//   border-color: red;
//   background-image: url('/seat.jpeg');
//   background-repeat: no-repeat;
//   background-position-x: left;
//   background-position-y: center;
//   background-size: contain;
// `

const SeatButton = styled.button`
  width: 3%;
  height: 5%;
  margin-right: 1%;
`

const FreeArea = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 2%;
`
// const Container = styled.div`
//   border-style: solid;
//   border-color: blue;
// `
// const Row = styled.div`
//   display: flex;
//   flex: 1;
//   min-width: 50px;
//   min-height: 50px;
//   margin-bottom: 10px;
//   background-color: red;
// `
