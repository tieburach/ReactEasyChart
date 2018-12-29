import React, {Component} from 'react';
import './css/App.css';
import Chart from './components/Chart';
import CSVManager from "./components/CSVManager";
import Menu from "./components/Menu";
import logo from "./resources/logo.PNG"

class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className={"App"}>
                <header className={"App-header"}>
                    <img src={logo} className={"App-logo"} alt={"logo"}/>
                </header>
                <div className={"App-menu"}>
                    <Menu/>
                </div>
                <div className="Main-div" >
                    <Chart/>
                </div>
            </div>
        );
    }
}
export default App;