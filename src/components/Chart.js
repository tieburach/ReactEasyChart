import React, {Component} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Data from "./../Data";
import Menu from "./Menu";


const seriesAmount = 3;

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

export default class Chart extends Component {

    constructor(props) {
        super(props);
        // nie znalazlem lepszej opcji do przekazywania metod do child niz to
        this.onClickPie = this.onClickPie.bind(this);
        this.onClickBarHorizontal = this.onClickBarHorizontal.bind(this);
        this.onClickBarVertical = this.onClickBarVertical.bind(this);
        this.changeChartName = this.changeChartName.bind(this);
        this.onClickPoint = this.onClickPoint.bind(this);
        this.onClickLine = this.onClickLine.bind(this);
        this.highCharts = React.createRef();
    }

    changeChartName() {
        this.highCharts.current.chart.setTitle({text: "nowy tytul"});
        // const element = <div>
        //     <form onSubmit={this.handleSubmit}><input ref="inputText"/> <input type="submit"
        //                                                                        onClick={this.highCharts.current.chart.setTitle({text: this.refs.inputText.getDOMNode().value})}/>
        //     </form>
        // </div>
        // ReactDOM.render(element, document.getElementById('root'));
    }

    onClickLine() {
        for (let i = 0; i < seriesAmount; i++) {
            this.highCharts.current.chart.series[i].update({type: "line"})
        }
    };

    onClickBarHorizontal() {
        for (let i = 0; i < seriesAmount; i++) {
            this.highCharts.current.chart.series[i].update({type: "bar"})
        }
    };

    onClickPie() {
        for (let i = 0; i < seriesAmount; i++) {
            this.highCharts.current.chart.series[i].update({type: "pie"})
        }
    };

    onClickPoint() {
        for (let i = 0; i < seriesAmount; i++) {
            this.highCharts.current.chart.series[i].update({type: "scatter"})
        }
    };

    onClickBarVertical() {
        for (let i = 0; i < seriesAmount; i++) {
            this.highCharts.current.chart.series[i].update({type: "column"})
        }
    };

    onClickChangeData = () => {
        Data.changeDataCategories(["Gowno", "Jakies", "Pears", "Grapes", "Bananas"]);
        Data.changeDataSeries(Data.dataSeries2);
        this.highCharts.current.chart.xAxis[0].setCategories(Data.dataCategories);
        for (let i = 0; i < seriesAmount; i++) {
            this.highCharts.current.chart.series[i].setData(Data.dataSeries[i].data);
            this.highCharts.current.chart.series[i].setName(Data.dataSeries[i].name);
        }
    };

    render() {
        return (
            <div>
                <div className="Main-div">
                    <HighchartsReact
                        ref={this.highCharts}
                        highcharts={Highcharts}
                        options={options}
                    />
                </div>
                <Menu
                    onClickPoint={this.onClickPoint}
                    onClickPie={this.onClickPie}
                    changeChartName={this.changeChartName}
                    onClickBarHorizontal={this.onClickBarHorizontal}
                    onClickBarVertical={this.onClickBarVertical}
                    onClickLine={this.onClickLine}
                    onClickChangeData={this.onClickChangeData}
                />
            </div>
        );
    }
}