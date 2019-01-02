import React, {Component} from 'react';

export default class Menu extends Component {

    constructor(props){
        super(props);
        this.highCharts = props.highCharts;
    }

    render() {
        return (
            <div className="App-menu">
                <nav className="d-none d-md-block sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <h4 className="align-items-center mt-2">
                                <span>Dane</span>
                            </h4>
                            <li className="nav-item">
                                <button className="btn-block btn-success p-1 margins"
                                        onClick={this.props.onClickChangeData}>Załaduj
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn-block btn-success p-1 margins">Zapisz</button>
                            </li>

                            <h4 className="align-items-center mt-2">
                                <span>Typ wykresu</span>
                            </h4>
                            <li className="nav-item">
                                <button className="btn-block btn-success p-1 margins"
                                        onClick={this.props.onClickLine}>Liniowy
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn-block btn-success p-1 margins"
                                        onClick={this.props.onClickPie}>Kołowy
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn-block btn-success p-1 margins"
                                        onClick={this.props.onClickPoint}>Punktowy
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn-block btn-success p-1 margins"
                                        onClick={this.props.onClickBarVertical}>Słupkowy poziomy
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn-block btn-success p-1 margins"
                                        onClick={this.props.onClickBarHorizontal}>Słupkowy pionowy
                                </button>
                            </li>
                            <h4 className="align-items-center mt-2">
                                <span>Operacje</span>
                            </h4>
                            <li className="nav-item">
                                <button className="btn-block btn-success p-1 margins">Dodaj dane
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn-block btn-success p-1 margins"
                                        onClick={this.props.changeChartName}>Zmień tytuł wykresu
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn-block btn-success p-1 margins"
                                        onClick={this.props.changeChartColors}>Zmień kolory
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
