import React, {Component} from "react";
import '../css/bootstrap.min.css';
import '../css/Menu.css';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = {
            active: true,
        };
    }

    addActiveClass() {
        this.setState({
            isActive: true
        })
    }

    render() {
        return (
                <a className={this.state.active ? 'red' : null}
                        onClick={this.addActiveClass}>{this.props.text}</a>

        )
    }
}

class Menu extends Component {
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
                                    <MyComponent className="nav-link" text={"Załaduj"}/>
                                </li>
                                <li className="nav-item">
                                    <MyComponent className="nav-link" text={"Zapisz"}/>
                                </li>

                                <h4 className="align-items-center mt-2">
                                    <span>Typ wykresu</span>
                                </h4>
                                <li className="nav-item">
                                    <MyComponent className="nav-link" text={"Liniowy"}/>
                                </li>
                                <li className="nav-item">
                                    <MyComponent className="nav-link" text={"Kołowy"}/>
                                </li>
                                <li className="nav-item">
                                    <MyComponent className="nav-link" text={"Punktowy"}/>
                                </li>
                                <li className="nav-item">
                                    <MyComponent className="nav-link" text={"Słupkowy poziomy"}/>
                                </li>
                                <li className="nav-item">
                                    <MyComponent className="nav-link" text={"Słupkowy pionowy"}/>
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

