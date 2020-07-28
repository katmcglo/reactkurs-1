import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';


class App extends Component {
  state = {
    users: [
    { username: 'Lakelynn'},
    { username: 'harry'},
    { username: 'Lorelai'}
    ]
  }

  changeNameHandler = (event) => {
    this.setState(
      {
        users: [
          { username: event.target.value },
          { username: event.target.value },
          { username: event.target.value }
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <UserOutput 
        username={this.state.users[0].username}
         />
        <UserOutput 
        username={this.state.users[1].username}
        />
        <UserOutput 
        username={this.state.users[2].username}
        />
        <UserInput 
          changed={this.changeNameHandler}
          currentName={this.state.users[1]username}
        />
      </div>
    );
  }
}

export default App;
