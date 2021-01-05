import React, { useImperativeHandle } from 'react';
import './App.css';

class App extends React.Component {

  render() {
      return (
        <div className="App">
        <Header title="ODOMETER"/>
        <Odometer />
        <Footer />
        </div>
      )
  }
}

function Header(props) {
  return (
      <nav>
          <h1>{props.title}</h1>
      </nav>
  )
}

class Odometer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      odometer : 0
    }
  }

  add_miles(miles) {
    this.setState({
      odometer : (this.state.odometer + miles) % 10000
    })
  }

  render() {
    return (
      <>
        <h2>{this.state.odometer.toString().padStart(4, "0")}</h2>
        <h3>Miles</h3>
        <button onClick={() => this.add_miles(1)}>+1</button>
        <button onClick={() => this.add_miles(10)}>+10</button>
        <button onClick={() => this.add_miles(100)}>+100</button>
        <button onClick={() => this.add_miles(1000)}>+1,000</button>
      </>
    )
  }
}

function Footer(props) {
  return (
      <footer>
        <div id="footer-div">
          <h4>{props.trademark}TM LEE THOMAS</h4>
        </div>
      </footer>
  )
}

export default App;
