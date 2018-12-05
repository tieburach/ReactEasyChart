import React, {Component} from 'react';
import logo from './logo.jpg';
import { CSVLink } from "react-csv";
import './App.css';
import ReactDOM from 'react-dom'
import CSVReader from 'react-csv-reader'

class App extends Component {

    render() {
        var csvData = [];
        return (
            <div className={"App"}>
                <header className={"App-header"}>
                    <img src={logo} className={"App-logo"} alt={"logo"}/>
                    <p>
                        To bedzie nasz projekcik z reacta.
                    </p>
                </header>
                <div className={"App-menu"}>
                    <p>Napis w menu</p>
                    <CSVReader
                        id={"csvka"}
                        cssClass="csv-input"
                        label="Elo mordo"
                        onFileLoaded={csvData.push([this.props])}
                        onError={this.handleDarkSideForce}
                        inputId="ObiWan"
                        inputStyle={{color: 'red'}}
                    />
                    <CSVLink data={csvData}
                             separator={";"}
                             filename={"my-file.csv"}>
                        Download me
                    </CSVLink>;
                </div>
                <div className="Main-div">
                    <p>Napis w main</p>
                </div>
            </div>
        );
    }
}

export default App;
