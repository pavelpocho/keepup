import css from './index.css';
import React, { Component } from 'react';

export default class Overlay extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="overlay" onClick={() => {this.props.onClick()}} style={{zIndex: this.props.zIndex, opacity: this.props.opacity ? this.props.opacity : "0"}}></div>
        )
    }

}