import React, {Component} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Data from "./../Data";
import Menu from "./Menu";
import ReactModal from 'react-modal';

const seriesAmount = 3;

const options = {
    title: {
        text: "Wykres"
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

        this.state = {
            showModalChangeTitle: false,
            showModalChangeColors: false
        };

        this.title = 'Wykres';
        this.serie1color = 'black';
        this.serie2color = 'black';
        this.serie3color = 'black';
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
    }

    handleChangeOfTitle(event) {
        this.title = event.target.value;
    }


    //tu trzeba zrobic jakies dynamiczne a nie takie gowno
    handleChangeOfColors1(event){
        this.serie1color = event.target.value;
    }

    handleChangeOfColors2(event){
        this.serie2color = event.target.value;
    }

    handleChangeOfColors3(event){
        this.serie3color = event.target.value;
    }

    handleOpenModalChangeTitle() {
        this.setState({showModalChangeTitle: true});
    }

    handleCloseModalChangeTitle() {
        this.setState({showModalChangeTitle: false});
        this.highCharts.current.chart.setTitle({text: this.title});
    }


    changeChartName() {
        this.handleOpenModalChangeTitle();
    }

    changeChartColors() {
        this.handleOpenModalChangeColors();
    }

    handleOpenModalChangeColors() {
        this.setState({showModalChangeColors: true});
    }

    handleCloseModalChangeColors() {
        this.highCharts.current.chart.series[0].update({color: this.serie1color});
        this.highCharts.current.chart.series[1].update({color: this.serie2color});
        this.highCharts.current.chart.series[2].update({color: this.serie3color});
        this.setState({showModalChangeColors: false});
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
                        <button className="btn btn-success" onClick={this.handleCloseModalChangeTitle}>Zatwierdź
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
                        <button className="btn btn-success" onClick={this.handleCloseModalChangeColors}>Zatwierdź
                        </button>
                    </div>
                </ReactModal>
                {/*Koniec modalu do zmiany kolorow*/}


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
                />
                {/*Koniec diva ze sticker*/}
            </div>
        );
    }
}

