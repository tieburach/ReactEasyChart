import React, {Component} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";


class Chart extends Component{
  constructor(props){
    super(props);
  }

    onClick = () => {
        console.log(this.refs.highCharts);
        if (this.refs.highCharts) {
            this.refs.highCharts.chart.series[0].update({
                type: "line"
            });
            this.refs.highCharts.chart.series[1].update({
                type: "line"
            });
            this.refs.highCharts.chart.series[2].update({
                type: "line"
            });
        } else {
            console.log("not working");
        }
    };

    onClickBar = () => {
        this.refs.highCharts.chart.series[0].update({
            type: "bar"
        });
        this.refs.highCharts.chart.series[1].update({
            type: "bar"
        });
        this.refs.highCharts.chart.series[2].update({
            type: "bar"
        });
    };


    render() {
        const options = {
            title: {
                text: "Test"
            },
            xAxis: {
                categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"]
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: "John",
                    data: [5, 3, 4, 7, 2],
                    type: "column"
                },
                {
                    name: "Jane",
                    data: [2, -2, -3, 2, 1],
                    type: "column"
                },
                {
                    name: "Joe",
                    data: [3, 4, 4, -2, 5],
                    type: "column"
                }
            ]
        };
        return (
            <div>
                <HighchartsReact
                    ref="highCharts"
                    highcharts={Highcharts}
                    options={options}
                />
                <button onClick={this.onClick}>Line</button>
                <button onClick={this.onClickBar}>Bar</button>
            </div>
        );
    }
}
export default Chart;
