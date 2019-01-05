import React from "react";
import ReactDataGrid from "react-data-grid";
import Data from "../Data";

const columns = [
    { key: "first", name: "first", editable: true },
    { key: "second", name: "second", editable: true },
    { key: "third", name: "third", editable: true }
];

const rows = [
    { first: 0, second: 1, third: 2 },
    { first: 1, second: 2, third: 4 },
    { first: 2, second: 3, third: 6 }
];

export default class DataPicker extends React.Component {

    constructor(props){
        super(props);
        this.rows = rows;
    }

    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
            this.rows.slice();
            for (let i = fromRow; i <= toRow; i++) {
                rows[i] = { ...rows[i], ...updated };
            }
            this.setState(this.rows = rows);
            let first =[];
            let second =[];
            let third=[];
            for (let i =0; i<this.rows.length; i++ ){
                first[i] = parseInt("" +this.rows[i].first);
                second[i] = parseInt("" +this.rows[i].second);
                third[i] = parseInt("" +this.rows[i].third)
            }

            console.log(first)

            Data.dataSeries[0].data = first;
            Data.dataSeries[1].data = second;
            Data.dataSeries[2].data = third;
            this.props.reloadDataSeries();

    };

    render() {
        return (
            <ReactDataGrid
                columns={columns}
                rowGetter={i => rows[i]}
                rowsCount={3}
                onGridRowsUpdated={this.onGridRowsUpdated}
                enableCellSelect={true}
            />
        );
    }
}
