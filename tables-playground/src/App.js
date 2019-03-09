import React, { Component } from 'react';
import logo from './logo.svg';
import ReactTable from 'react-table'
import "react-table/react-table.css"
import './App.css';
import TableWithButtonInside from './components/TableWithButton';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TableWithButtonInside />        
      </div>
    );
  }
}

export default App;
