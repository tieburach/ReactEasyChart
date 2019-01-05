import React, {Component} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Data from "./../Data";
import Menu from "./Menu";
import ReactModal from 'react-modal';
import DataPicker from './DataPicker';
import Move from "./Move";
import CSVManager from "./CSVManager";

const seriesAmount = 3;

const options = {
    title: {
        text: "Wykres"
    },
    chart: {
        height: 500,
        width: 700
    },
    xAxis: {
        categories: Data.dataCategories,
        title: {
            text: 'xAxis'
        }
    },
    yAxis: {
        title: {
            text: 'yAxis'
        }
    },
    credits: {
        enabled: false
    },
    series: Data.dataSeries
};

export default class Chart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModalChangeTitle: false,
            showModalChangeColors: false,
            showModalChangeLegend: false,
            showModalChangeEtiquettes: false,
            showModalAddData: false,
            marginTop: 100,
            marginLeft: 100
        };

        this.title = 'Wykres';
        this.serie1color = 'black';
        this.serie2color = 'black';
        this.serie3color = 'black';

        this.legend1 = '';
        this.legend2 = '';
        this.legend3 = '';

        this.axisXEtiquette = 'Value';
        this.axisYEtiquette = 'Value';
        this.highCharts = React.createRef();


        // nie znalazlem lepszej opcji do przekazywania metod do child niz to gowno tutaj
        this.onClickPie = this.onClickPie.bind(this);
        this.onClickBarHorizontal = this.onClickBarHorizontal.bind(this);
        this.onClickBarVertical = this.onClickBarVertical.bind(this);
        this.changeChartName = this.changeChartName.bind(this);
        this.onClickPoint = this.onClickPoint.bind(this);
        this.onClickLine = this.onClickLine.bind(this);
        this.handleOpenModalChangeTitle = this.handleOpenModalChangeTitle.bind(this);
        this.handleCloseModalChangeTitle = this.handleCloseModalChangeTitle.bind(this);
        this.handleChangeOfTitle = this.handleChangeOfTitle.bind(this);
        this.handleChangeOfColors1 = this.handleChangeOfColors1.bind(this);
        this.handleChangeOfColors2 = this.handleChangeOfColors2.bind(this);
        this.handleChangeOfColors3 = this.handleChangeOfColors3.bind(this);
        this.handleOpenModalChangeColors = this.handleOpenModalChangeColors.bind(this);
        this.handleCloseModalChangeColors = this.handleCloseModalChangeColors.bind(this);
        this.changeChartColors = this.changeChartColors.bind(this);
        this.handleOpenModalChangeChartLegend = this.handleOpenModalChangeChartLegend.bind(this);
        this.handleCloseModalChangeChartLegend = this.handleCloseModalChangeChartLegend.bind(this);
        this.changeChartLegend = this.changeChartLegend.bind(this);
        this.handleOpenModalChangeEtiquettes = this.handleOpenModalChangeEtiquettes.bind(this);
        this.handleCloseModalChangeEtiquettes = this.handleCloseModalChangeEtiquettes.bind(this);
        this.changeChartEtiquettes = this.changeChartEtiquettes.bind(this);
        this.handleChangeOfAxisXEtiquette = this.handleChangeOfAxisXEtiquette.bind(this);
        this.handleChangeOfAxisYEtiquette = this.handleChangeOfAxisYEtiquette.bind(this);
        this.handleChangeOfLegend1 = this.handleChangeOfLegend1.bind(this);
        this.handleChangeOfLegend2 = this.handleChangeOfLegend2.bind(this);
        this.handleChangeOfLegend3 = this.handleChangeOfLegend3.bind(this);
        this.handleOpenModalAddData = this.handleOpenModalAddData.bind(this);
        this.handleCloseModalAddData = this.handleCloseModalAddData.bind(this);
        this.moveTop = this.moveTop.bind(this);
        this.moveBottom = this.moveBottom.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.reloadDataSeries = this.reloadDataSeries.bind(this);
    }


    reloadDataSeries (){
        console.log("elo")
        console.log(Data.dataSeries)
        for (let i = 0; i < seriesAmount; i++) {
            this.highCharts.current.chart.series[i].setData(Data.dataSeries[i].data);
        }
    }


    moveTop = () => {
        var top = this.state.marginTop;
        var y = top - 100;
        this.setState({marginTop: y})
        this.highCharts.current.chart.update({chart: {style: {'position': 'absolute'}}});
        this.highCharts.current.chart.update({chart: {style: {'top': this.state.marginTop}}});
    }


    moveLeft = () => {
        console.log(this.state);
        var left = this.state.marginLeft;
        var z = left - 100;
        this.setState({marginLeft: z})
        this.highCharts.current.chart.update({chart: {style: {'position': 'absolute'}}});
        this.highCharts.current.chart.update({chart: {style: {'left': this.state.marginLeft}}});
    }

    moveBottom = () => {
        var top = this.state.marginTop;
        var y = top + 100;
        this.setState({
            marginTop: y
        })
        this.highCharts.current.chart.update({chart: {style: {'position': 'absolute'}}});
        this.highCharts.current.chart.update({chart: {style: {'top': this.state.marginTop}}});
    }

    moveRight = () => {
        var left = this.state.marginLeft;
        var z = left + 100;
        this.setState({marginLeft: z})
        this.highCharts.current.chart.update({chart: {style: {'position': 'absolute'}}});
        this.highCharts.current.chart.update({chart: {style: {'left': this.state.marginLeft}}});
    }

    handleChangeOfTitle(event) {
        this.title = event.target.value;
        this.highCharts.current.chart.setTitle({text: this.title});
    }

    //tu trzeba zrobic jakies dynamiczne a nie takie gowno
    handleChangeOfColors1(event) {
        this.serie1color = event.target.value;
        this.highCharts.current.chart.series[0].update({color: this.serie1color});
    }

    handleChangeOfColors2(event) {
        this.serie2color = event.target.value;
        this.highCharts.current.chart.series[1].update({color: this.serie2color});
    }

    handleChangeOfColors3(event) {
        this.serie3color = event.target.value;
        this.highCharts.current.chart.series[2].update({color: this.serie3color});
    }


    handleChangeOfLegend1(event) {
        this.legend1 = event.target.value;
        this.highCharts.current.chart.series[0].update({name: this.legend1});
    }


    handleChangeOfLegend2(event) {
        this.legend2 = event.target.value;
        this.highCharts.current.chart.series[1].update({name: this.legend2});
    }


    handleChangeOfLegend3(event) {
        this.legend3 = event.target.value;
        this.highCharts.current.chart.series[2].update({name: this.legend3});
    }

    handleOpenModalChangeTitle() {
        this.setState({showModalChangeTitle: true});
    }

    handleCloseModalChangeTitle() {
        this.setState({showModalChangeTitle: false});
    }

    changeChartName() {
        this.handleOpenModalChangeTitle();
    }

    changeChartColors() {
        this.handleOpenModalChangeColors();
    }

    changeChartLegend() {
        this.handleOpenModalChangeChartLegend();
    }

    changeChartEtiquettes() {
        this.handleOpenModalChangeEtiquettes();
    }

    handleOpenModalChangeChartLegend() {
        this.setState({showModalChangeLegend: true});
    }

    handleCloseModalChangeChartLegend() {
        this.setState({showModalChangeLegend: false});
    }


    handleOpenModalChangeEtiquettes() {
        this.setState({showModalChangeEtiquettes: true});
    }


    handleCloseModalChangeEtiquettes() {
        this.setState({showModalChangeEtiquettes: false});
    }

    handleChangeOfAxisXEtiquette(event) {
        this.axisXEtiquette = event.target.value;
        this.highCharts.current.chart.update({xAxis: {title: {text: this.axisXEtiquette}}});
    }

    handleChangeOfAxisYEtiquette(event) {
        this.axisYEtiquette = event.target.value;
        this.highCharts.current.chart.update({yAxis: {title: {text: this.axisYEtiquette}}});
    }

    handleOpenModalChangeColors() {
        this.setState({showModalChangeColors: true});
    }

    handleCloseModalChangeColors() {
        this.setState({showModalChangeColors: false});
    }

    handleOpenModalAddData() {
        this.setState({showModalAddData: true});
    }

    handleCloseModalAddData() {
        this.setState({showModalAddData: false});
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
        this.highCharts.current.chart.update({plotOptions: {series: {stacking: 'normal'}}});
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
        this.highCharts.current.chart.update({plotOptions: {series: {stacking: undefined}}});
        for (let i = 0; i < seriesAmount; i++) {
            this.highCharts.current.chart.series[i].update({type: "bar"})
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
                {/*To modal do zmiany danych*/}
                <ReactModal
                    isOpen={this.state.showModalAddData}
                    className="ModalData"
                    overlayClassName="Overlay">
                    <div className="DataGrid">
                        <DataPicker
                            reloadDataSeries={this.reloadDataSeries}
                        />
                    </div>
                    <div>
                        <button className="btn btn-success" onClick={this.handleCloseModalAddData}>Zamknij
                        </button>
                    </div>
                </ReactModal>
                {/*Koniec modalu do zmiany danych*/}


                {/*To modal do zmiany tytulu*/}
                <ReactModal
                    isOpen={this.state.showModalChangeTitle}
                    className="Modal"
                    overlayClassName="Overlay">
                    <label>
                        <h3 className="modalText">Nowy tytuł:</h3>
                        <input type="text" value={this.state.title} onChange={this.handleChangeOfTitle}/>
                    </label>
                    <div>
                        <button className="btn btn-success" onClick={this.handleCloseModalChangeTitle}>Zamknij
                        </button>
                    </div>
                </ReactModal>
                {/*Koniec modalu do zmiany tytulu*/}


                {/*To modal do zmiany kolorow*/}
                <ReactModal
                    isOpen={this.state.showModalChangeColors}
                    className="ModalColors"
                    overlayClassName="Overlay">
                    <h3 className="modalText">Zmień kolory:</h3>
                    <label>
                        <div>
                            <input type="color" value={this.state.serie1color} onChange={this.handleChangeOfColors1}/>
                            <h3 className="modalText">Seria 1</h3>
                        </div>
                        <div>
                            <input type="color" value={this.state.serie2color} onChange={this.handleChangeOfColors2}/>
                            <h3 className="modalText">Seria 2</h3>
                        </div>
                        <div>
                            <input type="color" value={this.state.serie3color} onChange={this.handleChangeOfColors3}/>
                            <h3 className="modalText">Seria 3</h3>
                        </div>
                    </label>
                    <div>
                        <button className="btn btn-success" onClick={this.handleCloseModalChangeColors}>Zamknij
                        </button>
                    </div>
                </ReactModal>
                {/*Koniec modalu do zmiany kolorow*/}


                {/*To modal do zmiany etykiet*/}
                <ReactModal
                    isOpen={this.state.showModalChangeEtiquettes}
                    className="ModalEtiquettes"
                    overlayClassName="Overlay">
                    <label>
                        <h3 className="modalText">Nowa etykieta osi X:</h3>
                        <input type="text" value={this.state.axisXEtiquette}
                               onChange={this.handleChangeOfAxisXEtiquette}/>
                    </label>
                    <label>
                        <h3 className="modalText">Nowa etykieta osi Y:</h3>
                        <input type="text" value={this.state.axisYEtiquette}
                               onChange={this.handleChangeOfAxisYEtiquette}/>
                    </label>
                    <div>
                        <button className="btn btn-success" onClick={this.handleCloseModalChangeEtiquettes}>Zamknij
                        </button>
                    </div>
                </ReactModal>
                {/*Koniec modalu do zmiany etykiet*/}


                {/*To modal do zmiany legendy*/}
                <ReactModal
                    isOpen={this.state.showModalChangeLegend}
                    className="ModalColors"
                    overlayClassName="Overlay">
                    <label>
                        <h3 className="modalText">Pierwsza etykieta legendy:</h3>
                        <input type="text" value={this.state.legend1}
                               onChange={this.handleChangeOfLegend1}/>
                    </label>
                    <label>
                        <h3 className="modalText">Druga etykieta legendy:</h3>
                        <input type="text" value={this.state.legend2}
                               onChange={this.handleChangeOfLegend2}/>
                    </label>
                    <label>
                        <h3 className="modalText">Trzecie etykieta legendy:</h3>
                        <input type="text" value={this.state.legend3}
                               onChange={this.handleChangeOfLegend3}/>
                    </label>
                    <div>
                        <button className="btn btn-success" onClick={this.handleCloseModalChangeChartLegend}>Zamknij
                        </button>
                    </div>
                </ReactModal>
                {/*Koniec modalu do zmiany legendy/}

                {/*Div z chartem*/}
                <div className="Main-div">
                    <HighchartsReact
                        ref={this.highCharts}
                        highcharts={Highcharts}
                        options={options}
                    />
                </div>
                {/*koniec diva z chartem*/}


                {/*Div ze sticker menu*/}
                <Menu
                    onClickPoint={this.onClickPoint}
                    onClickPie={this.onClickPie}
                    changeChartName={this.changeChartName}
                    onClickBarHorizontal={this.onClickBarHorizontal}
                    onClickBarVertical={this.onClickBarVertical}
                    onClickLine={this.onClickLine}
                    onClickChangeData={this.onClickChangeData}
                    changeChartColors={this.changeChartColors}
                    changeChartLegend={this.changeChartLegend}
                    changeChartEtiquettes={this.changeChartEtiquettes}
                    handleOpenModalAddData={this.handleOpenModalAddData}
                />
                <Move
                    moveTop={this.moveTop}
                    moveLeft={this.moveLeft}
                    moveBottom={this.moveBottom}
                    moveRight={this.moveRight}
                />
                <CSVManager

                />

                {/*Koniec diva ze sticker*/}
            </div>
        );
    }


}

