import React, {Component} from 'react';
import logo from './resources/logo.PNG';
import Menu from "./menu/Menu";
import './css/App.css';
import CSVManager from "./CSVManager";


class App extends Component {

    render() {
        return (
            <div className={"App"}>
                <header className={"App-header"}>
                    <img src={logo} className={"App-logo"} alt={"logo"}/>
                </header>
                <div className={"App-menu"}>
                    <Menu/>
                </div>
                <div className="Main-div">
                    <CSVManager/>
                </div>
            </div>
        );
    }
}

export default App;
