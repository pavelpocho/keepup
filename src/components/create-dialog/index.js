import css from './index.css';
import React, { Component } from 'react';
import Overlay from '../overlay';
import { RippleManager } from '../ripple';

export default class CreateDialog extends Component {
    
    constructor(props) {
        super(props);

        this.dialog = React.createRef();
    }

    close() {
        //Closes it...
        this.props.mainArea.openCreateDialog();
    }

    componentDidMount() {
        this.dialog.current.style.marginLeft = (window.innerWidth - this.dialog.current.offsetWidth) / 2 + "px";
        RippleManager.setUp();
    }

    render() {

        return (
            <React.Fragment>
            <div className="create-dialog" ref={this.dialog}>
                <div className="cd-top">
                    <button className="cd-cancel"><i className="material-icons">clear</i></button>
                    <p className="cd-title">New task</p>
                    <button className="cd-confirm"><i className="material-icons">done</i></button>
                </div>
                <div className="cd-body">
                    <input className="cd-task-title" placeholder="Write title here..." />
                    <input className="cd-task-subtitle" placeholder="Write subtitle here..." />
                    <div className="cd-task-duration-wrap">
                        <i className="material-icons cd-icon">timer</i>
                        <input className="cd-task-duration" placeholder="Expected duration..." />
                    </div>
                    <div className="cd-task-duration-wrap">
                        <i className="material-icons cd-icon">calendar_today</i>
                        <input className="cd-task-deadline" placeholder="Deadline..."/>
                    </div>
                </div>
            </div>
            <Overlay onClick={() => {this.close()}} zIndex={4} opacity={0.3}/>
            </React.Fragment>
        )

    }

}