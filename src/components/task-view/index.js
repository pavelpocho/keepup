import css from './index.css';
import React, { Component } from 'react';
import TaskViewActionRibbon from '../task-view-action-ribbon';
import { RippleManager } from '../ripple';
import OverflowMenu from '../overflow-menu';
import OverflowButton from '../overflow-button';
import WorkView from '../work-view';

export default class TaskView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ribbon: false,
            expanded: false,
            overflow: false,
            working: false
        }
        this.ribbon = React.createRef();
        this.view = React.createRef();
        this.progressBar = React.createRef();
    }

    openRibbon() {
        this.setState({
            ribbon: true
        });
    }
    closeRibbon() {
        this.setState({
            ribbon: false
        });
    }

    toggleOverflow() {
        this.setState((prevState) => {
            return {
                overflow: !prevState.overflow
            }
        })
    }

    showMore() {
        this.setState({
            expanded: true
        })
        this.view.current.style.height = "164px";
        this.view.current.childNodes[0].style.height = "164px";
    }
    showLess() {
        this.setState({
            expanded: false
        })
        this.view.current.style.height = "56px";
        this.view.current.childNodes[0].style.height = "56px";
    }

    componentDidMount() {
        RippleManager.setUp();
    }

    componentDidUpdate() {
        if (this.ribbon.current) {
            setTimeout(() => {
                this.ribbon.current.view.current.style.opacity = "1";
                RippleManager.setUp();
            }, 20);
        }
        if (this.progressBar.current) {
            this.progressBar.current.style.width = this.progressBar.current.parentElement.offsetWidth - 108 + "px";
        }
    }

    startWork() {
        this.setState({
            working: true
        })
    }
    stopWork() {
        this.setState({
            working: false
        })
    }

    render() {

        return (
            <div className="task_view" ref={this.view} >
                <div className="task_color_strip"></div>
                <div className="task-top">
                    <div className="task_info">
                        <p className="task_title" onClick={() => {this.state.expanded ? this.showLess() : this.showMore()}}>{this.props.title}</p>
                        <p className="task_duration">{this.props.time}</p>
                    </div>
                    <div className="task_action">
                        <button className="task_finish" onClick={() => {this.openRibbon()}}><i className="material-icons">done</i></button>
                        <button className="task_overflow_button" onClick={() => {this.toggleOverflow()}}><i className="material-icons">more_vert</i></button>
                    </div>                
                    {
                        this.state.ribbon ? (
                            <OverflowMenu parent={this} ribbon={true} >
                                <OverflowButton text={"Start Work"} icon={"play_arrow"} onClick={() => {this.startWork()}} />
                                <OverflowButton text={"Set as Finished"} icon={"done"} onClick={() => {this.setAsFinished()}} />
                                <OverflowButton text={"Add time"} icon={"add"} onClick={() => {this.addTime()}} />
                            </OverflowMenu>
                        ) : null
                    }
                    {
                        this.state.working ? (
                            <WorkView background={"#a1a1a1"} title={this.props.title} parent={this} />
                        ) : null
                    }
                    {
                        this.state.overflow ? (
                            <OverflowMenu parent={this}>
                                <OverflowButton text={"Edit"} icon={"edit"} onClick={() => {this.edit()}} />
                                <OverflowButton text={"Delete"} icon={"delete"} onClick={() => {this.delete()}} />
                            </OverflowMenu>
                        ) : null
                    }
                </div>
                {
                    this.state.expanded ? (
                        <div className="task-expanded-info">
                            <div className="task-progress-bar-wrap">
                                <div className="task-progress-bar" ref={this.progressBar}>
                                    <div className="task-progress-bar-inner"></div>
                                </div>
                                <p>46%</p>
                            </div>
                            <p className="task-subtitle">Go to the park, then to the river.</p>
                            <div className="task-time-left-wrap">
                                <p className="task-time-left-title">{"Time left:"}</p>
                                <p className="task-time-left"><i>25 minutes</i></p>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        )

    }

}