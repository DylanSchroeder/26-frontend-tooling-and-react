import React from 'react';
import logo from './logo.svg';
import './App.css';
import faker from 'faker';
let cowsay = require ('cowsay') ;




class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: cowsay.say({
        text: 'Who am I?'
      }),
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleClick() {
    this.updateState(cowsay.say({
      text: 'My name is ' + faker.name.findName() + ' and I work for ' + faker.company.companyName(),
    }));
  }

  updateState(content) {
    this.setState({content});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <h2>Generate Cowsay Lorem</h2>
          <div className='container'>
            <div className = 'cow' id="content">
              <pre>{this.state.content}</pre>
            </div>
            <button onClick={this.handleClick}>click me</button>
          </div>

        </section>
      </div>
    );
  }
}

export default App;
