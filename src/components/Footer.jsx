
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;;
    ${mobile({flexDirection:"column"})}
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;

`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
`;

const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({display:"none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({backgroundColor:"#eee"})}
`

const ContactItem =styled.div`
    margin-bottom:20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width:40%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LIVA</Logo>
            <Desc>
            Liva started up in 1998 with a clear international mission and with the 
            intention of dressing young people who are engaged with their environment, 
            who live in the community and relate to each other. Young people who have a 
            casual dress sense, who shun stereotypes and who want to feel good in whatever 
            they are wearing. To meet their needs, Liva takes the latest international 
            trends, mixing them with the influences that are seen on the street and in the 
            most fashionable clubs, and reworks them according to their style thus turning 
            them into comfortable and easy to wear garments.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                
                <SocialIcon color="E50023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>622 Dixie Path, South Tobinchester 98336</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+90 551 123 12 34</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@liva.dev</ContactItem>
            <Payment src="https://www.kindpng.com/picc/m/241-2412123_credit-card-hd-png-download.png" alt="Credit Card, HD Png Download@kindpng.com"/>
           
        </Right>
    </Container>
  )
}

export default Footer
