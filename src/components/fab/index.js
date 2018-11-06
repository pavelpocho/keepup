import css from './index.css';
import React, { Component } from 'react';

export default class FloatingActionButton extends Component {

    constructor(props) {
        super(props);
        this.fab = React.createRef();
    }

    componentDidMount() {
        if (window.innerWidth > 800) {
            this.fab.current.style.right = (window.innerWidth - 800) / 2 + 20;
        }
    }

    render() {

        return (
            <button className="floating-action-button" ref={this.fab} onClick={() => {this.props.mainArea.openCreateDialog()}}>
                <i className="material-icons">add</i>
            </button>
        )

    }

}