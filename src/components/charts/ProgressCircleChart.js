import React from 'react'
import { ProgressCircle } from 'react-native-svg-charts'
import { View,Text } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'

class ProgressCircleExample extends React.PureComponent {

    render() {

        return (
            <GrpahContainer>
                <ProgressCircle
                    style={ { height: 150 } }
                    progress={ (this.props.data)/60 }
                    progressColor={'#1effe1'}
                    startAngle={ -Math.PI * 0.8 }
                    endAngle={ Math.PI * 0.8 }
                    strokeWidth={7}
                    backgroundColor='white'
                />
                <TitleContainer>
                    <Title>
                        {(this.props.data).toString()}
                    </Title>
                    
                </TitleContainer>
                <DataWrapper>
                    <Data>
                        {(this.props.title).toString()}
                    </Data>
                </DataWrapper>
            </GrpahContainer>
        )
    }

}
const mapStateToProps =(state) =>{
    return state
}
export default connect(mapStateToProps) (ProgressCircleExample)
const GrpahContainer = styled.View `
    position:relative;
    `
const TitleContainer = styled.View`
    position:absolute;
    top:0;
    align-items:center;
    bottom:0;
    z-index:2;
    background:transparent;
    display:flex;
    justify-content:center;
    left:0;
    right:0;
    `
const Title = styled.Text`
    font-size:30px;
    font-weight:700;
    color:white;
    align-items:center;
    `
const Data = styled.Text`
    position:relative;
    font-size:17px;
    font-weight:700;
    color: #61ffff;
    align-items:center;
    z-index:3;
    margin:20px 0px;
    `
const DataWrapper = styled.View`
    position:absolute;
    align-items:center;
    bottom:0;
    z-index:10;
    background:transparent;
    display:flex;
    justify-content:center;
    left:0;
    right:0;
    `