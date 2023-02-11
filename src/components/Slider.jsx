import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    background-color: #d1e7fb;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #eaf1fc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Slider = () => {
  return (
    <Container>
        <Arrow>
            <ArrowLeftOutlined/>
        </Arrow>
        <Arrow>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider
