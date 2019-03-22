import React, { Component } from 'react'
import './artable.css'
let sizing = {
    colSizes: [],
    minSize: 0.1,
    currentlySizing: -1,
    startX: 0,
    flexNumber: 0,
    initialFlex: 0
}
const columnsObject = {
    independentHeaders: ['Legends', 'Grinders', 'Kept it 100'],
    headers: [{ header: 'Players', field: 'player' }, { header: 'Coachs', field: 'coach' }, { header: 'ladies', field: 'lady' }]
}
let dataObject = [
    {
        independentSubheaders: [],
        data: [{ player: 'Drogba', coach: 'Ferguson', lady: 'Mother Theresa', selected: false },
        { player: 'Gianfranco Zola', coach: 'Morinho', lady: 'Aung Sang Suu Kyi', selected: false },
        { player: 'John Terry', coach: 'Guardiola', lady: 'Mothers', selected: false },
        { player: 'Ricardo Carvalho', coach: 'Morinho', lady: 'Serena Williams', selected: false },
        { player: 'Claude Makelele', coach: 'Di Mateo', lady: 'Ndabaga', selected: false },
        { player: 'Lampard', coach: 'Lampard', lady: 'Michelle Obame', selected: false },
        { player: 'Arjen Robben', coach: 'Boby Robson', lady: 'Queen of England', selected: false },
        { player: 'Diego Costa', coach: 'Franz Beckenbauer', lady: 'Oprah Winfrey', selected: false },
        { player: 'Dan Petrescu', coach: 'Sir Matt Busby', lady: 'Madonna', selected: false },
        { player: 'Eidur Gudjohnsen', coach: 'Fabio Capello', lady: 'Indira Gandhi', selected: false },
        { player: 'Eden Hazard', coach: 'Brian Clough', lady: ' Audrey Hepburn ', selected: false },
        { player: 'Ashley Cole', coach: 'Johan Cruyff', lady: 'Duchess of Cambridge', selected: false },
        { player: 'NGolo Kanté', coach: 'Ernst Happel', lady: 'Mute R Kelly', selected: false },
        { player: 'Ruud Gullit', coach: 'Helenio Herrera', lady: 'Queen of Saba', selected: false },
        { player: 'Branislav Ivanović', coach: 'Guus Hiddink', lady: 'Beyonce', selected: false },
        { player: 'César Azpilicueta', coach: 'Ottmar Hitzfeld', lady: 'Rihanna', selected: false },
        { player: 'Marcel Desailly', coach: 'Marcello Lippi', lady: 'Monroe', selected: false }
        ],
        groupLength: [4, 3]
    },
    {
        independentSubheaders: ['Still Active', 'Inactive'],
        data: [{ player: 'Drogba', coach: 'Ferguson', lady: 'Mother Theresa', selected: false },
        { player: 'Gianfranco Zola', coach: 'Morinho', lady: 'Aung Sang Suu Kyi', selected: false },
        { player: 'John Terry', coach: 'Guardiola', lady: 'Mothers', selected: false },
        { player: 'Ricardo Carvalho', coach: 'Morinho', lady: 'Serena Williams', selected: false },
        { player: 'Claude Makelele', coach: 'Di Mateo', lady: 'Ndabaga', selected: false },
        { player: 'Lampard', coach: 'Lampard', lady: 'Michelle Obame', selected: false },
        { player: 'Arjen Robben', coach: 'Boby Robson', lady: 'Queen of England', selected: false },
        { player: 'Diego Costa', coach: 'Franz Beckenbauer', lady: 'Oprah Winfrey', selected: false },
        { player: 'Dan Petrescu', coach: 'Sir Matt Busby', lady: 'Madonna', selected: false },
        { player: 'Eidur Gudjohnsen', coach: 'Fabio Capello', lady: 'Indira Gandhi', selected: false },
        { player: 'Eden Hazard', coach: 'Brian Clough', lady: ' Audrey Hepburn ', selected: false },
        { player: 'Ashley Cole', coach: 'Johan Cruyff', lady: 'Duchess of Cambridge', selected: false },
        { player: 'NGolo Kanté', coach: 'Ernst Happel', lady: 'Mute R Kelly', selected: false },
        { player: 'Ruud Gullit', coach: 'Helenio Herrera', lady: 'Queen of Saba', selected: false },
        { player: 'Branislav Ivanović', coach: 'Guus Hiddink', lady: 'Beyonce', selected: false },
        { player: 'César Azpilicueta', coach: 'Ottmar Hitzfeld', lady: 'Rihanna', selected: false },
        { player: 'Marcel Desailly', coach: 'Marcello Lippi', lady: 'Monroe', selected: false }
        ],
        groupLength: [5, 5]
    },
    {
        independentSubheaders: [],
        data: [{ player: 'Drogba', coach: 'Ferguson', lady: 'Mother Theresa', selected: false },
        { player: 'Gianfranco Zola', coach: 'Morinho', lady: 'Aung Sang Suu Kyi', selected: false },
        { player: 'John Terry', coach: 'Guardiola', lady: 'Mothers', selected: false },
        { player: 'Ricardo Carvalho', coach: 'Morinho', lady: 'Serena Williams', selected: false },
        { player: 'Claude Makelele', coach: 'Di Mateo', lady: 'Ndabaga', selected: false },
        { player: 'Lampard', coach: 'Lampard', lady: 'Michelle Obame', selected: false },
        { player: 'Arjen Robben', coach: 'Boby Robson', lady: 'Queen of England', selected: false },
        { player: 'Diego Costa', coach: 'Franz Beckenbauer', lady: 'Oprah Winfrey', selected: false },
        { player: 'Dan Petrescu', coach: 'Sir Matt Busby', lady: 'Madonna', selected: false },
        { player: 'Eidur Gudjohnsen', coach: 'Fabio Capello', lady: 'Indira Gandhi', selected: false },
        { player: 'Eden Hazard', coach: 'Brian Clough', lady: ' Audrey Hepburn ', selected: false },
        { player: 'Ashley Cole', coach: 'Johan Cruyff', lady: 'Duchess of Cambridge', selected: false },
        { player: 'NGolo Kanté', coach: 'Ernst Happel', lady: 'Mute R Kelly', selected: false },
        { player: 'Ruud Gullit', coach: 'Helenio Herrera', lady: 'Queen of Saba', selected: false },
        { player: 'Branislav Ivanović', coach: 'Guus Hiddink', lady: 'Beyonce', selected: false },
        { player: 'César Azpilicueta', coach: 'Ottmar Hitzfeld', lady: 'Rihanna', selected: false },
        { player: 'Marcel Desailly', coach: 'Marcello Lippi', lady: 'Monroe', selected: false }
        ],
        groupLength: [7, 10]
    }
]
// data structure check, display function 80% done. next: displaying the entire structure and resizing using sizing, and thinking about using data as props
export default class TheCheckingProblem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            minWidth: '1000px',
            data: ['brdk', 'mane', 'zizou', 'beckham'],
            other: ['legend', 'African beast', 'power shot'],
            isAllSelected: false
        }
    }

    componentWillMount() {
        const { data } = this.state
        if (data && data.length) {
            const sizes = data.reduce(
                (accumulator) => {
                    return [...accumulator, 0]
                }, []
            )
            sizing = { ...sizing, colSizes: sizes }
        }
        console.log(sizing)
    }

    handleResizeStart = (e, i) => {
        e.stopPropagation()
        const parentWidth = e.target.parentElement.getBoundingClientRect().width
        let pageX = e.pageX
        // console.log('width', parentWidth, pageX, 'currently sizing', i)
        document.addEventListener('mousemove', this.handleResizeMovement)
        document.addEventListener('mouseup', this.handleResizeStop)
        document.addEventListener('mouseleave', this.handleResizeStop)
        sizing = { ...sizing, startX: pageX, parentWidth: parentWidth, resizing: true, currentlySizing: i }
    }
    handleResizeMovement = (e) => {
        // console.log('being called')
        e.stopPropagation()
        const { startX, parentWidth } = sizing
        let sizes = sizing.colSizes
        let pageX = e.pageX
        const newWidth = (parentWidth + pageX - startX)
        sizes[sizing.currentlySizing] = newWidth
        // console.log('width new', pageX, startX, parentWidth, newWidth, sizing)
        sizing = { ...sizing, flexNumber: newWidth, colSizes: sizes }
        this.forceUpdate()// as sizing is neither a prop or a state value, it is not going to trigger the rendering ... thus forcing the update
    }
    handleResizeStop = (e) => {
        // console.log('being called stop')
        e.stopPropagation()
        document.removeEventListener('mousemove', this.handleResizeMovement)
        document.removeEventListener('mouseup', this.handleResizeStop)
        document.removeEventListener('mouseleave', this.handleResizeStop)
        sizing = {
            ...sizing,
            resizing: false,
            currentlySizing: -1,
            // parentWidth: 0,
            // startX:0,
        }
        // console.log('width mouse up')
    }
    handleSelectAll() {
        const {isAllSelected} = this.state
        for (let i = 0; i < dataObject.length; i++) {
            for (let j = 0; j < dataObject[i].data.length; j++) {
                if(isAllSelected)
                    dataObject[i].data[j] = { ...dataObject[i].data[j], selected: false }
                else    
                    dataObject[i].data[j] = { ...dataObject[i].data[j], selected: true }
            }
        }
        this.setState({ isAllSelected: !this.state.isAllSelected })
    }
    displayMainHeder(headers, sizes) {
        const newHeaders = [0, ...headers]
        return (
            <div className='ar-tr'>
                {
                    newHeaders.map(
                        (d, i) => {
                            return i !== 0 ?
                                (
                                    <div className='ar-resizable-header pointed ar-th' style={sizes[i] ? { flex: `${sizes[i]}px 0` } : { flex: `1 0` }} key={i}>
                                        <div className='ar-th-data'>{d.header}</div>
                                        <div className='ar-resizer'
                                            onMouseDown={e => this.handleResizeStart(e, i)}
                                        />
                                    </div>
                                )
                                :
                                (
                                    <div className='ar-resizable-header pointed ar-th ar-th-check' style={{ flex: `30px 0` }} key={i} onClick={() => this.handleSelectAll()}>
                                        <div className='ar-th-data ar-th-data-check'>
                                            <input type='checkbox' checked={this.state.isAllSelected} readOnly />
                                        </div>
                                    </div>
                                )
                        }
                    )
                }
            </div>
        )
    }
    displayIndependentHeader(str) {
        return (
            <div className='ar-tr'>
                <div className='ar-tr ar-th-independent'>
                    {str}
                </div>
            </div>
        )
    }
    displayGroupingHeader(str, number) {
        return (
            <div className='ar-tr' key={`${str}-${number}`}>
                <div className='ar-tr ar-th-independent ar-th-group'>
                    {str}
                </div>
            </div>
        )
    }
    handleSelect(dataIndex, arrayIndex) {
        dataObject[dataIndex].data[arrayIndex] ={ ...dataObject[dataIndex].data[arrayIndex], selected: !dataObject[dataIndex].data[arrayIndex].selected}
        if(this.areAllSelected()){
            this.setState({isAllSelected: true})
        }
        else{
            this.setState({isAllSelected: false})
        }
    }
    areAllSelected(){
        for (let i = 0; i < dataObject.length; i++) {
            for (let j = 0; j < dataObject[i].data.length; j++) {
                if(!dataObject[i].data[j].selected) return false
            }
        }
        return true
    }
    displaySingleDataRow(row, headers, sizes, dataIndex, arrayIndex ) {
        const newHeaders = [0, ...headers]
        return newHeaders.map(
            (d, i) => {
                return i !== 0 ? (
                    <div className='ar-td' key={i} style={sizes[i] ? { flex: `${sizes[i]}px 0` } : { flex: `1 0` }}>
                        {row[d.field]}
                    </div>
                ) :
                    (
                        <div className='ar-td' key={i} style={{ flex: `30px 0` }} onClick={() => this.handleSelect(dataIndex, arrayIndex)}>
                            <input type='checkbox' checked={row.selected} readOnly />
                        </div>
                    )
            }
        )
    }
    displayGroupRowData(data, headers, length, start, sizes, dataIndex) {
        const end = start + length
        const newData = data.slice(start, end)
        return newData.map(
            (d, i) => <div className='ar-tr' key={`${i}-${i + start}`}>{this.displaySingleDataRow(d, headers, sizes,dataIndex,i+start)}</div>
        )
    }
    displayTableBodyGroup(data, headers, subHeaders, groupLength, sizes, dataIndex) {
        let body = []
        let start = 0
        if (groupLength && groupLength.length) {
            for (let j = 0; j < groupLength.length; j++) {
                let groupRow = this.displayGroupRowData(data, headers, groupLength[j], start, sizes, dataIndex)
                if (subHeaders && subHeaders[j]) {
                    groupRow = [this.displayGroupingHeader(subHeaders[j], j), ...groupRow]
                }
                body = [...body, ...groupRow]
                start += groupLength[j]
            }
        }
        else {
            let groupRow = this.displayGroupRowData(data, headers, data.length, 0, sizes)
            if (subHeaders.length) {
                body = [this.displayGroupingHeader(subHeaders[0], 0), ...groupRow]
            }
            else {
                body = groupRow
            }
        }
        return body
    }
    displayTableBody(data, columns, sizes) {
        const { headers, independentHeaders } = columns
        return data.map(
            (d, i) => (
                <div className='ar-tbody-group' key={`body-gr-${i}`}>
                    {
                        independentHeaders && independentHeaders[i] ?
                            this.displayIndependentHeader(independentHeaders[i]) :
                            this.displayIndependentHeader(`category ${i}`)
                    }
                    {
                        this.displayTableBodyGroup(d.data, headers, d.independentSubheaders, d.groupLength, sizes, i)
                    }
                </div>
            )
        )
    }
    render() {
        const { colSizes } = sizing
        // console.log('sizes', colSizes)
        //body, main header and subheader
        const BodyJsx = this.displayTableBody(dataObject, columnsObject, colSizes)
        const mainHeader = this.displayMainHeder(columnsObject.headers, colSizes)
        return (
            <div className='art-table'>
                <div className='ar-table' >
                    <div className='ar-thead'>
                        {
                            mainHeader
                        }
                    </div>
                    <div className='ar-tbody' >
                        {
                            BodyJsx
                        }
                    </div>
                </div>
            </div>
        )
    }
}
