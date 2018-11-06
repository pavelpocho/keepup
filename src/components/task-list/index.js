import css from './index.css';
import React, { Component } from 'react';

export default class TaskList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="task-list">
                <p className="section-title">Persistent tasks</p>
                {
                    this.props.children
                }
                <p className="section-title">One-time tasks</p>
                {
                    this.props.children
                }
            </div>
        )
    }

}