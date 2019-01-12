import React, {Component} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Data from "../containers/Data";
import Menu from "./Menu";
import ReactModal from 'react-modal';
import DataPicker from './DataPicker';
import Move from "./Move";

require("highcharts/modules/annotations")(Highcharts);

const options = {
    title: {
        text: "Wykres"
    },
    chart: {
        height: 450,
        width: 1200
    },
    xAxis: {
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

const newAnnotations = {
    id: 'annotation1',
    labels: [{
        point: {x: 0, y: 0}, text: 'Wskaznik'
    }]
};


let legend = [];
let colors = [];

export default class Chart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModalChangeTitle: false,
            showModalChangeColors: false,
            showModalChangeLegend: false,
            showModalChangeEtiquettes: false,
            showModalAddPointer: false,
            showModalAddData: false,
            marginTop: 0,
            marginLeft: 0,
            legend: legend,
            colors: colors,
            title: "Wykres",
            axisXEtiquette : "Value",
            axisYEtiquette : "Value",
            axisXPointer: 100,
            axisYPointer: 100,
            pointerTitle : "Wskaznik",
            type: "bar"
        };
        this.highCharts = React.createRef();
        this.history = [];

        this.onClickPie = this.onClickPie.bind(this);
        this.onClickBarHorizontal = this.onClickBarHorizontal.bind(this);
        this.onClickBarVertical = this.onClickBarVertical.bind(this);
        this.changeChartName = this.changeChartName.bind(this);
        this.onClickPoint = this.onClickPoint.bind(this);
        this.onClickLine = this.onClickLine.bind(this);
        this.handleOpenModalChangeTitle = this.handleOpenModalChangeTitle.bind(this);
        this.handleCloseModalChangeTitle = this.handleCloseModalChangeTitle.bind(this);
        this.handleChangeOfTitle = this.handleChangeOfTitle.bind(this);
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
        this.handleOpenModalAddData = this.handleOpenModalAddData.bind(this);
        this.handleCloseModalAddData = this.handleCloseModalAddData.bind(this);
        this.moveTop = this.moveTop.bind(this);
        this.moveBottom = this.moveBottom.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.reloadDataSeries = this.reloadDataSeries.bind(this);
        this.renderColors = this.renderColors.bind(this);
        this.handleChangeOfColors = this.handleChangeOfColors.bind(this);
        this.handleChangeOfLegend = this.handleChangeOfLegend.bind(this);
        this.addPointer = this.addPointer.bind(this);
        this.handleChangeOfYPointer = this.handleChangeOfYPointer.bind(this);
        this.handleChangeOfXPointer = this.handleChangeOfXPointer.bind(this);
        this.handleCloseModalAddPointer = this.handleCloseModalAddPointer.bind(this);
        this.handleChangeOfPointerTitle = this.handleChangeOfPointerTitle.bind(this);
        this.undoAction = this.undoAction.bind(this);
    }

    componentDidMount(){
        for (let i = 0; i < Data.dataSeries.length; i++) {
            legend.push(Data.dataSeries[i].name);
            colors.push(Data.dataSeries[i].color);
        }
        this.setState({legend: legend});
        this.setState({colors: colors});
        this.history.push(this.state);
    }

    reloadDataSeries() {
        if (this.highCharts.current.chart.series.length < Data.dataSeries.length)
            this.highCharts.current.chart.addSeries(Data.dataSeries[Data.dataSeries.length - 1]);
        this.highCharts.current.chart.update({series: Data.dataSeries})

    }

    moveTop = () => {
        const top = this.state.marginTop;
        const y = top - 100;
        this.history.push(this.state);
        this.setState({marginTop: y});
        this.highCharts.current.chart.update({chart: {style: {'position': 'absolute'}}});
        this.highCharts.current.chart.update({chart: {style: {'top': this.state.marginTop}}});
    };


    moveLeft = () => {
        const left = this.state.marginLeft;
        const z = left - 100;
        this.history.push(this.state);
        this.setState({marginLeft: z});
        this.highCharts.current.chart.update({chart: {style: {'position': 'absolute'}}});
        this.highCharts.current.chart.update({chart: {style: {'left': this.state.marginLeft}}});
    };

    moveBottom = () => {
        const top = this.state.marginTop;
        const y = top + 100;
        this.history.push(this.state);
        this.setState({
            marginTop: y
        });
        this.highCharts.current.chart.update({chart: {style: {'position': 'absolute'}}});
        this.highCharts.current.chart.update({chart: {style: {'top': this.state.marginTop}}});
    };

    moveRight = () => {
        const left = this.state.marginLeft;
        const z = left + 100;
        this.history.push(this.state);
        this.setState({marginLeft: z});
        this.highCharts.current.chart.update({chart: {style: {'position': 'absolute'}}});
        this.highCharts.current.chart.update({chart: {style: {'left': this.state.marginLeft}}});
    };

    handleChangeOfTitle(event) {
        this.history.push(this.state);
        this.setState({title: event.target.value});
        this.highCharts.current.chart.setTitle({text: event.target.value});
    }

    handleChangeOfAxisXEtiquette(event) {
        this.history.push(this.state);
        this.setState({axisXEtiquette: event.target.value});
        this.highCharts.current.chart.update({xAxis: {title: {text: event.target.value}}});
    }

    handleChangeOfAxisYEtiquette(event) {
        this.history.push(this.state);
        this.setState({axisYEtiquette: event.target.value});
        this.highCharts.current.chart.update({yAxis: {title: {text: event.target.value}}});
    }

    onClickLine() {
        this.history.push(this.state);
        this.setState({type: "line"});
        for (let i = 0; i < Data.dataSeries.length; i++) {
            this.highCharts.current.chart.series[i].update({type: "line"});
            Data.dataSeries[i].type = "line";
        }
    };

    onClickBarHorizontal() {
        for (let i = 0; i < Data.dataSeries.length; i++) {
            this.highCharts.current.chart.series[i].update({type: "bar"});
            Data.dataSeries[i].type = "bar";
        }
        this.highCharts.current.chart.update({plotOptions: {series: {stacking: 'normal'}}});
    };

    onClickPie() {
        this.history.push(this.state);
        this.setState({type: "pie"});
        for (let i = 0; i < Data.dataSeries.length; i++) {
            this.highCharts.current.chart.series[i].update({type: "pie"});
            Data.dataSeries[i].type = "pie";
        }
    };

    onClickPoint() {
        this.history.push(this.state);
        this.setState({type: "scatter"});
        for (let i = 0; i < Data.dataSeries.length; i++) {
            this.highCharts.current.chart.series[i].update({type: "scatter"});
            Data.dataSeries[i].type = "scatter";
        }
    };

    onClickBarVertical() {
        this.history.push(this.state);
        this.setState({type: "bar"});
        this.highCharts.current.chart.update({plotOptions: {series: {stacking: undefined}}});
        for (let i = 0; i < Data.dataSeries.length; i++) {
            this.highCharts.current.chart.series[i].update({type: "bar"});
            Data.dataSeries[i].type = "bar";
        }
    };

    onClickChangeData = () => {
        for (let i = 0; i < Data.dataSeries.length; i++) {
            this.highCharts.current.chart.series[i].setData(Data.dataSeries[i].data);
            this.highCharts.current.chart.series[i].setName(Data.dataSeries[i].name);
        }
    };

    handleChangeOfColors = (i, event) => {
        Data.dataSeries[i].color = event.target.value;
        colors[i] = event.target.value;
        this.history.push(this.state);
        this.setState({
            colors: colors
        });
        this.highCharts.current.chart.series[i].update({color: event.target.value});
    };

    handleChangeOfLegend = (i, event) => {
        Data.dataSeries[i].name = event.target.value;
        legend[i] = event.target.value;
        this.setState({
            legend: legend
        });
        this.highCharts.current.chart.series[i].update({name: event.target.value});
    };

    renderColors = () => {
        const tableColors = [];
        for (let i = 0; i < Data.dataSeries.length; i++) {
            tableColors.push(<div><input type="color" value={this.state.colors[i]}
                                         onChange={(e) => this.handleChangeOfColors(i, e)}/><h3
                className="modalText">{Data.dataSeries[i].name}</h3></div>);
        }
        return tableColors;
    };

    renderLegend = () => {
        const tableLegend = [];
        for (let i = 0; i < Data.dataSeries.length; i++) {
            tableLegend.push(<label><h3 className="modalText">{i + 1} etykieta legendy:</h3><input type="text"
                                                                                                   value={this.state.legend[i]} onChange={(e) => this.handleChangeOfLegend(i, e)}/></label>);
        }
        return tableLegend;
    };

    addPointer = () => {
        this.history.push(this.state);
        this.setState({showModalAddPointer: true});
        this.highCharts.current.chart.addAnnotation(newAnnotations);
    };

    handleChangeOfYPointer(event) {
        this.setState({axisYPointer : event.target.value});
        this.highCharts.current.chart.removeAnnotation('annotation1');
        newAnnotations.labels[0].point.y = parseInt(event.target.value);
        this.highCharts.current.chart.addAnnotation(newAnnotations);

    }

    handleChangeOfXPointer(event) {
        this.setState({axisXPointer: event.target.value});
        this.highCharts.current.chart.removeAnnotation('annotation1');
        newAnnotations.labels[0].point.x = parseInt(event.target.value);
        this.highCharts.current.chart.addAnnotation(newAnnotations);
    }

    handleChangeOfPointerTitle(event) {
        this.history.push(this.state);
        this.setState({pointerTitle: event.target.value});
        this.highCharts.current.chart.removeAnnotation('annotation1');
        newAnnotations.labels[0].text = this.state.pointerTitle;
        this.highCharts.current.chart.addAnnotation(newAnnotations);
    }

    handleCloseModalAddPointer() {
        this.history.push(this.state);
        this.setState({showModalAddPointer: false});
    }

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
                        {
                            this.renderColors()
                        }
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
                    {
                        this.renderLegend()
                    }
                    <div>
                        <button className="btn btn-success" onClick={this.handleCloseModalChangeChartLegend}>Zamknij
                        </button>
                    </div>
                </ReactModal>
                {/*Koniec modalu do zmiany legendy/}


                {/*To modal do tworzenia pointer*/}
                <ReactModal
                    isOpen={this.state.showModalAddPointer}
                    className="ModalEtiquettes"
                    overlayClassName="Overlay">
                    <label>
                        <h3 className="modalText">Współrzędne X:</h3>
                        <input type="text" value={this.state.axisXPointer} onChange={this.handleChangeOfXPointer}/>
                    </label>
                    <label>
                        <h3 className="modalText">Współrzędne Y:</h3>
                        <input type="text" value={this.state.axisYPointer} onChange={this.handleChangeOfYPointer}/>
                    </label>
                    <label>
                        <h3 className="modalText">Tekst wskaźnika:</h3>
                        <input type="text" value={this.state.pointerTitle} onChange={this.handleChangeOfPointerTitle}/>
                    </label>
                    <div>
                        <button className="btn btn-success" onClick={this.handleCloseModalAddPointer}>Zamknij
                        </button>
                    </div>
                </ReactModal>
                {/*Koniec modalu do zmiany etykiet*/}


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
                    reloadDataSeries={this.reloadDataSeries}
                    addPointer={this.addPointer}
                />
                <Move
                    moveTop={this.moveTop}
                    moveLeft={this.moveLeft}
                    moveBottom={this.moveBottom}
                    moveRight={this.moveRight}
                />
                <button className="undoButton" onClick={this.undoAction}/>
            </div>
        );
    }

    undoAction() {
        let state = this.history[this.history.length - 1];
        this.history.pop();
        if (this.state != null) {
            this.setState(state);
            this.highCharts.current.chart.update({chart: {style: {'left': this.state.marginLeft}}});
            this.highCharts.current.chart.update({chart: {style: {'top': this.state.marginTop}}});
            this.highCharts.current.chart.setTitle({text: this.state.title});
            for (let i = 0; i < Data.dataSeries.length; i++) {
                this.highCharts.current.chart.series[i].update({type: this.state.type});
                this.highCharts.current.chart.series[i].update({color: this.state.colors[i]});
                this.highCharts.current.chart.series[i].update({name: this.state.legend[i]});
            }
        }
    }


    handleOpenModalChangeTitle() {
        this.history.push(this.state);
        this.setState({showModalChangeTitle: true});
    }

    handleCloseModalChangeTitle() {
        this.history.push(this.state);
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
        console.log(this.history);
        this.history.push(this.state);
        this.setState({showModalChangeLegend: false});
        console.log(this.history);
    }


    handleOpenModalChangeEtiquettes() {
        this.history.push(this.state);
        this.setState({showModalChangeEtiquettes: true});
    }

    handleCloseModalChangeEtiquettes() {
        this.history.push(this.state);
        this.setState({showModalChangeEtiquettes: false});
    }

    handleOpenModalChangeColors() {
        this.history.push(this.state);
        this.setState({showModalChangeColors: true});
    }

    handleCloseModalChangeColors() {
        this.history.push(this.state);
        this.setState({showModalChangeColors: false})
    }

    handleOpenModalAddData() {
        this.history.push(this.state);
        this.setState({showModalAddData: true});
    }

    handleCloseModalAddData() {
        this.history.push(this.state);
        this.setState({showModalAddData: false});
    }
}