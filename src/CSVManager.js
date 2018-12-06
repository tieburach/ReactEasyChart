import React, {Component} from "react";
import {CSVLink} from "react-csv";
import CSVReader from 'react-csv-reader'
var csvData = [];
class CSVManager extends Component {

    render() {
        return (
            <div className="Main-div">
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
        );
    }
}

export default CSVManager;