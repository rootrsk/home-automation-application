import React from 'react'
import { LineChart, YAxis, Grid,Path } from 'react-native-svg-charts'
import { View,Text } from 'react-native'
import styled from 'styled-components'

class LineCharts extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: [10,60],
            dataX: [10, 20, 30, 40, 50, 60]
        }
    }
    componentDidMount() {

        setInterval(() => {
            const x = Math.round(Math.random() * 100)
            // console.log(x)
            if(this.state.data.length>6){
               this.state.data.shift()
            }
            this.setState({
                data: [...this.state.data, parseInt(this.props.data)]
            })
            
        }, 2000);
    }
    render() {
        const data = [10,60]

        const contentInset = { top: 20, bottom: 20 }
        const Shadow = ({ line }) => (
            <Path
                key={'shadow'}
                y={2}
                d={line}
                fill={'none'}
                strokeWidth={4}
                stroke={'#e30eff7a'}
            />
        )

       
        return (
            <MainContainer>
                <Title>{this.props.title}</Title>
                <GraphContainer style={{ height: 220, flexDirection: 'row' }}>
                    
                    <YAxis
                        data={this.state.data}
                        contentInset={contentInset}
                        svg={{
                            fill: '#fff',
                            fontSize: 10,
                        }}
                        numberOfTicks={5}
                        formatLabel={(value) => `${value}${this.props.unit}`}
                    />
                    <LineChart
                        style={{ flex: 1, marginLeft: 16 }}
                        data={this.state.data}
                        svg={{ stroke: 'red' }}
                        contentInset={contentInset}
                    >
                        <Grid />
                        <Shadow/>
                    </LineChart>
                </GraphContainer>  
            </MainContainer>
            
        )
    }
}

export default LineCharts
const MainContainer  = styled.View`
    background: #394a88;
    margin:10px 4px;
    border-radius:7px;
    `
const GraphContainer = styled.View`
    
    padding: 0px 10px;
    `
const Title = styled.Text`
    font-weight:700
    color: #0ef7ff;
    padding:5px 0px 0px 10px;
    
    `