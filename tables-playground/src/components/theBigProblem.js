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
const columnsObject = {
    independentHeaders: ['Legends', 'Money Makers', 'Dedicated People'],
    headers: [{header:'Players', field:'player'}, {header: 'Coachs', field:'coach'}, {header:'ladies', field:'lady'}]
}
const dataObject ={
    independentSubheaders: ['sub header 1', 'sub header 2'],
    data: [{player: 'Drogba', coach: 'Ferguson', lady:'Mother Theresa'},
     {player: 'Gianfranco Zola', coach: 'Ferguson', lady:'Aung Sang Suu Kyi'},
     {player: 'John Terry', coach: 'Guardiola', lady:'Mothers'},
     {player: 'Ricardo Carvalho', coach: 'Morinho', lady:'Serena Williams'},
     {player: 'Claude Makelele', coach: 'Di Mateo', lady:'Mothers'},
     {player: 'Lampard', coach: 'Lampard', lady:'Michelle Obame'},
     {player: 'Arjen Robben', coach: 'Boby Robson', lady:'Queen of Englans'},
     {player: 'Diego Costa', coach: 'Franz Beckenbauer', lady:'Oprah Winfrey'},
     {player: 'Dan Petrescu', coach: 'Sir Matt Busby', lady:'Madonna'},
     {player: 'Eidur Gudjohnsen', coach: 'Fabio Capello', lady:'Indira Gandhi'},
     {player: 'Eden Hazard', coach: 'Brian Clough', lady:' Audrey Hepburn '},
     {player: 'Ashley Cole', coach: 'Johan Cruyff', lady:'Duchess of Cambridge'},
     {player: 'NGolo Kanté', coach: 'Ernst Happel', lady:'Mute R Kelly'},
     {player: 'Ruud Gullit', coach: 'Helenio Herrera', lady:'Queen of Saba'},
     {player: 'Branislav Ivanović', coach: 'Guus Hiddink', lady:'Beyonce'},
     {player: 'César Azpilicueta', coach: 'Ottmar Hitzfeld', lady:'Rihanna'},
     {player: 'Marcel Desailly', coach: 'Marcello Lippi', lady:'Monroe'}
    ],
    groupLength:[7, 10]
}
// data structure check, display function 80% done. next: displaying the entire structure and resizing using sizing, and thinking about using data as props
export default class TheResizeProblem extends Component{
    constructor(props){
        super(props)
        this.state ={
            minWidth: '1000px',
            data:['brdk', 'mane', 'zizou'],
            other:['legend', 'African beast', 'power shot'],
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
    displayMainHeder(headers, sizes){
        return (
            <div className='ar-tr'>
                {
                    headers.map(
                        (d, i) =>(
                            <div className='ar-resizable-header pointed ar-th' style={sizes[i]?{flex: `${sizes[i]}px 0`}: {flex:`1 0`}} key={i}>
                                <div className='ar-th-data'>{d.header}</div>
                                    <div className='ar-resizer' 
                                        onMouseDown={e=>this.handleResizeStart(e, i)}
                                    />
                                </div>
                        )
                    )
                }
            </div>
        )
    }
    displayIndependentHeader(str){
        return (
            <div className='ar-tr'>
                <div className='ar-tr ar-th-independent'>
                                    {str}
                </div>
        </div>
        )
    }
    displayGroupingHeader(str, number){
        return (
            <div className='ar-tr' key={`${str}-${number}`}>
                <div className='ar-tr ar-th-independent ar-th-group'>
                    {str}
                </div>
        </div>
        ) 
    }
    displaySingleDataRow(row, headers,sizes){
        return headers.map(
            (d,i)=>{
                return (
                    <div className='ar-td' key={i} style={sizes[i]?{flex: `${sizes[i]}px 0`}: {flex:`1 0`}}>
                        {row[d.field]}
                    </div>
                )
            }
        )
    }
    displayGroupRowData(data, headers,length, start, sizes){
        const end = start + length
        const newData = data.slice(start, end)
        return newData.map(
            (d, i)=> <div className='ar-tr' key={`${i}-${i+start}`}>{this.displaySingleDataRow(d, headers, sizes)}</div>  
        )
    }
    displayTableBody(data, headers,subHeaders, groupLength,sizes){
        let body =[]
        let start = 0
        if(groupLength.length){
            for(let j=0; j < groupLength.length; j++){
                let groupRow = this.displayGroupRowData(data, headers, groupLength[j], start, sizes)
                if(subHeaders[j]){
                    groupRow = [this.displayGroupingHeader(subHeaders[j], j), ...groupRow]
                }
                body=[...body, ...groupRow]
                start += groupLength[j]
            }
        }
        else{
            let groupRow = this.displayGroupRowData(data, headers, data.length, 0, sizes)
            if(subHeaders.length){
                body=[this.displayGroupingHeader(subHeaders[0], 0), ...groupRow]
            }
            else{
                body = groupRow
            }
        }
        return body
    }
    render(){
        const {colSizes} = sizing
        console.log('sizes', colSizes)
        const sizes =[0,0,0]
        //body, main header and subheader
        const BodyJsx = this.displayTableBody(dataObject.data, columnsObject.headers, dataObject.independentSubheaders, dataObject.groupLength, colSizes)
        const mainHeader = this.displayMainHeder(columnsObject.headers, colSizes)
        const independentHeaders = this.displayIndependentHeader(columnsObject.independentHeaders[0])
        return (
            <div className='art-table'>
                <div className='ar-table' >
                {/* <div className='ar-thead'>
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
                            <div className='ar-tr'>
                                <div className='ar-tr ar-th-independent'>
                                    Open
                                </div>
                            </div>
                    </div> */}
                    {
                        mainHeader
                    }
                    {
                        independentHeaders
                    }
                    <div className='ar-tbody' style={{minWidth: this.state.minWidth}}>
                        <div className='ar-tbody-group'>
                                {/* <div className='ar-tr'>
                                    {
                                        other.map(
                                            (d,i)=>(
                                                <div className='ar-td' key={i} style={colSizes[i]?{flex: `${colSizes[i]}px 0`}: {flex:`1 0`}}>
                                                    {d}
                                                </div>
                                            )
                                        )
                                    }
                                </div> */}
                               
                                {BodyJsx}
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}
