import React, {Component} from 'react';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className={"App"}>
                <header className={"App-header"}>
                    <img src={logo} className={"App-logo"} alt={"logo"}/>
                    <p>
                        To bedzie nasz projekcik z reacta.
                    </p>
                </header>
                <div className={"App-menu"}>
                    <p>Napis w menu</p>
                </div>

                <div className="Main-div">
                    <p>Napis w main</p>
                </div>
            </div>
        );
    }
}

export default App;
