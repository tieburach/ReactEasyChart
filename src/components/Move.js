import React, {Component} from 'react';

export default class Move extends Component {

    constructor(props){
        super(props);
        this.highCharts = props.highCharts;
    }

    render() {
        return (
            <div>
                <button id = "topButton" className="btn-block" onClick={this.props.moveTop}>
                    Top
                </button>
                <button className="moveButtons" onClick={this.props.moveBottom}>
                    Bottom
                </button>
                <button className="moveButtons" onClick={this.props.moveLeft}>
                    Left
                </button>
                <button className="moveButtons" onClick={this.props.moveRight}>
                    Right
                </button>
            </div>
        );
    }
}