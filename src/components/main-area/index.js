import css from './index.css';
import React, { Component } from 'react';
import TaskList from '../task-list';
import TaskView from '../task-view';
import FloatingActionButton from '../fab';
import CreateDialog from '../create-dialog';
import { RippleManager } from '../ripple';

export default class MainArea extends Component {

    constructor(props) {
        super(props);

        this.state = {
            createDialog: false
        }
    }

    openCreateDialog() {
        this.setState((prevState) => {
            return {
                createDialog: !prevState.createDialog
            }
        })
    }

    render() {
        return (
            <div className="main-area">
                {
                    this.props.content == 0 ? (
                        <React.Fragment>
                            <TaskList>
                                <TaskView title="Walk the dog" time="45 minutes"/>
                            </TaskList>
                            <FloatingActionButton mainArea={this} />
                            {
                                this.state.createDialog ? (
                                    <CreateDialog mainArea={this} />
                                ) : null
                            }
                        </React.Fragment>
                    ) : (
                        <div className="score-board">
                            <div className="overall-score">
                                <p className="os-actual">5248</p>
                                <p className="os-title">Overall productivity</p>
                            </div>
                            <div className="score-card-wrap">
                                <div className="current-card score-card">
                                    <div className="score-today">
                                        <p className="score-today-title score-title">Today</p>
                                    </div>
                                    <div className="score-week">
                                        <p className="score-week-title score-title">This Week</p>
                                    </div>
                                </div>
                                <div className="past-card score-card">
                                    <div className="score-long">
                                        <p className="score-long-title score-title">History</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

}