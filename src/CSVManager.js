import React, {Component} from "react";
import {CSVLink} from "react-csv";
import CSVReader from 'react-csv-reader'
class CSVManager extends Component {

    render() {
        var data=[];
        return (
            <div className="Main-div">
                <CSVReader
                    id={"csvka"}
                    cssClass="csv-input"
                    label="Elo mordo"
                    onFileLoaded={data.push([this.props])}
                    onError={this.handleDarkSideForce}
                    inputId="ObiWan"
                    inputStyle={{color: 'red'}}
                />
                <CSVLink data={data}
                         separator={";"}
                         filename={"my-file.csv"}>
                    Download me
                </CSVLink>;
            </div>
        );
    }
}

export default CSVManager;