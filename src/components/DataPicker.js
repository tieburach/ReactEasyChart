import React from "react";
import ReactDataGrid from "react-data-grid";


const rows = [
    { 1: 0, 2: 1, 3: 2 },
    { 1: 1, 2: 2, 3: 4 },
    { 1: 2, 2: 3, 3: 6 }
];

const columns = [
    {
        key: 1,
        name: 1,
        editable:true
    },
    {
        key: 2,
        name: 2,
        editable: true
    },
    {
        key: 3,
        name: 3,
        editable: true
    },
    {
        key: 4,
        name: 4,
        editable: true
    }
]


export default class DataPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows : rows,
            columns : columns
        };
        this.rowGetter = this.rowGetter.bind(this);
        this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this);
        this.addNewRow = this.addNewRow.bind(this);
        this.addNewColumn = this.addNewColumn.bind(this);
    }

    rowGetter(i) {
        return this.state.rows[i];
    }

    handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        this.setState(state => {
            const rows = state.rows.slice();
            for (let i = fromRow; i <= toRow; i++) {
                rows[i] = { ...rows[i], ...updated };
            }
            return { rows };
        });
    };

    addNewRow(ev) {
        ev.preventDefault();
        let rows = this.state.rows;

        rows.push({
            id : this.state.rows.length,
            recipient_name : '',
            recipient_email : '',
            subject_parameters : '',
            body_parameters : '',
            attachments : '',
        });
        this.setState({ rows : rows });
    }

    addNewColumn(ev) {
        console.log(this.state.columns);
        ev.preventDefault();
        let columns = this.state.columns;

        columns.push({
            key: this.state.rows.length + 1,
            name: this.state.rows.length + 1,
            editable: true
        });
        this.setState({ columns : columns });
        console.log(this.state.columns);
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
