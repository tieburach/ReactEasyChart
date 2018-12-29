import React, {Component} from "react";
import '../css/bootstrap.min.css';
import '../css/Menu.css';
import Chart from "./Chart";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.chart = new Chart();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <h4 className="align-items-center mt-2">
                                    <span>Dane</span>
                                </h4>
                                <li className="nav-item">
                                    <button className="btn-block btn-success p-1 m-2" onClick={this.chart.onClickChangeData}>Załaduj</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn-block btn-success p-1 m-2">Zapisz</button>
                                </li>

                                <h4 className="align-items-center mt-2">
                                    <span>Typ wykresu</span>
                                </h4>
                                <li className="nav-item">
                                    <button className="btn-block btn-success p-1 m-2" onClick={this.chart.onClickLine}>Liniowy</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn-block btn-success p-1 m-2">Kołowy</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn-block btn-success p-1 m-2">Punktowy</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn-block btn-success p-1 m-2">Słupkowy poziomy</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn-block btn-success p-1 m-2" onClick={this.chart.onClickBar}>Słupkowy pionowy</button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        );
    }
}

export default Menu;

