import React from "react";
import ReactDataGrid from "react-data-grid";
import Data from "../Data";

const rows = [
    {John: 0, Joe: 1, Jane: 2, New: 1},
    {John: 0, Joe: 1, Jane: 2, New: 1},
    {John: 0, Joe: 1, Jane: 2, New: 1}
];

const columns = [
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
    },
    {
        key: "New",
        name: "New",
        editable: true
    }
]


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

        console.log(klucze.length)
        for (let j = 0; j < klucze.length; j++) {
            const table = [];
            let key = klucze[j];
            for (let i = 0; i < this.state.rows.length; i++) {
                const row = this.state.rows[i];
                table.push(parseInt(row[key]));
            }
            if (Data.dataSeries[j] != null)
                Data.dataSeries[j].data = table;
        }
        this.props.reloadDataSeries();
    };


    addNewRow(ev) {
        ev.preventDefault();
        let rows = this.state.rows;

        rows.push({
            id: this.state.rows.length,
            recipient_name: '',
            recipient_email: '',
            subject_parameters: '',
            body_parameters: '',
            attachments: '',
        });
        this.setState({rows: rows});
    }

    addNewColumn(ev) {
        ev.preventDefault();
        let columns = this.state.columns;

        columns.push({
            key: this.state.columns.length + 1,
            name: this.state.columns.length + 1,
            editable: true
        });
        this.setState({columns: columns});
    }


    render() {
        return (<div className="emailRecipientsEditor">

            <div className="emailRecipientsEditor__newButton">
                <button onClick={this.addNewRow} className="btn btn-default">Add row</button>
                <button onClick={this.addNewColumn} className="btn btn-default">Add column</button>
            </div>

            <ReactDataGrid
                enableCellSelect={true}
                columns={this.state.columns}
                rowGetter={this.rowGetter}
                rowsCount={this.state.rows.length}
                minHeight={400}
                onGridRowsUpdated={this.handleGridRowsUpdated}
            />

        </div>);
    }


}
