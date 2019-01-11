import React, {Component} from 'react';

export default class Move extends Component {

    constructor(props){
        super(props);
        this.highCharts = props.highCharts;
    }

    render() {
        return (
            <div className="move-buttons">
                <button className = "top-button" onClick={this.props.moveTop}>

                </button>
                <button className="bottom-button" onClick={this.props.moveBottom}>

                </button>
                <button className="left-button" onClick={this.props.moveLeft}>

                </button>
                <button className="right-button" onClick={this.props.moveRight}>

                </button>
            </div>
        );
    }
}