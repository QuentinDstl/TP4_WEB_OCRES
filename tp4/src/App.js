import React from 'react';
import './App.css';
import data from './Users.json'

var user_nb = 0;

function changeUser(id) {
  console.log("test");
  user_nb = id;
}


class User extends React.Component {
  render() {
    return (
      <button className="User" onClick={changeUser(this.value)}>
        {data[this.props.value].name}
      </button>
    )
  }
}

class Content extends React.Component {
  render() {
    return (
      <section className="Content">
        <img src={data[this.props.value].picture} alt="pp"></img>
        {data[this.props.value].picture}
      </section>
    )
  }
}

function App() { 
  return (
    <main className="App">
      <div></div>
      <div></div>
      <header className="App-header">
        <User value={0}/>
        <User value={1}/>
        <User value={2}/>
      </header>
      <div></div>
      <Content value={user_nb}/>
    </main>
  );
}

export default App;
