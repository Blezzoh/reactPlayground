import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

const Top = ({ text }) => <div className='d-flex align-content-start'>{text}</div>

const CmdInput = ({ value, onChange, onKeyPress }) => {
    return (
        <div>
            <Form.Group>
                <Form.Control value={value} onChange={onChange} onKeyPress={onKeyPress} style={{ background: 'black', color: 'white' }} />
            </Form.Group>
        </div>
    )
}
const parseCommand = (value) => {
    var mExp = new RegExp(/^>(.*)/)
    return value.match(mExp)[1] ? value.match(mExp)[1] : ''
}

const getCommand = (value) => {
    return value.trim().split(' ')[0]
}
const promptCommand = (command) => {
    return `> ${command}`
}
export default class CmdView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '> ',
            history: ['']
        }
        this.defaultText = '> '
    }
    handleChange(e) {
        if (e.target.value.length === 1) return
        this.setState({ current: e.target.value })
    }
    handleEnter(e) {
        if (e.charCode === 13) {
            this.setState({ history: [...this.state.history, this.state.current], current: this.defaultText })
        }
    }
    render() {
        return (
            <div style={{ background: 'black', color: 'white', padding: '10px' }}>
                <h6>{this.props.title ? this.props.title : 'Ar Cmd'}</h6>
                {
                    this.state.history.map(
                        (d, i) => <Top text={d} key={`cmd-v-${i}`} />
                    )
                }
                <CmdInput
                    value={this.state.current}
                    onKeyPress={e => this.handleEnter(e)}
                    onChange={e => this.handleChange(e)}
                />
            </div>
        )
    }
}
