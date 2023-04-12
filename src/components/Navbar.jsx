//import SearchIcon from '@mui/icons-material/Search';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
//import {Badge} from '@mui/core-material';
import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
   height: 60px;
   //background-color: #5dae96;
   ${mobile({height:"50px"})}
`

const Wrapper = styled.div`
    padding: 10px 20px;  //10px shifted down,20px shifted right,,,margin creates extra space around an element
    display: flex;//child elements automatically align like columns or rows with auto width and auto height
    justify-content: space-between;
    align-items: center;
    ${mobile({padding:"10px 0px"})}
`

const Language = styled.span`
    font-size:14px ;
    cursor: pointer;
    ${mobile({display:"none"})}
`
const Left =styled.div`
    flex: 1;
    display:flex;
    align-items: center;
`
const Center =styled.div`
    flex: 1;
    text-align: center;
`
const Right =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2,justifyContent:"center"})}
`

const SearchContainer=styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items: center;
    margin-left:25px;
    padding:5px;
`

const Input = styled.input`
    border:none;
    ${mobile({width:"50px"})}
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px",marginLeft:"10px"})}
`


const navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color:"gray",fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>LIVA</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge /*badgeContent={4} color="none"*/ >
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default navbar
