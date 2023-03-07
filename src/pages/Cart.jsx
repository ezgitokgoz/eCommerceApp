import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border:${props=>props.type === "filled" && "none"} ;
  background-color:${props=>props.type === "filled" ? "black" : "transparent"} ;
  color:${props=>props.type === "filled" && "white"} ;

`
const TopTexts = styled.div`

`
const TopText = styled.span`
  text-decoration: underline;
  cursor:pointer;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  flex:3;
`
const Summary = styled.div`
  flex:1;
  background-color: aliceblue;
`
const Product = styled.div`

`
const ProductDetail= styled.div`

`
const PriceDetail=styled.div`

`
const Image = styled.img`

`
const Details = styled.div`

`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`

`
const ProductSize = styled.span`

`
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
              </TopTexts>
              <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
              <Info>
                <Product>
                  <ProductDetail>
                    <Image src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <Details>
                      <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                      <ProductId><b>ID:</b>9876788652428</ProductId>
                      <ProductColor/>
                      <ProductSize><b>Size:</b>37.5</ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>price</PriceDetail>
                </Product>
              </Info>
              <Summary>summary</Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
