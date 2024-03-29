import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'

const Container =  styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding:"10px", flexDirection:"column"})}
`
    
const ImgContainer=styled.div`
    flex: 1;
`

const Image=styled.img`
    width: 100%;
    height: 120vh;
    object-fit: cover;//goruntunun boyuna zarar vermiyor
    ${mobile({height:"40vh"})}
`

const InfoContainer=styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding:"10px"})}
`
    
const Title=styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price=styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer=styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`
const Filter=styled.div`
    display: flex;
    align-items: center;

`
    
const FilterTitle=styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterSize=styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption=styled.option``
const FilterColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const AddContainer=styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`
const AmountContainer=styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;


`
const Amount=styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button=styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color:#eafff5
    }

`


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>

        <Wrapper>
            <ImgContainer>
                <Image src="https://images.pexels.com/photos/7691020/pexels-photo-7691020.jpeg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>BLAZER</Title>
                <Desc>COMPOSITION</Desc>
                <Desc>External: 100% polyester</Desc>
                <Desc>Lining: 100% polyester</Desc>
                <Desc>CARE</Desc>
                <Desc>DO NOT WASH</Desc>
                <Desc>DO NOT BLEACH</Desc>
                <Desc>DO NOT TUMBLE DRY</Desc>
                <Desc>DRY CLEAN TETRACHLORETHYLENE</Desc>

                <Price>50 $</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="green"/>
                        <FilterColor color="black"/>
                        <FilterColor color="gray"/>                        
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>

        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
