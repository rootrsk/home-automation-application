import React from 'react'
import { LineChart, Path, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import { View,Text, Button, StyleSheet,Image } from 'react-native'
class LineChartExample extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: [40, 95, 85, 91, 35, 53],
            dataX: [40, 95, 85, 91, 35, 53]
        }
    }
    componentDidMount() {
        
        
        setInterval(() => {
            const x = Math.round(Math.random() * 100)
            console.log(x)
            this.setState({
                data:[...this.state.data,x]
            })
            this.state.data.shift()
        }, 3000);
    }

    render() {

        const data = [ 0, 10, 40, 95, 100 ]
        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30
        const contentInset = { top: 10, bottom: 10 }
        const Shadow = ({ line }) => (
            <Path
                key={'shadow'}
                y={2}
                d={line}
                fill={'none'}
                strokeWidth={4}
                stroke={'rgba(134, 65, 244, 0.2)'}
            />
        )

        return (
            <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={6}
                    formatLabel={(value) => `${value}ºC`}
                />
                <LineChart
                    style={ { flex:1 } }
                    data={ this.state.data }
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={ { top: 10, bottom: 10 } }
                >
                    <Grid/>
                    <Shadow/>
                </LineChart>   
                {/* <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={this.state.data}
                    formatLabel={(value, index) => this.state.data[index]}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                /> */}
                 
            </View>
            
        )
    }

}

export default LineChartExample