import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './App.css';
import './UserOutput/UserOutput.css'

class App extends Component {
  state = {
    username: 'videogamedunkey'
  }

  userInputHandler = (event) => {
    this.setState({
        username: event.target.value
    })
  }

  render() {
    const style = {
      border: '1px solid #61dafb',
      boxShadow: '0 2px 3px #282c34'
    }

    return (
      <div className='App'>
        <UserOutput username='Sasquatch'/>
        <UserOutput username={this.state.username}/>
        <UserInput style={style} changed={this.userInputHandler} username={this.state.username}/>
      </div>
    );
  }
}

export default App;
