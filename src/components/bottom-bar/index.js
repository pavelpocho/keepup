import css from './index.css';
import React, { Component } from 'react';
import BottomBarButton from '../bottom-bar-button';

export default class BottomBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: 0
        }
    }

    setContent(content) {
        this.setState({content});
        this.props.wrapper.setContent(content);
    }

    render() {
        return (
            <div className="bottom-bar">
                <BottomBarButton text="Tasks" iconName="done_all" selected={this.state.content == 0} onClick={() => {this.setContent(0)}}/>
                <BottomBarButton text="Scores" iconName="bar_chart" selected={this.state.content == 1} onClick={() => {this.setContent(1)}} />
            </div>
        )
    }

}