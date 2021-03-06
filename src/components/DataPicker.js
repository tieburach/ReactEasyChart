import React from "react";
import ReactDataGrid from "react-data-grid";
import Data from "../containers/Data";

let rows = [
    {John: 5, Joe: 3, Jane: 2},
    {John: 3, Joe: 4, Jane: -2},
    {John: 4, Joe: 4, Jane: -3},
    {John: 7, Joe: -2, Jane: 2},
    {John: 2, Joe: 5, Jane: 1}
];

let columns = [
    {
        key: "John",
        name: "John",
        editable: true
    },
    {
        key: "Joe",
        name: "Joe",
        editable: true
    },
    {
        key: "Jane",
        name: "Jane",
        editable: true
    }
];


export default class DataPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: rows,
            columns: columns
        };

        this.rowGetter = this.rowGetter.bind(this);
        this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this);
        this.addNewRow = this.addNewRow.bind(this);
        this.addNewColumn = this.addNewColumn.bind(this);
    }

    rowGetter(i) {
        return this.state.rows[i];
    }

    handleGridRowsUpdated = ({fromRow, toRow, updated}) => {
        this.state.rows.slice();
        for (let i = fromRow; i <= toRow; i++) {
            rows[i] = {...rows[i], ...updated};
        }
        this.setState({rows: rows});

        const klucze = Object.keys(this.state.rows[0]);
        for (let j = 0; j < klucze.length; j++) {
            const table = [];
            let key = klucze[j];
            for (let i = 0; i < this.state.rows.length; i++) {
                const row = this.state.rows[i];
                table.push(parseInt(row[key]));
            }
            if (Data.dataSeries[j] != null) {
                Data.dataSeries[j].data = table;
            }
            else {
                Data.dataSeries.push({name: key, data: [], type: Data.dataSeries[0].type})
            }
        }
        this.props.reloadDataSeries();
    };


    addNewRow(ev) {
        ev.preventDefault();
        let newRows = this.state.rows.slice();

        newRows.push({
            id: this.state.columns.length,
        });
        rows = newRows;
        this.setState({rows: newRows});
    }

    addNewColumn(ev) {
        ev.preventDefault();
        let updatedColumns = this.state.columns.slice();
        columns.push({
            key: this.state.columns.length + 1,
            name: this.state.columns.length + 1,
            editable: true
        });
        updatedColumns.push({
            key: this.state.columns.length,
            name: "New column",
            editable: true
        });
        this.setState({
            columns: updatedColumns
        });
    }

    render() {
        return (<div className="emailRecipientsEditor">

            <div className="emailRecipientsEditor__newButton">
                <button onClick={this.addNewRow} className="btn btn-danger margins2">Add row</button>
                <button onClick={this.addNewColumn} className="btn btn-danger margins2">Add column</button>
            </div>

            <ReactDataGrid
                enableCellSelect={true}
                columns={this.state.columns}
                rowGetter={this.rowGetter}
                rowsCount={this.state.rows.length}
                minHeight={300}
                onGridRowsUpdated={this.handleGridRowsUpdated}
            />

        </div>);
    }


}
