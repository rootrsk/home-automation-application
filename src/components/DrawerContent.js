import React from 'react'
import { View, Text ,BackHandler} from 'react-native'
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Entypo'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import styled from 'styled-components'
import { connect } from 'react-redux'
const DrawerContent = (props) => {
    return (
        <DrawerView>
            <DrawerContentScrollView {...props}>
                <MainSection>
                    <ProfileView>
                        <Avatar.Image 
                            source={{uri:'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
                        />
                        <ProfileDetails>
                            <Title >
                                {props.user.user.name}
                            </Title>
                            <Caption>
                                @{props.user.user.username}
                            </Caption>
                        </ProfileDetails>
                    </ProfileView>
                    <RouteSection>
                        <DrawerItem 
                            label="Home"
                            labelStyle={{color:'#0d0920'}}
                            activeBackgroundColor = '#07e2e2'
                            // focused={true}
                            icon={({color,size})=> <Icon name='home' color={'#0d0920'} size={size} />}
                            onPress={()=>props.navigation.navigate('Home')}
                            
                        />
                        <DrawerItem 
                            label="Buttons"
                            labelStyle={{color:'#0d0920'}}
                            activeBackgroundColor = '#07e2e2'
                            activeTintColor='#ffffff'
                            // focused={true}
                            icon={({color,size})=> <MaterialIcon name='gesture-tap-button' color={'#0d0920'} size={size} />}
                            onPress={()=>props.navigation.navigate('Switch')}
                        />
                        <DrawerItem 
                            label="Profile"
                            labelStyle={{color:'#0d0920'}}
                            activeBackgroundColor = '#07e2e2'
                            activeTintColor = '#ffffff'
                            icon={({color,size})=> <Icon name='user' color={'#0d0920'} size={size} />}
                            onPress={()=>props.navigation.navigate('Profile')}
                        />
                        <DrawerItem 
                            label="Weather"
                            labelStyle={{color:'#0d0920'}}
                            activeBackgroundColor = '#07e2e2'
                            activeTintColor = '#ffffff'
                            icon={({color,size})=> <MaterialIcon name='weather-partly-cloudy' color={'#0d0920'} size={size} />}
                            onPress={()=>props.navigation.navigate('Weather')}
                        />
                        <DrawerItem 
                            label="Line Graphs"
                            labelStyle={{color:'#0d0920'}}
                            activeBackgroundColor = '#07e2e2'
                            activeTintColor = '#ffffff'
                            icon={({color,size})=> <Icon name='line-graph' color={'#0d0920'} size={size} />}
                            onPress={()=>props.navigation.navigate('Graph')}
                        />
                        <DrawerItem 
                            label="Circular Grpahs"
                            labelStyle={{color:'#0d0920'}}
                            activeBackgroundColor = '#07e2e2'
                            activeTintColor = '#ffffff'
                            icon={({color,size})=> <Icon name='circular-graph' color={'#0d0920'} size={size} />}
                            onPress={()=>props.navigation.navigate('Progress')}
                        />
                    </RouteSection>
                </MainSection>
                

            </DrawerContentScrollView>
            <Drawer.Section>
                
                <DrawerItem 
                    label="Exit"
                    icon={({color,size})=> <MaterialIcon name='exit-to-app' color={color} size={size} />}
                    onPress={()=>BackHandler.exitApp()}
                />
            </Drawer.Section>
        </DrawerView>
    )
}
const mapStateToProps = state => state
export default connect(mapStateToProps) (DrawerContent)


const DrawerView = styled.View`
    flex:1;
    background: #01ffff;
    color:#0d0920;
`
const MainSection = styled.View `
    color:#0d0920;                          
`
const RouteSection = styled.View`

`
const ProfileView = styled.View`
    display:flex;
    flex-direction: row;
    margin:10px;

`
const ProfileDetails = styled.View`
    paddingLeft:10px;
`
