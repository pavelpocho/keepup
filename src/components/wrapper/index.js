import css from './index.css';
import React, { Component } from 'react';
import TopBar from '../top-bar';
import MainArea from '../main-area';
import BottomBar from '../bottom-bar';
import SignalR from '../../utils/signalr';

import { hubConnection } from 'signalr-no-jquery';


export default class Wrapper extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            content: 0
        }

        new SignalR();
    }

    setContent(content) {
        this.setState({
            content: content
        })
    }

    render() {
        return (
            <div className="wrapper">
                <TopBar title={this.state.content == 0 ? "Your Tasks" : "Your Scores"}/>
                <MainArea content={this.state.content} />
                <BottomBar selected={this.state.content} wrapper={this} />
            </div>
        )
    }

}