import css from './index.css';
import React, { Component } from 'react';
import OverflowMenu from '../overflow-menu';
import OverflowButton from '../overflow-button';

export default class TopBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            overflow: false
        }
    }

    toggleOverflow() {
        this.setState((prevState) => {
            return {
                overflow: !prevState.overflow
            }
        })
    }

    render() {
        return (
            <div className="topbar">
                <div className="topbar-inner">
                    <p className="topbar-title">{this.props.title}</p>
                    <button className="topbar-overflow-button" onClick={() => {this.toggleOverflow()}}>
                        <i className="material-icons">more_vert</i>
                    </button>
                    {
                        this.state.overflow ? (
                            <OverflowMenu parent={this}>
                                <OverflowButton text={"Pls"} icon={"done"} onClick={() => {this.toggleOverflow()}}/>
                            </OverflowMenu>
                        ) : null
                    }
                </div>
            </div>
        )
    }

}