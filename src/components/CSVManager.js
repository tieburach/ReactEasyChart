import React from "react";
import {CSVLink} from "react-csv";
import CSVReader from 'react-csv-reader'
import Data from "../containers/Data";
export default class CSVManager extends React.Component {

    constructor(props) {
        super(props);
        this.data = [];
    };

    onFileLoaded= (data) => {
        let first =[];
        let second =[];
        let third=[];

        this.setState(this.data = data);
        for(let i in this.data){
            /*
            for(let j in this.data) {
                console.log("I" + i + "J" + j + " " + parseInt("" + this.data[i][j]));
            }*/
            first[i]=parseInt("" + this.data[i][0]);
            second[i]=parseInt("" + this.data[i][1]);
            third[i]=parseInt(""+ this.data[i][2]);
        }

        Data.dataSeries[0].data = first;
        Data.dataSeries[1].data = second;
        Data.dataSeries[2].data = third;
        this.props.reloadDataSeries();
    };

    render() {
        return (
            <div className="Main-div">
                <CSVReader
                    id={"csvka"}
                    cssClass="csv-input"
                    label="Elo mordo"
                    onFileLoaded={this.onFileLoaded}
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