import React,{Component} from 'react'
import './resizable.css'
export default class ResizableDiv extends Component{
    render(){
        return(
            <div className='art-table'>
                <div className='ar-table'>
                    <div className ='ar-thead'>
                        <div className='ar-tr'>
                            <div className='ar-tr-resizable pointer ar-th' >
                                <div className='ar-th-content'>hahahaha</div>
                                <div className='resizer'/>
                            </div>
                            <div className='ar-tr-resizable pointer ar-th'>
                                <div className='ar-th-content'>hahahaha</div>
                                <div className='resizer'/>
                            </div>
                            <div className='ar-tr-resizable pointer ar-th'>
                                <div className='ar-th-content'>hahahaha</div>
                                <div className='resizer'/>
                            </div>
                        </div>
                        <div className='ar-tbody'>
                            ahsjsba
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}