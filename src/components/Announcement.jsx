import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #ee7621;
    
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      Free shipping on your first purchase and 15% off your first purchase!    
    </Container>
  )
}

export default Announcement
