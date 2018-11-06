import css from './index.css';
import React, { Component, Fragment } from 'react';
import Overlay from '../overlay';

export default class OverflowMenu extends Component {

    constructor(props) {
        super(props);
    }

    close() {
        this.props.parent.toggleOverflow();
    }
    closeRibbon() {
        this.props.parent.closeRibbon();
    }

    render() {
        return (
            <Fragment>
                <div className="overflow-menu">
                    {this.props.children}
                </div>
                <Overlay zIndex={3} onClick={() => {this.props.ribbon ? this.closeRibbon() : this.close()}} />
            </Fragment>
        )
    }

}