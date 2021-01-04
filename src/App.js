import React from 'react';
import './App.css';
// import main from './Main.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        mainMessage: 'Hola Mundo',
        extraKey: "extra value",
    }
    this.frenchClicked = this.frenchClicked.bind(this);
  }

  frenchClicked() {
    this.setState({
      mainMessage: "Bonjour",
    });
  }

  render() {
      return (
        <div className="App">
        <Header />
        <Main message={this.state.mainMessage} title="lovin it" />
        <button onClick={this.frenchClicked}>French</button>
        <Footer description="this is the footers description"/>
        <Extra text={this.state.mainMessage} />
        </div>
      )
  }

}

function Header(){
  return(
    <nav>
        <h3>Header Coming Soon</h3>
    </nav>  
  )
}

function Main(props){
  return(
    <>
      <h1>React Is Saucy</h1>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </>
  )
}

function Extra(props){
  return (props.text)
}

function Footer(props){
  return(
      <footer>
        <h3>Footer Coming Soon</h3>
        <p>{props.description}</p>
      </footer>
  )
}

export default App;
