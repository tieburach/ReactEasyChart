import React, {Component} from "react";
import {CSVLink} from "react-csv";
import CSVReader from 'react-csv-reader'
export default class CSVManager extends React.Component {

    constructor() {
        super();
        this.data = [];
    };

    recordHandler= (data) => {
        this.setState(this.data = data);
        console.log(this.data[0]);
    }

    render() {
        return (
            <div className="Main-div">
                <CSVReader
                    id={"csvka"}
                    cssClass="csv-input"
                    label="Elo mordo"
                    onFileLoaded={this.recordHandler}
                    inputStyle={{color: 'red'}}
                />
                <CSVLink data={this.data}
                         separator={";"}
                         filename={"my-file.csv"}>
                    Download me
                </CSVLink>;
            </div>
        );
    }
}