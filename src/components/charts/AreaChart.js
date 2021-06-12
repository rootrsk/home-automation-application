import React from 'react'
import { LineChart, Path, Grid } from 'react-native-svg-charts'
const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
class LineChartExample extends React.PureComponent {
    constructor(props){
        super(props)
        this.state={
            data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                data:[...this.state.data,Math.random()*100]
            })
            this.state.data.shift()
        }, 3000);
    }

    render() {

        

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
            <LineChart
                style={ { height: 200 } }
                data={ this.state.data }
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={ { top: 20, bottom: 20 } }
            >
                <Grid/>
                <Shadow/>
            </LineChart>
        )
    }

}

export default LineChartExample
