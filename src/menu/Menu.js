import React, {Component} from "react";
import '../css/bootstrap.min.css';
import './Menu.css';

class Menu extends Component{

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
                                    <a className="nav-link" href="#">Załaduj</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Zapisz</a>
                                </li>

                                <h4 className="align-items-center mt-2">
                                    <span>Typ wykresu</span>
                                </h4>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Liniowy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Kołowy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Punktowy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Słupkowy poziomy</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Słupkowy pionowy</a>
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

