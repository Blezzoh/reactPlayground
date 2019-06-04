import React, { Component } from 'react'
import { Form, Row, Col, } from 'react-bootstrap'
import Icon from 'react-icons-kit';
import { close } from 'react-icons-kit/fa/close'


class DropDownWithSelectBoxes extends Component {
    state = {
        hidden: true,
        value: ''
    }
    onFocus() {
        this.setState({ hidden: false })
        console.log('focused')
    }
    onBlur() {
        this.setState({ hidden: true })
    }
    handleChange(e) {
        this.setState({ value: e.target.value })
    }
    render() {
        const { data, selected, onBoxCheck, onRemove, inputLabel,dataName, selectAll } = this.props
        const { value } = this.state
        console.log(data)
        return (
            <Row>
                <Col lg={3}>
                    <div onMouseLeave={() => this.onBlur()} onMouseEnter={() => this.onFocus()}>
                        <div className='mb-0'>
                            <div className='mb-2'>
                                {
                                    Array.isArray(selected) && Array.isArray(data) ? 
                                    // selected.map(
                                    //     (d, i) => <Col key={`sel-dp-${i}`}><span className='mr-5'>{d}</span><Icon icon={close} size={14} onClick={() => onRemove(d)} /></Col>
                                    // ) 
                                    <div>{selected.length} of {data.length} {dataName}s</div>
                                    : null
                                }
                            </div>
                            <div>
                                <Form.Group className='float-label-control'>
                                    <Form.Control onFocus={() => this.onFocus()} onChange={(e) => this.handleChange(e)} valuue={value} />
                                    <Form.Label>{inputLabel}</Form.Label>
                                </Form.Group>
                            </div>
                            {/* <Icon  */}
                        </div>
                        <div hidden={this.state.hidden}>
                            <Form.Check label='select All' checked={Array.isArray(data) && Array.isArray(selected) ?data.length === selected.length:false} 
                                onChange={()=>selectAll()}
                            />
                            {
                                Array.isArray(data) && Array.isArray(selected) ? data.map(
                                    (d, i) => {
                                        console.log(d)
                                        if (!value || `${d}`.startsWith(value)) {
                                            return <div><Form.Check label={`${d}`} checked={selected.indexOf(d) > -1} onChange={() => onBoxCheck(d)} key={`${d}-${i}`} /></div>
                                        }
                                        return null
                                    }
                                ) : null
                            }
                        </div>
                    </div>

                </Col>
                <Col />
            </Row>
        )
    }
}
