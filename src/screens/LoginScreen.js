import React, { useState } from 'react'
import * as SecureStore from 'expo-secure-store';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Button,Image,ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import styled from 'styled-components';
import loginLogo from '../assets/images/loginLogo.jpg'


const LoginScreen = (props) => {
    const [email,setEmail] = useState('rootrsk@gmail.com')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('rootrsk')
    const [hide,setHide] = useState(true);

    const loginHandler = async() =>{
        if(!props.socket){
            return
        }
        SecureStore.setItemAsync('username',username)
        SecureStore.setItemAsync('password',password)
        props.setError('')
        props.setLoading(true);
        console.log('logging in')
        props.socket.emit('join',{username,password,room:'123'})
    }
    useState(async()=>{
        const susername = await SecureStore.getItemAsync('username');
        const spassword = await SecureStore.getItemAsync('password');
        if(susername && spassword){
            setUsername(susername)
            setPassword(spassword)
        }
    },[])
    return (
        <LoginPage>
            
            <LoginContainer >
                <ImageContainer>
                    <Img source={loginLogo} />
                </ImageContainer>
                <Header >Login</Header>
                <InputContainer>
                    <TextInput
                        label="Username or Email"
                        mode="outlined"
                        placeholder='Enter username or email'
                        placeholderTextColor="#808585"
                        outlineColor = '#24ffff'
                        selectionColor='red'
                        onChangeText={setUsername}
                        value={username}
                        style={{backgroundColor:'#096894',color:'#ffffff'}}
                        left={<TextInput.Icon name="account" color="#24ffff" />}
                        onFocus={()=>false}
                        
                    />
                    <TextInput 
                        label="Password"
                        mode="outlined"
                        placeholder='Enter Password'
                        onChangeText={setPassword}
                        value={password}
                        outlineColor = '#24ffff'
                        onFocus={()=>""}
                        placeholderTextColor='red'
                        secureTextEntry={hide}
                        style={{backgroundColor:'#096894',color:'#ffffff'}}
                        left={<TextInput.Icon name="key" color='#24ffff' />}
                        right={<TextInput.Icon name={hide ? 'eye': 'eye-off'} color="#24ffff" onPress={()=>setHide(!hide)}/>}
                    />
                </InputContainer>
                
                
                <ButtonView>
                    <ButtonContainer  onPress ={loginHandler}>
                        <ButtonText>{props.loading ? <ActivityIndicator color="#ffffff" /> : 'Login'}</ButtonText>
                    </ButtonContainer>
                </ButtonView>
                

                <ErrorContainer>
                    {!!!props.socket && <NormalText>Connecting To Socket</NormalText>}
                    {!!props.error && <NormalText>{props.error}</NormalText>}
                </ErrorContainer>
                
            </LoginContainer>
        </LoginPage>
    )
}
const mapStateToProps = state => state
export default connect(mapStateToProps) (LoginScreen)

const styles = StyleSheet.create({
    headerTxt: {
        fontSize:25,
        fontWeight:'700',
        color:'white',
    },
})

const LoginPage = styled.View `
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    background: #096894;
    
    `
const LoginContainer = styled.View`
    position:relative;
    top:-30px;
    width:300px;
    `
const Header = styled.Text`
    font-size:25px;
    font-weight:700;
    color:#ffffff;
    marginLeft:10px;
`
const ImageContainer = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:center;
    `
const Img = styled.Image`
    width:100px;
    height:100px;
    border-radius:50px;
    `
const Label = styled.Text`
    position:relative;
    color: #ffffff;
    padding-top:10px;
    `
const InputContainer = styled.View`
    position:relative;
    padding:10px;
    width:100%;
    border-radius:3px;
    color:#ffffff;
    display:flex;
    justify-content:space-between;
    height:160px;
    `
const ButtonView = styled.TouchableOpacity`
    display:flex;
    justify-content: flex-end;
    flex-direction:row;
    margin-right:10px;
    `
const ButtonContainer = styled.TouchableOpacity`
    background: #19c3cf;
    width:60px;
    border-radius:3px;
    margin-top:10px;
    align-items:center;
    `
const ButtonText = styled.Text`
    text-align:center;
    padding:10px;
    color:#ffffff;
    `
const NormalText = styled.Text`
    color:#ffffff;
    text-transform:uppercase;
    `
const ErrorContainer = styled.View`
    position:absolute;
    bottom:-20px;
    `
