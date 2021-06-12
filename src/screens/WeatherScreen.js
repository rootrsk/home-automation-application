import axios from 'axios'
import React, { useEffect } from 'react'
import { View, Text,Image, ActivityIndicator,ScrollView } from 'react-native'
import { Caption, Card, Divider, Paragraph, Title } from 'react-native-paper'
import { connect } from 'react-redux'
import styled from 'styled-components'
const URL = 'https://rootrsk-home-automation-api.herokuapp.com'
const LocalUrl = 'http://192.168.43.192:3001'
const WeatherScreen = (props) => {
    const setWeather = async() =>{
        
        try {
            const response = await axios({
                url:`${URL}/weather?location=${props.user.user.city}`,
                method:'get'
            })
            const response2 = await axios({
                url:`${URL}/weather?location=Dobhi Bihar`,
                method:'get'
            })

            if(response.data.success===false){
                props.dispatch({
                    type:'SET_WEATHER',
                    weather:{
                        user:  null,
                        room: response2.data.data
                    }
                })
            }else{
                props.dispatch({
                    type:'SET_WEATHER',
                    weather:{
                        user:  response.data.data,
                        room: response2.data.data
                    }
                })
            }

        } catch (error) {
            props.dispatch({
                    type:'SET_WEATHER',
                    weather:{
                        user:  "failed",
                        room: "failed"
                    }
                })
        }
        
    }

    useEffect(() => {
        if(props.user.user){
            if(!props.weather || props.weather.user=='failed'){
                setWeather()
            }
        }
    }, []);
    if(!props.weather)
    return(
        <LoadingScreen>
            <ActivityIndicator size={50} color="blue"/>
        </LoadingScreen>
    )
    return (
        <WeatherPage>
            <WeatherContainer>
                {  !props.weather.user ?
                    <NotFound message="Couldn't Find Your City" />:
                    
                    props.weather.user==='failed' ?  <NotFound message="Something Went Wrong" />:

                    <WeatherComponent 
                        location={`${props.weather.user.location.name} ${props.weather.user.location.region} ${props.weather.user.location.country}`}
                        time={new Date(props.weather.user.current.last_updated).toLocaleTimeString()}
                        temperature={props.weather.user.current.temp_c}
                        image={`http:${props.weather.user.current.condition.icon}`}
                        humidity={props.weather.user.current.humidity}
                        condition={props.weather.user.current.condition.text}
                        wind={props.weather.user.current.wind_kph}
                        feelslike={props.weather.user.current.feelslike_c}
                        city="Your City"

                    /> 
                    
                }
                {    props.weather.room && props.weather.room!=="failed"?
                
                    <WeatherComponent 
                        location={`${props.weather.room.location.name} ${props.weather.room.location.region} ${props.weather.room.location.country}`}
                        time={new Date(props.weather.room.current.last_updated).toLocaleTimeString()}
                        temperature={props.weather.room.current.temp_c}
                        image={`http:${props.weather.room.current.condition.icon}`}
                        humidity={props.weather.room.current.humidity}
                        condition={props.weather.room.current.condition.text}
                        wind={props.weather.room.current.wind_kph}
                        feelslike={props.weather.room.current.feelslike_c}
                        city="Outside Room"

                    />:
                     <NotFound message="Something Went Wrong" />
                }
                
                <WeatherWidget>
                    <Card>
                        <HeadSection>
                            <Title>
                                Room Condition
                            </Title>
                            <Caption>
                                Last Updated : {new Date(props.sensors.time).toLocaleTimeString()}
                            </Caption>
                        </HeadSection>
                        <MiddleSection>
                            <FlexBox>
                                <MainWeatherView>
                                    <BigText>  {props.sensors.temp}°C</BigText>
                                </MainWeatherView>
                                <Description>
                                    <FlexBox>
                                        <Paragraph>Temperature</Paragraph>
                                        <Paragraph>{props.sensors.temp}°C</Paragraph>
                                    </FlexBox>
                                    <Divider />
                                    <FlexBox>
                                        <Paragraph>Humidity</Paragraph>
                                        <Paragraph>{props.sensors.humidity}</Paragraph>
                                    </FlexBox>
                                    
                                </Description>
                            </FlexBox>
                        </MiddleSection>
                    </Card>
                    
                </WeatherWidget>
            </WeatherContainer>
        </WeatherPage>
    )
}
const mapStateToProps = state => state
export default connect(mapStateToProps) (WeatherScreen)


const WeatherPage = styled.ScrollView`

    `
const WeatherContainer = styled.View`

    `
const HeadSection = styled.View`
    padding:10px;
    `
const MiddleSection = styled.View`
    
    `
const TailSection = styled.View`
    
    `
const FlexBox = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:5px;
    `

const Description = styled.View`
    width:150px;
    `
const WeatherWidget = styled.View`
    display:flex;
    marginTop:10px;
    padding:7px;
    `
const IconContainer = styled.View`

    `
const MainWeatherView = styled.View`

    `
const ImageContainer = styled.Image`
    width:90px;
    height:90px;
`
const BigText = styled.Text`
    font-size:40px;
`
const LoadingScreen = styled.View`
    flex:1;
    justify-content:center;
    `

const WeatherComponent = ({time,temperature,humidity,wind,location,image,feelslike,condition,city}) =>(
    <WeatherWidget>
        <Card>
            <HeadSection>
                <Title>
                    {location}
                </Title>
                <Caption>Last Updated : {time}</Caption> 
            </HeadSection>
            <MiddleSection>
                <FlexBox>
                    <FlexBox>
                        <IconContainer>
                            <ImageContainer
                                source={{uri:image}}
                            />
                        </IconContainer>
                        <MainWeatherView>
                            <BigText>
                               { `${temperature}°`}
                            </BigText>
                            <Caption>Realfeel {feelslike}°</Caption>
                            <Caption style={{textAlign:'center'}}>{condition}</Caption>
                        </MainWeatherView>
                    </FlexBox>
                    <Description>
                        <FlexBox>
                            <Paragraph>Temperature</Paragraph>
                            <Paragraph>{temperature}°C</Paragraph>
                        </FlexBox>
                        <Divider />
                        <FlexBox>
                            <Paragraph>Humidity</Paragraph>
                            <Paragraph>{humidity}</Paragraph>
                        </FlexBox>
                        <Divider />
                        <FlexBox>
                            <Paragraph>Wind</Paragraph>
                            <Paragraph>{wind}Kmph</Paragraph>
                        </FlexBox>
                        <Divider />
                        
                    </Description>
                </FlexBox>
            </MiddleSection>

            <TailSection>
                <FlexBox>
                    <Paragraph>Location</Paragraph>
                    <Paragraph>{city}</Paragraph>
                </FlexBox>
                <Divider />

            </TailSection>
            
        </Card>
    </WeatherWidget>
)
const NotFoundContainer = styled.View`
    height:200px;
    display:flex;
    align-items:center;
    justify-content:center;
    `   
const NotFoundText = styled.Text`
    text-align:center;
    font-weight:700;
    `

const NotFound = ({message}) =>(
    <WeatherWidget>
        <Card>
            <NotFoundContainer>
                <NotFoundText>
                    {message}
                </NotFoundText> 
            </NotFoundContainer>
        </Card>
    </WeatherWidget>
)