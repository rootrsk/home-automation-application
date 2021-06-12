import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card, Chip, Title } from 'react-native-paper'
import { connect } from 'react-redux'
import styled from 'styled-components'

const ProfileScreen = (props) => {
    return (
        <ProfilePage>
            <StyledCard elevation={5}>
                <ProfileImageContainer>
                    <ProfileImage source={{uri:'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
                </ProfileImageContainer>

                <ProfileDetailsContainer>
                    <FlexBox>
                        {console.log(props.user.user)}
                        <DetailText>Username</DetailText>
                        <DetailText>{props.user.user.username}</DetailText>
                    </FlexBox>
                    <FlexBox>
                        <DetailText>Name</DetailText>
                        <DetailText>{props.user.user.name}</DetailText>
                    </FlexBox>
                    <FlexBox>
                        <DetailText>Email</DetailText>
                        <DetailText>{props.user.user.email}</DetailText>
                    </FlexBox>
                    <FlexBox>
                        <DetailText>Contact</DetailText>
                        <DetailText>{props.user.user.contact_no}</DetailText>
                    </FlexBox>
                    <FlexBox>
                        <DetailText>City</DetailText>
                        <DetailText>{props.user.user.city}</DetailText>
                    </FlexBox>
                    <FlexBox>
                        <DetailText>Created At</DetailText>
                        <DetailText>{new Date(props.user.user.createdAt).toLocaleDateString()}</DetailText>
                    </FlexBox>
                </ProfileDetailsContainer>
            </StyledCard>
            <StyledCard>
                <FiexWidth>
                    <Title style={{color:'#ffffff'}}>Upcoming Update</Title>
                    <ChipView>
                        <Chip 
                            mode='outlined'
                            icon='information' 
                            style={{backgroundColor:'transparent',borderColor:'black'}} 
                            textStyle={{color:'white'}}
                            >
                            Profile Pic Upload
                        </Chip> 
                    </ChipView>
                    <ChipView>
                        <Chip 
                            mode='outlined'
                            icon='information' 
                            style={{backgroundColor:'transparent',borderColor:'black'}} 
                            textStyle={{color:'white'}}
                            >
                            Account Creation
                        </Chip> 
                    </ChipView>
                  
                   <ChipView>
                        <Chip 
                            mode='outlined'
                            icon='information' 
                            style={{backgroundColor:'transparent',borderColor:'black'}} 
                            textStyle={{color:'white'}}
                            >
                            Contact  Verification
                        </Chip> 
                    </ChipView>
                    <ChipView>
                        <Chip 
                            mode='outlined'
                            icon='information' 
                            style={{backgroundColor:'transparent',borderColor:'black'}} 
                            textStyle={{color:'white'}}
                            >
                            Email Verification
                        </Chip> 
                    </ChipView>
                    <ChipView>
                        <Chip 
                            mode='outlined'
                            icon='information' 
                            style={{backgroundColor:'transparent',borderColor:'black'}} 
                            textStyle={{color:'white'}}
                            >
                            Profile Updates
                        </Chip> 
                    </ChipView>
                </FiexWidth>
                
            </StyledCard>
            
        </ProfilePage>
    )
}
const mapStateToProps = state => state

export default connect(mapStateToProps) (ProfileScreen)

const ProfilePage = styled.View`
    background: #0b3f3fdc;
    height:100%;
    `
const ProfileImageContainer = styled.View`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:20px;
    `
const ProfileImage = styled.Image`
    width:100px;
    height:100px;
    border-radius:50px;
    `
const ProfileDetailsContainer = styled.View`
    padding:10px;
    `
const FlexBox = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    `
const DetailText = styled.Text`
    color:#fff;
    font-weight:600;
    `
const StyledCard =styled.View`
    elevation:3;
    width:95%;
    marginLeft:2.5%;
    background: #0b3f3f;
    border-radius: 5px;
    margin-top: 10px;
`
const ChipView = styled.View`
    margin-top:7px;
`
const FiexWidth = styled.View`
    width:200px;
    padding:10px;
    margin:auto;
`