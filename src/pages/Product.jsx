import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container =  styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
    
const ImgContainer=styled.div`
    flex: 1;
`

const Image=styled.img`
    width: 100%;
    height: 50vh;
    object-fit: cover;//goruntunun boyuna zarar vermiyor
`

const InfoContainer=styled.div`
    flex: 1;
    padding: 0px 50px;
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
    display: flex;
    justify-content: space-between;
//1.51.08
`
const Filter=styled.div``
    
const FilterTitle=styled.span``

const FilterSize=styled.select``
const FilterSizeOption=styled.option``
const FilterColor=styled.select``


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>

        <Wrapper>
            <ImgContainer>
                <Image src="https://images.pexels.com/photos/4252993/pexels-photo-4252993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </ImgContainer>
            <InfoContainer>
                <Title>SHOES</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed hic, voluptates ea temporibus alias sapiente vel minus, porro, animi nesciunt quis! Maxime deleniti repellendus quas non temporibus! In, exercitationem.</Desc>
                <Price>200 $</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
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
            </InfoContainer>
        </Wrapper>

        
        <Wrapper>
            <InfoContainer>
                <Title>SHOES</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sed hic, voluptates ea temporibus alias sapiente vel minus, porro, animi nesciunt quis! Maxime deleniti repellendus quas non temporibus! In, exercitationem.</Desc>
                <Price>200 $</Price>
            </InfoContainer>
            <ImgContainer>
                <Image src="https://images.pexels.com/photos/12368136/pexels-photo-12368136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </ImgContainer>
        </Wrapper>

        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
