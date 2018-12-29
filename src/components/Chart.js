import React, {Component} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Data from "./../Data";

class Chart extends Component {
    constructor(props) {
        super(props);
    }

    seriesAmount = 3;

    onClick = () => {
        console.log(Data.dataCategories);
        console.log(Data.dataSeries);
        for (var i = 0; i < this.seriesAmount; i++) {
            this.refs.highCharts.chart.series[i].update({type: "line"})
        }
    };

    onClickBar = () => {
        for (var i = 0; i < this.seriesAmount; i++) {
            this.refs.highCharts.chart.series[i].update({type: "bar"})
        }
    };

    onClickChangeData = () =>  {
        Data.changeDataCategories(["Gowno", "Jakies", "Pears", "Grapes", "Bananas"]);
        Data.changeDataSeries(Data.dataSeries2);
        this.refs.highCharts.chart.xAxis[0].setCategories(Data.dataCategories);


        for (var i = 0; i < this.seriesAmount; i++){
            this.refs.highCharts.chart.series[i].setData(Data.dataSeries[i].data);
            this.refs.highCharts.chart.series[i].setName(Data.dataSeries[i].name);
        }

    };

    render() {
        const options = {
            title: {
                text: "Test"
            },
            xAxis: {
                categories: Data.dataCategories
            },
            credits: {
                enabled: false
            },
            series: Data.dataSeries
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
                <button onClick={this.onClickChangeData}>Zmien dane</button>
            </div>
        );
    }
}

export default Chart;
