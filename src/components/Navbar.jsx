//import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   height: 60px;
   //background-color: #5dae96;
`

const Wrapper = styled.div`
    padding: 10px 20px;  //10px shifted down,20px shifted right,,,margin creates extra space around an element
    display: flex;//child elements automatically align like columns or rows with auto width and auto height
    justify-content: space-between;
    align-items: center;

`

const Language = styled.span`
    font-size:14px ;
    cursor: pointer;
`
const Left =styled.div`
    flex: 1;
    display:flex;
    align-items: center;
`
const Center =styled.div`flex: 1;`
const Right =styled.div`flex: 1;`

const SearchContainer=styled.div`
    border: 1px solid lightgray;
    display:flex;
    align-items: center;
`


const navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    search babyyy
                    <Search/>
                </SearchContainer>
            </Left>
            <Center>center</Center>
            <Right>right</Right>
        </Wrapper>
    </Container>
  )
}

export default navbar
