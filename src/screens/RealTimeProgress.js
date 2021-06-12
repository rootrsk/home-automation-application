import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ProgressCircleChart from '../components/charts/ProgressCircleChart'

const RealTimeProgress = (props) => {
    return (
        <MainContainer>
            <TimeContainer>
                <Time>
                   Time : {new Date(props.sensors.time).toLocaleTimeString()}
                </Time>
            </TimeContainer>
            <GrpahContainer>
                <ProgressCircleChart data={props.sensors.temp} title='Temp'/>
                <ProgressCircleChart data={props.sensors.humidity} title='Humidity'/>
                <ProgressCircleChart data={props.sensors.co} title='CO'/>
                <ProgressCircleChart data={props.sensors.ch} title='CH4'/>
            </GrpahContainer>
        </MainContainer>
        
    )
}
const mapStateToProps =(state)=>{
    return state
}

export default connect(mapStateToProps) (RealTimeProgress)

const GrpahContainer = styled.View`
    margin:10px 0px;
    `
const TimeContainer = styled.View`
    width:100%;
    padding:10px 0px;
    background: #0d2457;
    
    `
const MainContainer = styled.View`
    background: #0d2457;
    height:100%;
    `
const Time = styled.Text`
    font-weight:700;
    color:white;
    text-align:center;
    `
const Viewx = styled.View `
    
    `
