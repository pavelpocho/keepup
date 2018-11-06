import css from './index.css';
import React, { Component } from 'react';

export default class BottomBarButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <button className={this.props.selected ? "bottom-bar-button bbb-selected" : "bottom-bar-button"} onClick={() => {this.props.onClick()}}>
                <i className="material-icons">{this.props.iconName}</i>
                <p>{this.props.text}</p>
            </button>
        )

    }

}