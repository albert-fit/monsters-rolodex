import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Albert", lastName: "Fit" },
      company: "TSS",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState((state, props) => {
                return {
                  name: {firstName: 'George', lastName: 'Baker'}
                }
              }, () => {
                //optional callback
                console.log(this.state);
              });
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
