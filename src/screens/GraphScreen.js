import React from 'react'
import { View, Text,ScrollView } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import LineCharts from '../components/charts/LineChart'

const GraphScreen = (props) => {
    return (
        <MainContainer>
            <LineCharts data={props.sensors.temp} title='Temperature' unit='ºC'/>
            <LineCharts data={props.sensors.humidity} title='Humiditiy' unit='%' />
            <LineCharts data={props.sensors.co} title='Carbon Mono-oxide' unit='ppm'/>
            <LineCharts data={props.sensors.ch} title='Methane' unit='ppm' />
        </MainContainer>
    )
}

const mapStateToProps = (state)=>{
    return state
}
export default connect(mapStateToProps) (GraphScreen)

const MainContainer = styled.ScrollView`
    background: #2a396e
    `