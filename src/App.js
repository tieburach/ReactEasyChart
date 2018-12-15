import React, {Component} from 'react';
import './css/App.css';
import Chart from './components/Chart';
import CSVManager from "./components/CSVManager";
import Menu from "./components/Menu";
import logo from "./resources/logo.PNG"

class Przycisk extends React.Component {
    constructor(props) {
        super(props);
        this.onPClicked = props.onPClicked;
    }

    onPrzyciskClicked(e) {
        console.log("Wcisnalem." + this);
        this.onPClicked(e);
    }

    render() {
        return (
            <button onClick={e => this.onPrzyciskClicked(e)}>Wciśnij mnie</button>
        );
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = this.getChartData();
    }

    componentWillMount(){
        this.getChartData();

    }

    getChartData() {
        this.setState({
            chartData: {
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        });
    }

    onClick = () => {
        this.setState({
            chartData: {
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            200,
                            200,
                            200,
                            200,
                            200,
                            200
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        });
    }


    render() {
        return (
            <div className={"App"}>
                <header className={"App-header"}>
                    <img src={logo} className={"App-logo"} alt={"logo"}/>
                </header>
                <div className={"App-menu"}>
                    <Menu/>
                    <Przycisk onPClicked={(e) => this.onClick(e)} />
                </div>
                <div className="Main-div" >
                    <Chart chartData={this.state.chartData}  legendPosition="bottom"/>
                </div>
                <CSVManager/>
            </div>
        );
    }
}
export default App;