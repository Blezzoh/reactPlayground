import React, {Component} from 'react'
import './artable.css'
let sizing={
    colSizes:[],
    minSize: 0.1,
    currentlySizing: -1,
    startX: 0,
    flexNumber:0,
    initialFlex: 0
}
// calculatios done, next step: create a data structure for this
export default class TheResizeProblem extends Component{
    constructor(props){
        super(props)
        this.state ={
            minWidth: '1000px',
            data:['brdk', 'mane', 'zizou', 'goats'],
            other:['legend', 'African beast', 'power shot', 'didier'],
            sizing:{
                colSizes:[],
                minSize: 0.1,
                currentlySizing: false,
                startX: 0,
                parentWidth:0
            }
        }
    }
    componentWillMount(){
        const {data} =this.state
        if(data && data.length){
            const sizes = data.reduce(
                (accumulator)=>{
                    return [...accumulator, 0]
                }, []
            )
            sizing = {...sizing, colSizes:sizes}
        }
        console.log(sizing)
    }

    handleResizeStart=(e, i)=>{
        e.stopPropagation()
        const parentWidth = e.target.parentElement.getBoundingClientRect().width
        let pageX = e.pageX
        console.log('width', parentWidth, pageX, 'currently sizing', i)
        document.addEventListener('mousemove', this.handleResizeMovement)
        document.addEventListener('mouseup', this.handleResizeStop)
        document.addEventListener('mouseleave', this.handleResizeStop)
        sizing ={...sizing, startX:pageX, parentWidth: parentWidth, resizing:true, currentlySizing: i}
    }
    handleResizeMovement=(e)=>{
        console.log('being called')
        e.stopPropagation()
        const {startX, parentWidth} = sizing
        let sizes = sizing.colSizes
        let pageX = e.pageX
        const newWidth = (parentWidth + pageX - startX)
        sizes[sizing.currentlySizing] = newWidth
        console.log('width new',pageX, startX, parentWidth, newWidth, sizing)
        sizing = {...sizing, flexNumber: newWidth, colSizes: sizes}
        this.forceUpdate()// as sizing is neither a prop or a state value, it is not going to trigger the rendering ... thus forcing the update
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
            currentlySizing: -1,
            // parentWidth: 0,
            // startX:0,
        }
        console.log('width mouse up')
    }
    render(){
        const {colSizes} = sizing
        const {data, other} = this.state
        console.log('sizes', colSizes)
        return (
            <div className='art-table'>
                <div className='ar-table' >
                <div className='ar-thead'>
                            <div className='ar-tr'>
                                {
                                    data.map(
                                        (d, i)=> (
                                            <div className='ar-resizable-header pointed ar-th' style={colSizes[i]?{flex: `${colSizes[i]}px 0`}: {flex:`1 0`}} key={i}>
                                                <div className='ar-th-data'>{d}</div>
                                                <div className='ar-resizer' 
                                                    onMouseDown={e=>this.handleResizeStart(e, i)}
                                                />
                                            </div>
                                        )
                                    )
                                }
                            </div>
                            <div className='ar-thead'>
                                <div className='ar-tr ar-th-independent'>
                                    Open
                                </div>
                            </div>
                    </div>
                    <div className='ar-tbody' style={{minWidth: this.state.minWidth}}>
                        <div className='ar-tbody-group'>
                                <div className='ar-tr'>
                                    {
                                        other.map(
                                            (d,i)=>(
                                                <div className='ar-td' key={i} style={colSizes[i]?{flex: `${colSizes[i]}px 0`}: {flex:`1 0`}}>
                                                    {d}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                        </div>
                        <div className='ar-tbody-group'>
                                <div className='ar-tr'>
                                    {
                                        other.map(
                                            (d,i)=>(
                                                <div className='ar-td' key={i} style={colSizes[i]?{flex: `${colSizes[i]}px 0`}: {flex:`1 0`}}>
                                                    {d}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                        </div>
                        <div className='ar-tbody-group'>
                                <div className='ar-tr'>
                                    {
                                        other.map(
                                            (d,i)=>(
                                                <div className='ar-td' key={i} style={colSizes[i]?{flex: `${colSizes[i]}px 0`}: {flex:`1 0`}}>
                                                    {d}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                        </div>
                        <div className='ar-tbody-group'>
                                <div className='ar-tr'>
                                    {
                                        other.map(
                                            (d,i)=>(
                                                <div className='ar-td' key={i} style={colSizes[i]?{flex: `${colSizes[i]}px 0`}: {flex:`1 0`}}>
                                                    {d}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                        </div>
                    </div>
                    <div className='ar-thead'>
                            
                            <div className='ar-thead'>
                                <div className='ar-tr ar-th-independent'>
                                   Legal
                                </div>
                            </div>
                    </div>
                    <div className='ar-tbody' style={{minWidth: this.state.minWidth}}>
                        <div className='ar-tbody-group'>
                                <div className='ar-tr'>
                                    {
                                        other.map(
                                            (d,i)=>(
                                                <div className='ar-td' key={i} style={colSizes[i]?{flex: `${colSizes[i]}px 0`}: {flex:`1 0`}}>
                                                    {d}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                        </div>
                        <div className='ar-tbody-group'>
                                <div className='ar-tr'>
                                    {
                                        other.map(
                                            (d,i)=>(
                                                <div className='ar-td' key={i} style={colSizes[i]?{flex: `${colSizes[i]}px 0`}: {flex:`1 0`}}>
                                                    {d}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                        </div>
                        <div className='ar-tbody-group'>
                                <div className='ar-tr'>
                                    {
                                        other.map(
                                            (d,i)=>(
                                                <div className='ar-td' key={i} style={colSizes[i]?{flex: `${colSizes[i]}px 0`}: {flex:`1 0`}}>
                                                    {d}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                        </div>
                        <div className='ar-tbody-group'>
                                <div className='ar-tr'>
                                    {
                                        other.map(
                                            (d,i)=>(
                                                <div className='ar-td' key={i} style={colSizes[i]?{flex: `${colSizes[i]}px 0`}: {flex:`1 0`}}>
                                                    {d}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                        </div>
                    </div>
                    <div className='ar-thead'>
                            <div className='ar-thead'>
                                <div className='ar-tr ar-th-independent'>
                                    Closed
                                </div>
                            </div>
                    </div>
                    <div className='ar-tbody' style={{minWidth: this.state.minWidth}}>
                        <div className='ar-tbody-group'>
                                <div className='ar-tr'>
                                    {
                                        other.map(
                                            (d,i)=>(
                                                <div className='ar-td' key={i} style={colSizes[i]?{flex: `${colSizes[i]}px 0`}: {flex:`1 0`}}>
                                                    {d}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                        </div>
                        <div className='ar-tbody-group'>
                                <div className='ar-tr'>
                                    {
                                        other.map(
                                            (d,i)=>(
                                                <div className='ar-td' key={i} style={colSizes[i]?{flex: `${colSizes[i]}px 0`}: {flex:`1 0`}}>
                                                    {d}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                        </div>
                        <div className='ar-tbody-group'>
                                <div className='ar-tr'>
                                    {
                                        other.map(
                                            (d,i)=>(
                                                <div className='ar-td' key={i} style={colSizes[i]?{flex: `${colSizes[i]}px 0`}: {flex:`1 0`}}>
                                                    {d}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                        </div>
                        <div className='ar-tbody-group'>
                                <div className='ar-tr'>
                                    {
                                        other.map(
                                            (d,i)=>(
                                                <div className='ar-td' key={i} style={colSizes[i]?{flex: `${colSizes[i]}px 0`}: {flex:`1 0`}}>
                                                    {d}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}
