import React, {Component} from 'react'
import {Table, FormCheck} from 'react-bootstrap'

const superHeader =['GOATS']
const headers = ['First', 'Last', 'Alert']
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
export default class  BootstrapSelectableCheckableTable extends Component{

    onSelectAll(){

    }
    onRowSelect(){

    }

    /**
     * return a JSX as table header row
     * @param {Array} columns - array of strings as Headers 
     * @param {boolean} isTitleHeader - boolean to indicate if it is a title header
     * @param {number} colSpan - colspan in bootstrap
     */

    generateHeader(columns, isTitleHeader, colSpan, clickFn){
        const newColumns = isTitleHeader? columns : ['', ...columns]
        const nullFunction = () => null
        return (
            <tr style={isTitleHeader? {textAlign: 'center'}: {}} onClick={isTitleHeader ? nullFunction : clickFn}>
                {
                    newColumns.map(
                        (d, i) => {
                            if(!isTitleHeader &&  i===0) return <th key={i}><FormCheck /></th>
                            return <th key={i} colSpan={isTitleHeader && colSpan? colSpan : 1}>{d}</th>
                        }
                    )
                }
            </tr>
        )
    }
    /**
     * return the table data in the corresponding cells
     * @param {Array} data - Array of json in the order of display
     * @param {function} clickFn - function to occur when a row is selected
     */
    generateRow(data, clickFn){
        const newData =['', ...Object.keys(data)]
        return newData.map(
            (d, i)=>{
                if(i === 0){
                    return <td key={i}><FormCheck onClick={clickFn}/></td>
                }
                return <td key={i}>{data[d]}</td>
            }
        )
    }
    generateRegularDataCells(data, clickFn){
        return data.map(
            (d, i) => <tr key={i} onClick={clickFn}>{this.generateRow(d)}</tr>
        )
    }
    render(){
        //dumb function
        const clickFn = () =>{console.log('clicked')}
        return(
            <Table hover>
                <thead className='thead-light'>
                    {
                        this.generateHeader(headers, false)
                    }
                    {
                        this.generateHeader(superHeader, true, headers.length +1)
                    }
                </thead>
                <tbody>
                    {
                        this.generateRegularDataCells(data, clickFn)
                    }
                </tbody>
                <thead>
                    {
                        this.generateHeader(superHeader, true, headers.length +1)
                    }
                </thead>
                <tbody>
                    {
                        this.generateRegularDataCells(data, clickFn)
                    }
                </tbody>
            </Table>
        )
    }
}
