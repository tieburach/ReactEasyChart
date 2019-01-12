import React from "react";
import CSVReader from 'react-csv-reader'
import Data from "../containers/Data";

export default class CSVManager extends React.Component {

    constructor(props) {
        super(props);
        this.data = [];
    };

    onFileLoaded = (data) => {

        this.setState(this.data = data);
        for (let i in this.data) {
            let series = [];
            for (let j in this.data[i]) {
                series.push(parseInt("" + this.data[i][j]));
            }
            if (Data.dataSeries[i] != null)
                Data.dataSeries[i].data = series;
            else (Data.dataSeries.push({
                name: parseInt(i)+1,
                data: series,
                type: "column",
            },))
        }
        this.props.reloadDataSeries();
    };


    render() {
        return (
            <div className="csvUpload">
                <CSVReader
                    className="btn-block btn-success margins csvUploadButton"
                    id={"csvka"}
                    onFileLoaded={this.onFileLoaded}
                    inputStyle={{color: "var(--third-color)"}}
                />
            </div>
        );
    }
}