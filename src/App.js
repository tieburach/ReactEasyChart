import React, {Component} from 'react';
import './css/App.css';
import './css/bootstrap.min.css'
import Chart from './components/Chart';
import logo from "./resources/logo.PNG"

class App extends Component {
    constructor() {
        super();
        this.chart = new Chart();
    }
    render() {
        return (
            <div className={"App"}>
                <header className={"App-header"}>
                    <img src={logo} className={"App-logo"} alt={"logo"}/>
                </header>
                <div className="lesserDiv">
                    <Chart/>
                </div>
            </div>
        );
    }
}
export default App;