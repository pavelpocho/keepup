import css from './index.css';
import React, { Component } from 'react';
import { RippleManager } from '../ripple';

export default class OverflowButton extends Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        RippleManager.setToButton(this.ref.current);
    }

    render() {
        return (
            <button className="overflow-button" onClick={() => {this.props.onClick()}} ref={this.ref}>
                <i className="material-icons">{this.props.icon}</i>
                <p className="ob-text">{this.props.text}</p>
            </button>
        )
    }

}