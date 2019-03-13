import React, { Component } from 'react';
import "react-table/react-table.css"
import './App.css';
import TableWithButtonInside from './components/TableWithButton';
import 'bootstrap/dist/css/bootstrap.css'
import ResizableDiv from './components/theBigProblem';
// import ComplexTable from './components/complexTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TableWithButtonInside /> 
        {/* <ComplexTable />  */}
        <ResizableDiv />
      </div>
    );
  }
}

export default App;
