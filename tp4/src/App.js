import React from 'react';
import './App.css';
import data from './Users.json'

class User extends React.Component {
  render() {
    return (
      <button className="User">
        {data[this.props.value].name}
      </button>
    )
  }
}

class Content extends React.Component {
  render() {
    return (
      <section className="Content">
        test
      </section>
    )
  }
}

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <User value={0}/>
        <User value={1}/>
        <User value={2}/>
      </header>
      <Content />
    </main>
  );
}

export default App;
