import React from "react";
import ReactDataGrid from "react-data-grid";

const columns = [
    { key: "id", name: "ID", editable: true },
    { key: "title", name: "Title", editable: true },
    { key: "complete", name: "Complete", editable: true }
];

const rows = [
    { id: 0, title: "Task 1", complete: 20 },
    { id: 1, title: "Task 2", complete: 40 },
    { id: 2, title: "Task 3", complete: 60 }
];

export default class DataPicker extends React.Component {

    constructor(props){
        super(props);
        this.setState(
            this.rows = rows
        )
    }

    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        this.setState(() => {
            const rows = this.rows.slice();
            for (let i = fromRow; i <= toRow; i++) {
                rows[i] = { ...rows[i], ...updated };
            }
            console.log(this.rows);
            this.rows = rows;
            return { rows };
        });
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
