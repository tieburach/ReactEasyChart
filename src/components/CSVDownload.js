import React from "react";
import {CSVLink} from "react-csv";
import Data from "../containers/Data";

export default class CSVDownload extends React.Component {

    constructor(props) {
        super(props);
        this.data = Data.dataSeries;
    };
    render() {
        return (
            <div>
                <CSVLink data={this.data}
                         className="btn-block btn-success margins csvDownload"
                         separator={";"}
                         filename={"my-file.csv"}>
                    Zapisz
                </CSVLink>
            </div>
        );
    }
}