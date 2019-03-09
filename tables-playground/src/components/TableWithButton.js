import React from 'react'
import ReactTable from 'react-table'


const columns = [{
    Header: 'First Name',
    accessor:'first'
  },
  {
    Header: 'Last Name',
    accessor:'last'
  },
  {
    Header: 'Alert',
    accessor:'alert'
  }
  ]
  
  const data = [
    {
      first: 'LBJ',
      last: 'i',
      alert:'who is the goat'
    },
    {
      first: 'Carl Malone',
      last: 'i',
      alert:'who is the goat'
    },
    {
      first: 'kareem Abdul Jabaal',
      last: 'i',
      alert:'who is the goat'
    },
    {
      first: 'MJ',
      last: 'i',
      alert:'who is the goat'
    },
  ]
  const getColumns = () => {
    return columns.map(
      (d, i) => {
          if(i !== 2) return {
            Header: d.Header,
            accessor: d.accessor
          }
          else return{
            Header: d.Header,
            id: `button-${i}`,
            accessor: d => <button onClick={()=> {alert(`${i} ${d.alert} - ${d.first}?`); console.log(d)}}>{d.alert}</button>
          }
      }
    )
  }
  
  const TableWithButtonInside = () =>{
    return (
      <ReactTable 
            columns={getColumns()}
            data={data}
            pageSize={data.length}
            showPagination={false}
          />
    )
  }

  export default TableWithButtonInside