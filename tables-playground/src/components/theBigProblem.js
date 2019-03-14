import React, {Component} from 'react'
import {Table} from 'react-bootstrap'
import './artable.css'
let sizing={
    colSizes:[],
    minSize: 0.1,
    currentlySizing: false,
    startX: 0,
    initialFlex:0,
    flexNumber:1
}
// initial problem solved, the remaining is to redo the calculations
export default class TheResizeProblem extends Component{
    constructor(props){
        super(props)
        this.state ={
            minWidth: '1000px',
            sizing:{
                colSizes:[],
                minSize: 0.1,
                currentlySizing: false,
                startX: 0,
                parentWidth:0
            }
        }
    }
    handleResizeStart=(e)=>{
        e.stopPropagation()
        const parentWidth = e.target.parentElement.getBoundingClientRect().width
        let pageX = e.pageX
        console.log('width', parentWidth, pageX)
        document.addEventListener('mousemove', this.handleResizeMovement)
        document.addEventListener('mouseup', this.handleResizeStop)
        document.addEventListener('mouseleave', this.handleResizeStop)
        sizing ={...sizing, startX:pageX, parentWidth: parentWidth, resizing:true}
    }
    handleResizeMovement=(e)=>{
        console.log('being called')
        e.stopPropagation()
        const {startX, parentWidth} = sizing
        let pageX = e.pageX
        const newWidth = parentWidth?(parentWidth + pageX - startX)/parentWidth :1
        console.log('width new',pageX, startX, parentWidth, newWidth, sizing)
        sizing = {...sizing, flexNumber: newWidth, initialFlex: parentWidth}
        this.forceUpdate()
    }
    handleResizeStop=(e)=>{
        console.log('being called stop')
        e.stopPropagation()
        document.removeEventListener('mousemove', this.handleResizeMovement)
        document.removeEventListener('mouseup', this.handleResizeStop)
        document.removeEventListener('mouseleave', this.handleResizeStop)
        sizing ={
            ...sizing,
            resizing:false,
            parentWidth: 0,
            startX:0,
        }
        console.log('width mouse up')
    }
    render(){
        const {flexNumber, initialFlex} = sizing
        return (
            <div className='art-table'>
                <div className='ar-table' style={{minWidth: this.state.minWidth}}>
                    <div className='ar-thead' style={{minWidth: this.state.minWidth}}>
                            <div className='ar-tr'>
                                <div className='ar-resizable-header pointed ar-th' style={flexNumber?{flex: `${flexNumber} 0`}: {flex:`1 0`}}>
                                    <div className='ar-th-data'>fafa</div>
                                    <div className='ar-resizer' 
                                        onMouseDown={e=>this.handleResizeStart(e)}
                                        ></div>
                                </div>
                                <div className='ar-resizable-header pointed ar-th ar-th-1'>
                                    <div className='ar-th-data'>fafa</div>
                                    <div className='ar-resizer'></div>
                                </div>
                            </div>
                    </div>
                    <div className='ar-tbody' style={{minWidth: this.state.minWidth}}>
                        asdsadas
                    </div>
                </div>
            </div>
            )
    }
}
