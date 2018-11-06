import css from './index.css';
import React, { Component } from 'react';
import Overlay from '../overlay';

export default class TaskViewActionRibbon extends Component {

    constructor(props) {
        super(props);

        this.view = React.createRef();

    }

    close() {
        this.props.taskView.closeRibbon();
    }

    render() {

        return (
            <React.Fragment>
                <div className="task-view-action-ribbon" ref={this.view}>
                    <button className="tvar-button">
                        <i className="material-icons">play_arrow</i>
                    </button>
                    <button className="tvar-button">
                        <i className="material-icons">plus_one</i>
                    </button>
                    <button className="tvar-button">
                        <i className="material-icons">done</i>
                    </button>
                </div>
                <Overlay onClick={() => {this.close()}} zIndex={2}/>
            </React.Fragment>
        )

    }

}